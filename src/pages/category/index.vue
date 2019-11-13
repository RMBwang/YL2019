<template
>
    <div class="page">
        <Header title="分类" icon search/>
        <div class="header_branch">
                <ul>
                    <li>
                        <a>全国</a>
                        <i class="iconfont">&#xe619;</i>
                    </li>
                    <li>
                        <a>全部分类</a>
                        <i class="iconfont">&#xe619;</i>
                    </li>
                    <li>
                        <a>全部时间</a>
                        <i class="iconfont">&#xe619;</i>
                    </li>
                </ul>
            </div>
        <div class="container">
          
        </div>
    </div>
</template>


<script>
export default {
    name:"Category"
}
</script>


<style>
    .header_branch{
    width: 100%;
    height: 0.4rem;
    margin-top:.4rem;
}
.header_branch ul{
    display: flex;
    height: 100%;
    align-items: center;
}
.header_branch ul li{
    width: 33%;
    text-align: center;
}
.header_branch ul li>a{
    color: #999ea3;
}
.header_branch ul li>i{
    color: #999ea3;
}

</style>

