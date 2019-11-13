<template>
    <div class="city_list">
        <!-- header -->
        <Header title="选择演出城市" icon />
      

        <!-- localtion -->
        <div class="position_city">
            <div class="localtion_city ml12 mt30 gray9 f12">
                <a href="" class="localtion">定位城市</a>
                <a href="" class="hong">北京</a>
            </div>
            <h4 class="gray9 f12 city_tit">热门城市</h4>
            <div class="populor city_hot">
                <ul>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                    <li class="local">全国</li>
                </ul>
            </div>
            <h4 class="gray9 f12 city_tit">更多城市</h4>
            <div class="more_city city_hot">
                <ul>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                    <li class="local">澳门</li>
                </ul>
            </div>
        </div>

    </div>
</template>



<script>
export default {
    name:"city",
    

}
</script>


<style>
    .city_list{
    width: 100%;
    height: 100%;
    background: #fff;
}


/* localtion_city */
.position_city{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin-top:.4rem
}
.gray9 .localtion{
    color: #999;
}
.hong{
    color: #c33;
}
.f12{
    font-size: .12rem;
}
.ml12{
margin-left: .2rem;
}
.mt30{
    margin-top:.2rem
}
.city_tit{
    margin: .2rem .2rem 0;
    font-weight: 400;
    color: #999;
}


.city_hot{
    margin: .1rem .2rem; 
}
.city_hot ul{
    /* width: 100%;
    height: 100%; */
    display: flex;
    flex-wrap: wrap;
}
.city_hot  ul li{
    width:25%;
    height: 0.4rem;
    line-height: .4rem;
    text-align: center;
}
</style>