---
layout: category
permalink: /dataset/
title: 'Dataset <tt>BED-BPP</tt>'
author_profile: true
last_modified_at: 2023-02-14
toc: true
---

<!-- Definition of variables -->
{% capture ref_bed-bpp_file %} "/assets/bed-bpp/bed-bpp_v1.json" {% endcapture %}  <!-- use with {{ref_bed-bpp_file}} -->
{% capture tt_bed-bpp %}<tt>BED-BPP</tt>{% endcapture %} <!-- use with {{tt_bed-bpp}} -->
{% capture url_publication %} https://doi.org/10.1177/02783649231193048 {% endcapture %} <!-- use with {{url_publication}} -->

<!-- Quick links -->
<small>
Quick links: <a href={{ref_bed-bpp_file}} download class="fa fa-download"> {{tt_bed-bpp}}</a> | [Description](#description) | [Download](#download)
</small>


<!-- Intro -->
We present our benchmarking dataset for robotic bin packing, called {{tt_bed-bpp}}. We aim to provide a dataset that is used to compare the performance of algorithms that solve many variants of the three-dimensional bin packing problem.

Whenever you use the dataset, please cite our publication:

>
> Kagerer F, Beinhofer M, Stricker S, Nüchter A. BED-BPP: Benchmarking dataset for robotic bin packing problems. *The International Journal of Robotics Research*. 2023;42(11):1007-1014. doi:10.1177/02783649231193048 <br>
> <a href="https://floriankagerer.github.io/assets/publications/Kagereretal2023-ijrr.bib" target="_blank">[BibTeX]</a>
<a href="https://doi.org/10.1177/02783649231193048" target="_blank">[DOI]</a>
>


<!-- Description -->
#### Description
This section briefly describes the dataset {{tt_bed-bpp}}. For a detailed description of the dataset, please read our [publication]({{url_publication}}){:target="_blank"}. The usage of the dataset is shown in our Git Repository [bed-bpp-env](https://github.com/floriankagerer/bed-bpp-env/){:target="_blank"}.


<!-- Characteristics -->
**Characteristics.** The following table summarizes the characteristics of the dataset. 

| Property | Value <br /> <font size="2">(Mean ± Standard Deviation)</font> |
|----------|----------------------------------------------------------------|
| length                            | 10&nbsp;003 orders                    |
| different articles                | 2&nbsp;621 articles                   |
| different item sizes              | 974 sizes                             |
| items per order                   | 43 items ± 14 items                   |
| length of longest n-gram          | 8 items ± 3 items                     |
| different item sizes per order    | 22 sizes ± 8 sizes                    |

<!-- Structure -->
**Structure.** In general, the dataset {{tt_bed-bpp}} has the following structure:

```python
{
    "order_i": {
        "item_sequence": {
            "1": {
                "article": "article-id1",
                "id": "id1",
                "product_group": "product_group1",
                "length/mm": 300,
                "width/mm": 200,
                "height/mm": 100,
                "weight/kg": 3.14,
                "sequence": 1
            },
            "2": {...},
            ...
        },
        "properties": {
            "id": "0123456",
            "order_nr": "01234567",
            "type": "chilled frozen grocery",
            "target": "euro-pallet"
        }
    }
}
```

The dataset consists of 10&nbsp;003 orders, and each order has the structure of a Python dictionary with the keys `"item_sequence"` and `"properties"`. The item sequence is represented as Python dictionary and stores besides the item size, the article information and the sequence in which the items arrive at the robot. The properties comprise information about the order. 

<!-- Download -->
#### Download
<p style="text-align:center">
<a href={{ref_bed-bpp_file}} download class="fa fa-download"> Download {{tt_bed-bpp}}</a>
</p>
If you click on the link above, the dataset is downloaded. The .json file has approximately 78.3&nbsp;MB.

