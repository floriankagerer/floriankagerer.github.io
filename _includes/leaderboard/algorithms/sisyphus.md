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

<!-- Algorithm SISYPHUS -->
<tr>
    <td class="rank">    {{ colored_rank }}   </td> 
    <td class="score">    0.724553    </td> 
    <td class="task">    Offline 3DBP    </td> 
    <td class="algorithm"> <a href="https://github.com/josch/sisyphus" target="_blank">sisyphus</a> </td>
    <td class="images"> <!-- Images -->
        <div>
            <!-- PDF Link -->
            <a href="https://1drv.ms/b/s!AmjGTsdpTDmPhnHDhSYRYOQXgk2x?e=lsJuBV" target="_blank">
                <!-- Image 1 / order 00100007 -->
                <img    src="/assets/leaderboard_visualization/sisyphus/order_00100007.png"
                        width="100" height="100"     
                        onmouseover="this.width='250'; this.height='250'"     
                        onmouseout="this.width='100'; this.height='100'"  
                        text="order 00100007">
                <!-- Image 2 / order 00100408 -->
                <img    src="/assets/leaderboard_visualization/sisyphus/order_00100408.png"
                        width="100" height="100"     
                        onmouseover="this.width='200'; this.height='200'"     
                        onmouseout="this.width='100'; this.height='100'"  
                        text="order 00100408">
                <!-- Image 3 / order 00100970 -->
                <img    src="/assets/leaderboard_visualization/sisyphus/order_00100970.png"
                        width="100" height="100"     
                        onmouseover="this.width='200'; this.height='200'"
                        onmouseout="this.width='100'; this.height='100'"  
                        text="order 00100970">
            </a>
        </div>
    </td>     
    <td class="submitter">    F.&nbsp;Kagerer </td> 
    <td class="date">    2022-12-05  </td>  
    <td class="packingplan">    <a href="/assets/packing_plans/2022-12-05_kagerer_sisyphus_offline3dbp.json" download class="fa fa-download"></a> </td>  
</tr>