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

<!-- Algorithm heuristic O3DBP-3-2-->
<tr>
    <td class="rank">    {{ colored_rank }}   </td> 
    <td class="score">    0.020356    </td> 
    <td class="task">    O3DBP-3-2    </td> 
    <td class="algorithm"> <a href="https://github.com/floriankagerer/bed-bpp-env/tree/main/code/heuristics/O3DBP_3_2.py" target="_blank">heuristic O3DBP-3-2</a> </td>
    <td class="images"> <!-- Images -->
        <div>
            <!-- PDF Link -->
            <a href="https://1drv.ms/b/s!AmjGTsdpTDmPhnOJuX87XyiztQ7R" target="_blank">
                <!-- Image 1 / order 00100007 -->
                <img    src="/assets/leaderboard_visualization/heuristic-o3dbp-3-2/order_00100007.png"
                        width="100" height="100"     
                        onmouseover="this.width='250'; this.height='250'"     
                        onmouseout="this.width='100'; this.height='100'"  
                        text="order 00100007">
                <!-- Image 2 / order 00100408 -->
                <img    src="/assets/leaderboard_visualization/heuristic-o3dbp-3-2/order_00100408.png"
                        width="100" height="100"     
                        onmouseover="this.width='200'; this.height='200'"     
                        onmouseout="this.width='100'; this.height='100'"  
                        text="order 00100408">
                <!-- Image 3 / order 00100970 -->
                <img    src="/assets/leaderboard_visualization/heuristic-o3dbp-3-2/order_00100970.png"
                        width="100" height="100"     
                        onmouseover="this.width='200'; this.height='200'"
                        onmouseout="this.width='100'; this.height='100'"  
                        text="order 00100970">
            </a>
        </div>
    </td>     
    <td class="submitter">    F.&nbsp;Kagerer </td> 
    <td class="date">    2023-02-19  </td>  
    <td class="packingplan">    <a href="/assets/packing_plans/2023-02-19_kagerer_heuristic-O3DBP-3-2_O3DBP-3-2.json" download class="fa fa-download"></a> </td>  
</tr>