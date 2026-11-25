/*
 * Leaderboard page: task filter and click-to-enlarge images.
 * The page works without this script (all entries are visible, images open as plain links).
 */
(function () {
  "use strict";

  var board = document.getElementById("leaderboard");
  if (!board) return;

  /* ---------- task filter ---------- */
  var toolbar = board.querySelector(".lb-toolbar");
  var entries = Array.prototype.slice.call(board.querySelectorAll(".lb-entry"));
  var groups = Array.prototype.slice.call(board.querySelectorAll(".lb-podium, .lb-list"));
  var buttons = Array.prototype.slice.call(board.querySelectorAll(".lb-filter"));
  var count = board.querySelector(".lb-count");
  var empty = board.querySelector(".lb-empty");

  function applyFilter(task) {
    var shown = 0;
    entries.forEach(function (entry) {
      var match = !task || entry.getAttribute("data-task") === task;
      entry.hidden = !match;
      if (match) shown += 1;
    });
    // Hide a group (podium / list) when none of its entries is left.
    groups.forEach(function (group) {
      group.hidden = !group.querySelector(".lb-entry:not([hidden])");
    });
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-task") === task));
    });
    if (empty) empty.hidden = shown > 0;
    if (count) {
      count.textContent = shown === entries.length
        ? entries.length + (entries.length === 1 ? " entry" : " entries")
        : shown + " of " + entries.length + " entries";
    }
  }

  if (toolbar) {
    toolbar.hidden = false;
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button.getAttribute("data-task"));
      });
    });
    applyFilter("");
  }

  /* ---------- click-to-enlarge images ---------- */
  var dialog = document.createElement("dialog");
  if (typeof dialog.showModal !== "function") return; // old browser: images stay plain links

  dialog.className = "lb-dialog";
  dialog.setAttribute("aria-label", "Packing plan visualization");
  dialog.innerHTML =
    '<button type="button" class="lb-dialog__close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lb-dialog__prev" aria-label="Previous image">&lsaquo;</button>' +
    '<button type="button" class="lb-dialog__next" aria-label="Next image">&rsaquo;</button>' +
    "<figure><img alt=\"\"><figcaption></figcaption></figure>";
  document.body.appendChild(dialog);

  var image = dialog.querySelector("img");
  var caption = dialog.querySelector("figcaption");
  var prev = dialog.querySelector(".lb-dialog__prev");
  var next = dialog.querySelector(".lb-dialog__next");
  var gallery = [];
  var index = 0;

  function show(i) {
    index = (i + gallery.length) % gallery.length;
    var link = gallery[index];
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    caption.textContent = link.getAttribute("data-caption") || "";
    prev.hidden = next.hidden = gallery.length < 2;
  }

  board.addEventListener("click", function (event) {
    var link = event.target.closest("a[data-lightbox]");
    // Leave modified clicks (new tab, download, ...) to the browser.
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    gallery = Array.prototype.slice.call(link.parentNode.querySelectorAll("a[data-lightbox]"));
    show(gallery.indexOf(link));
    dialog.showModal();
  });

  prev.addEventListener("click", function () { show(index - 1); });
  next.addEventListener("click", function () { show(index + 1); });
  dialog.querySelector(".lb-dialog__close").addEventListener("click", function () { dialog.close(); });
  // A click on the backdrop (the dialog element itself, outside the figure) closes it.
  dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("keydown", function (event) {
    if (gallery.length < 2) return;
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });
  dialog.addEventListener("close", function () { image.removeAttribute("src"); });
})();
