---
layout: category
permalink: /leaderboard/
title: "Leaderboard"
author_profile: true
last_modified_at: 2023-02-15
toc: true
---

<style>
    .rank,
    .score {
        text-align: center;
        width: 5%;
    }

    .task {
        text-align: center;
        width: 10%;
        padding: 5px;
    }
    .algorithm {
        text-align: left;
        width: 20%;
        padding: 10px;
    }

    .images {
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        overflow-x: scroll;
    }

    .submitter {
        text-align: left;
        width: 10%;
        padding: 10px;
    }

    .packingplan {
        text-align: right;
        width: 10%;
    }

    .date {
        text-align:center;
        max-width: 5%;
    }

    td {
        vertical-align: middle;
        text-align: center;
        padding: 0px;
    }

    td:first-child {
        width: 50px;
    }

    td:last-child {

        height: 100px;
    }

    td img {
    width: 75%;
    height: auto;
    padding: 0px;
    max-height: 300px;
    max-width: 300px;
    }

    td img:hover{
        width: 100%;
        height: auto;
        padding: 0px;
    }

</style>

<!-- Definition of variables -->
{% capture tt_bed-bpp %}<tt>BED-BPP</tt>{% endcapture %} <!-- use with {{tt_bed-bpp}} -->
{% capture url_submission %}https://tinyurl.com/subm-bed-bpp-res{% endcapture %} <!-- use with {{url_submission}} -->
{% capture url_publication %} . {% endcapture %} <!-- use with {{url_publication}} -->

<!-- Quick links -->
<small>
Quick links: [<i class="fa fa-upload"></i><i class="fab fa-dropbox"></i>]({{url_submission}}) | [Submission](#submission) | [Explanation Evaluation](#explanation-of-evaluation)
</small>

<!--LEADERBOARD-->

<!-- Add leaderboard in folder _includes in order that jekyll finds it -->
{% include leaderboard/leaderboard_table.md %}


#### Description of Tasks
This section briefly describes the tasks for which {{tt_bed-bpp}} is used. For a detailed description of the dataset, please read our [publication]({{url_publication}}){:target="_blank"}.
- <u>Offline 3DBP</u> \
    The solver obtains all items that have to be packed. The solver is allowed to change the sequence of the items arbitrarily, i.e., the item sequence in the resulting packing plan might differ from the item sequence in {{tt_bed-bpp}}.   

- <u>O3DBP - Online 3DBP</u> \
    In online three-dimensional bin packing, the solver must pack the items in a given, fixed sequence. This task can be interpreted as a three-dimensional version of the video game [Tetris](https://en.wikipedia.org/wiki/Tetris){:target="_blank"}.

- <u>O3DBP-p-s</u> \
    In this task, the solver knows the next `p` items and can select one of the next `s` items to place next. In general, for integers `p,s` it holds `p>=s`.


<!-- hrule -->
--- 

<!-- Submission -->
### Submission
<p style="text-align:center">
<a href="{{url_submission}}" target="_blank"><i class="fa fa-upload">&nbsp; Submission &nbsp;</i><i class="fab fa-dropbox"></i></a>
</p>
If you click on the link above, a new tab opens with a file request of Dropbox. There, please upload two files:

1.  <u>Author Information</u> ([example_author_information.txt](/assets/submission_info/example_author_information.txt){:target="_blank"}) \
    This .txt file contains information about the author such as the name of the <i>submitter</i>, the <i>e-mail address</i> and the <i>filename</i> of the submitted packing plan.

2.  <u>Packing Plan</u> ([example_packing_plan.json](/assets/submission_info/example_packing_plan.json){:target="_blank"}) \
    This .json file contains the list of actions for each order of the {{tt_bed-bpp}}. An action contains information about the placement, the item and its orientation, e.g.

    ```python
    action = {
        "flb_coordinates": [0, 0, 0],
        "item": {
            "article": "article-id1",
            "id": "id1",
            "product_group": "product_group1",
            "length/mm": 300,
            "width/mm": 200,
            "height/mm": 100,
            "weight/kg": 3.14,
            "sequence": 1
        }
        "orientation": 0
    }
    ```

> **NAMING CONVENTION**. \
> Please name your packing plan file in the following way:
> 
> {SUBMISSION_DATE}\_ {SURNAME_SUBMITTER}\_ {ALGORITHM_NAME}\_ {TASK}.json
>
> For example, *2023-01-22_kagerer_algorithm1_o3dbp.json*.



<!-- hrule -->
--- 

### Explanation of Evaluation
The score of an algorithm, which is decisive for the leaderboard's ranking, is the percentage of stable palletized items within a certain height level. 

To this end, for each packing plan a stability check in Blender is carried out. The following video shows stability checks for four algorithms for order `"00100408"`.


<!-- Blender Stability Check Video -->
<center><video width="100%" muted controls>
    <source src="/assets/video/stability_check_video.mp4" type="video/mp4">
</video></center>


The *stability check is successful*, when any item's movement in the height is less than 0.01 meters for 10 seconds. In the video, for `xflp` the stability check fails. 

Consequently, the contribution of this packing plan to the overall rating of `xflp` is zero.

For the stable piles of `Online-3D-BPP-PCT`, `O3DBP-3-2` and `sisyphus`, we have to determine the amount of items that are completely placed below the height level of 2 meters. As an example, this procedure is visualized for `sisyphus`' packing plan in the following video.


<!-- Items for Rating of an Algorithm -->
<center>
<video width="100%" muted controls>
    <source src="/assets/video/example_evaluation_sisyphus_00100408.mp4" type="video/mp4">
</video>
</center>


Finally, the remaining items contribute to the rating of an algorithm.


