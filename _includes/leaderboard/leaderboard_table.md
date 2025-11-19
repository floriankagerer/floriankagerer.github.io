<table>
    <thead>
        <th class="rank">           Rank    </th>
        <th class="score">          Score </th>
        <th class="task">           Task </th>
        <th class="algorithm">      Algorithm</th>
        <th class="images">         Images <span  title="Clicking on any image redirects you to a OneDrive file that shows visualizations of all packing plans. Note that these files have approximately 360 MB." style="border-bottom: 1px dotted; width: 4cm;"><i class="fa fa-info-circle" aria-hidden="true"></i></span></th>
        <th class="submitter">      Submitter</th>
        <th class="date">           Date </th>
        <th class="packingplan">    Packing Plan</th>
    </thead>
    <tbody>
        <!-- ALGORITHM SISYPHUS-->
        {% include leaderboard/algorithms/sisyphus.md rank=1 %}
        <!-- ALGORITHM PCT-->
        {% include leaderboard/algorithms/pct.md rank=2 %}
        <!-- ALGORITHM banpu-->
        {% include leaderboard/algorithms/banpu.md rank=3 %}
        <!-- ALGORITHM heuristic O3DBP-3-2 -->
        {% include leaderboard/algorithms/o3dbp_3_2.md rank=4 %}
        <!-- ALGORITHM xflp  -->
        {% include leaderboard/algorithms/xflp.md rank=5 %}
        <!-- ALGORITHM tbd-->
    </tbody>
</table>
