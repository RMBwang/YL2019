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
            <div class="main">
            <ul class="goods_lists">
                <li v-for="(item,index) in categoryList " :key="index.id">
                    
                        <div class="left">
                            <img :src="'//static.228.cn'+item.pbigimg">
                            <i class="tip" :class="item.status==1?'ticket-color-blue':'ticket-color-red'">{{item.status==1?'预定':'售票中'}}</i>
                        </div>
                        <div class="right">
                            <b class="name">{{item.shorta}}</b>
                            <span class="shijian mt10">{{item.begindate}} ~ {{item.enddate}}</span>
                            <span class="weizhi f11">{{item.vname}}</span>
                            <span class="mt">
                                <b class="jiage mt10">{{item.minprice}} - {{item.maxprice}}元</b>
                            </span>
                        </div>
                    
                </li>
 
                <div class="loard_more">
                    <a href="">查看更多</a>
                </div>
            </ul>

        </div>
        </div>
    </div>
</template>


<script>
import {categoryAllApi} from "@api/category"
export default {
    name:"Category",
    data(){
        return {
            categoryList:[]
        }
    },
    async created(){
        let data=await categoryAllApi();
        this.categoryList=data.data.pagerMemoryList;
    }
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



.main{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin-top: 0.4rem;
    overflow: auto;
    background: #fff;
}


/* list */
.goods_lists{
    padding: .2rem;
    display: flex;
    flex-direction: column;
}
.goods_lists>li{
    margin-bottom: .15rem;
    border-bottom: 1px solid #fafafb;
    padding-bottom: .15rem;
    overflow: hidden;
}
.goods_lists>li .left{
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
.goods_lists>li .left img{
    width: 100%;
    height: 100%;
}
.goods_lists>li .left .tip{
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .11rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;

}
.ticket-color-blue{
    background: linear-gradient(to right, #3dd9c1, #00a0c2);
}
.ticket-color-red{
    background: linear-gradient(to right, #ff7e6f, #ff2959);
}
.goods_lists>li .right{
    margin-left: .15rem;
    float: left;
    width: calc(100% - 1rem);
}
.goods_lists>li .right>.name{
    height: .4rem;
    line-height: .2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.goods_lists>li .right span{
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.goods_lists>li .right .shijian{
    font-size: .14rem;
}
.goods_lists>li .right>.f11{
    font-size: .11rem;
}
.goods_lists>li .right>.mt10{
    margin-top: .1rem;
}
.goods_lists>li .right .mt{
    margin-top: 0.1rem;
}
.goods_lists>li .right .jiage{
    color: #ff3a56;
    font-size: .14rem;
}
.goods_lists .loard_more{
    width: 1rem;
    height: .27rem;
    line-height: .27rem;
    text-align: center;
    border-radius: 1rem;
    margin: auto;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(255, 58, 86, 0.2);
}
.goods_lists .loard_more>a{
    color: #c33;
    
}
</style>

