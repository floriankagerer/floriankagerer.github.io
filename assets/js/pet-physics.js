/*
 * PET-Physics page: loads the README of a GitHub repository (rendered to HTML by GitHub's API),
 * makes its relative links absolute and shows it inside #pp-readme.
 *
 * Config comes from data attributes on #pp-readme:
 *   data-repo    "owner/name"
 */
(function () {
  "use strict";

  var CACHE_TTL_MS = 30 * 60 * 1000;

  var container = document.getElementById("pp-readme");
  if (!container) return;
  var repo = container.getAttribute("data-repo");
  var repoUrl = "https://github.com/" + repo;

  /** Resolve a README-relative URL against the repository. Returns null if it should be left alone. */
  function resolveRepoUrl(url, kind) {
    if (!url || url.charAt(0) === "#") return null;
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.indexOf("//") === 0) return null;
    var base = repoUrl + "/" + (kind === "media" ? "raw" : /\/$/.test(url) ? "tree" : "blob") + "/HEAD/";
    return new URL(url, base).href;
  }

  function showError(message) {
    container.innerHTML = "";
    var p = document.createElement("p");
    p.className = "pp-status";
    p.setAttribute("role", "status");
    p.appendChild(document.createTextNode(message + " "));
    var a = document.createElement("a");
    a.href = repoUrl;
    a.textContent = "Read the README on GitHub.";
    p.appendChild(a);
    container.appendChild(p);
  }

  function readCache() {
    try {
      var raw = localStorage.getItem("pp-readme:" + repo);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeCache(html) {
    try {
      localStorage.setItem("pp-readme:" + repo, JSON.stringify({ time: Date.now(), html: html }));
    } catch (e) { /* storage unavailable: no cache */ }
  }

  function fetchReadme() {
    return fetch("https://api.github.com/repos/" + repo + "/readme", {
      headers: { Accept: "application/vnd.github.html+json" }
    }).then(function (response) {
      if (!response.ok) throw new Error("GitHub API responded with " + response.status);
      return response.text();
    });
  }

  /** Turn GitHub's README HTML into DOM nodes that fit this page. */
  function build(html) {
    // Parsed in an inert document, so nothing in it runs or loads until we insert it.
    var doc = new DOMParser().parseFromString(html, "text/html");
    var root = doc.querySelector("article") || doc.body;

    root.querySelectorAll("script, style, iframe, object, embed, form, link, meta").forEach(function (el) {
      el.remove();
    });
    root.querySelectorAll("*").forEach(function (el) {
      Array.prototype.slice.call(el.attributes).forEach(function (attr) {
        if (/^on/i.test(attr.name) || /^\s*javascript:/i.test(attr.value)) el.removeAttribute(attr.name);
      });
    });

    // The page has its own hero with the title, so drop the README's H1 blocks (banner and title).
    root.querySelectorAll("h1").forEach(function (h) {
      (h.closest(".markdown-heading") || h).remove();
    });
    root.querySelectorAll("div[align]").forEach(function (div) {
      if (!div.textContent.trim() && !div.querySelector("img")) div.remove();
    });
    while (root.firstElementChild && /^(BR|HR)$/.test(root.firstElementChild.tagName)) {
      root.firstElementChild.remove();
    }

    // Absolute URLs for images and links that are relative to the repository.
    root.querySelectorAll("img[src]").forEach(function (img) {
      var abs = resolveRepoUrl(img.getAttribute("src"), "media");
      if (abs) img.setAttribute("src", abs);
      img.setAttribute("loading", "lazy");
    });
    root.querySelectorAll("a[href]").forEach(function (a) {
      var abs = resolveRepoUrl(a.getAttribute("href"), "link");
      if (abs) a.setAttribute("href", abs);
      if (/^https?:/i.test(a.getAttribute("href"))) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
    });

    // GitHub puts heading ids on a separate permalink anchor, prefixed with "user-content-".
    root.querySelectorAll("a.anchor").forEach(function (anchor) {
      var heading = anchor.parentElement && anchor.parentElement.querySelector("h1, h2, h3, h4, h5, h6");
      var id = (anchor.getAttribute("id") || "").replace(/^user-content-/, "");
      if (heading && id) heading.id = id;
      anchor.remove();
    });
    return root;
  }

  function buildSectionNav(root) {
    var nav = document.getElementById("pp-nav");
    if (!nav) return;
    root.querySelectorAll("h2[id]").forEach(function (h) {
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();
      nav.appendChild(a);
    });
  }

  function render(html) {
    var root = build(html);
    container.innerHTML = "";
    container.removeAttribute("aria-busy");
    Array.prototype.slice.call(root.childNodes).forEach(function (node) {
      container.appendChild(document.importNode(node, true));
    });
    buildSectionNav(container);
    // The target did not exist when the browser first tried to jump to the hash.
    if (location.hash.length > 1) {
      try {
        var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) target.scrollIntoView();
      } catch (e) { /* malformed hash: stay at the top */ }
    }
  }

  var cached = readCache();
  if (cached && Date.now() - cached.time < CACHE_TTL_MS) {
    render(cached.html);
    return;
  }

  fetchReadme().then(function (html) {
    writeCache(html);
    render(html);
  }).catch(function () {
    // Prefer an out-of-date copy over an error, e.g. when GitHub's anonymous rate limit is hit.
    if (cached) render(cached.html);
    else showError("The README could not be loaded.");
  });
})();
