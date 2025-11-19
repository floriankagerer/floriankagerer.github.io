<!-- Retrieve colored rank -->
{% if include.rank == 1 %}
    {% assign colored_rank = '<span style="color:gold"><b>1</b></span>' %}
{% elsif include.rank == 2 %}
    {% assign colored_rank = '<span style="color:silver"><b>2</b></span>' %}
{% elsif include.rank == 3 %}
    {% assign colored_rank = '<span style="color:#cd7f32"><b>3</b></span>' %}
{% else %}
    {% assign colored_rank = include.rank %}
{% endif %}

<!-- Algorithm banpu-->
<tr>
    <td class="rank">    {{ colored_rank }}   </td> 
    <td class="score">    0.067303    </td> 
    <td class="task">    <span  title="The algorithm uses Adaptive Large Neighborhood Search combined with heuristic packing strategies. It iteratively destroys and repairs pallet configurations through operators with adaptive weights, learning which strategies work best through extreme point placement." style="border-bottom: 1px dotted; width: 4cm;">LAHCSISR</span>    </td> 
    <td class="algorithm">  <span  title="Currently no implementation available." style="border-bottom: 1px dotted; width: 4cm;">banpu</span>  </td>
    <td class="images"> <!-- Images -->
    <!--TODO(florian): Add images and link  -->
        <!-- <div> -->
            <!-- PDF Link -->
            <!-- <a href="https://1drv.ms/b/s!AmjGTsdpTDmPhnOJuX87XyiztQ7R" target="_blank"> -->
                <!-- Image 1 / order 00100007 -->
                <!-- <img    src="/assets/leaderboard_visualization/heuristic-o3dbp-3-2/order_00100007.png" -->
                        <!-- width="100" height="100"      -->
                        <!-- onmouseover="this.width='250'; this.height='250'"      -->
                        <!-- onmouseout="this.width='100'; this.height='100'"   -->
                        <!-- text="order 00100007"> -->
                <!-- Image 2 / order 00100408 -->
                <!-- <img    src="/assets/leaderboard_visualization/heuristic-o3dbp-3-2/order_00100408.png" -->
                        <!-- width="100" height="100"      -->
                        <!-- onmouseover="this.width='200'; this.height='200'"      -->
                        <!-- onmouseout="this.width='100'; this.height='100'"   -->
                        <!-- text="order 00100408"> -->
                <!-- Image 3 / order 00100970 -->
                <!-- <img    src="/assets/leaderboard_visualization/heuristic-o3dbp-3-2/order_00100970.png" -->
                        <!-- width="100" height="100"      -->
                        <!-- onmouseover="this.width='200'; this.height='200'" -->
                        <!-- onmouseout="this.width='100'; this.height='100'"   -->
                        <!-- text="order 00100970"> -->
            <!-- </a> -->
        <!-- </div> -->
    </td>     
    <td class="submitter">    K.&nbsp;Puphaiboon </td> 
    <td class="date">    2025-10-28  </td>  
    <td class="packingplan">    <a href="/assets/packing_plans/puphaiboon/2025-10-28_puphaiboon_banpu_lahcsisr.json" download class="fa fa-download"></a> </td>  
</tr>