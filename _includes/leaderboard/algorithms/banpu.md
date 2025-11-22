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
    <td class="images">
        <div style="display:block; height:100px; overflow-y:auto;">
            <a href="https://youtu.be/s-lT_OoNtvs?si=UIS2oiXP9MxUjIpz" target="_blank">
                <img src="/assets/leaderboard_visualization/puphaiboon/2025-10-28_puphaiboon_banpu_lahcsisr-00100408.png"
                     style="width:auto; height:100%; max-width:100%;"
                     text="order 00100408">
            </a>
        </div>
    </td>     
    <td class="submitter">    K.&nbsp;Puphaiboon </td> 
    <td class="date">    2025-10-28  </td>  
    <td class="packingplan">    <a href="/assets/packing_plans/puphaiboon/2025-10-28_puphaiboon_banpu_lahcsisr.json" download class="fa fa-download"></a> </td>  
</tr>