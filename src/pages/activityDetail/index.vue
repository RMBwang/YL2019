<template>
   <div class="activityDetail">
        <div class="hezi">
            <div class="headBg">
                <div class="bg" v-if="img"
                    :style="'background:url(http://static.228.cn'+img+')'">
                </div>
            </div>
        </div>
        <div class="detailName"></div>
        <div class="detailNews"></div>
        <div class="newsTop" v-for="(item,index) in news" :key="index">
            <img :src="'http://static.228.cn'+item.PBIGIMG" class="newsTopImg" />
            <div class="right">
                <div class="newsTitle">{{item.NAME}}</div>
                <div class="newsTime">{{item.SHOWDATE}}</div>
                <div class="newsPosition">{{item.VNAME}}</div>
                <div class="newsMoney">{{item.MINPRICE}}-{{item.MAXPRICE}}元</div>
            </div>
        </div>
    </div>
</template>

<script>
import {activityDetailApi} from "@api/activityDetail";
export default {
    name:"ActivityDetail",
    data(){
        return {
            news:[],
            img:{},
        }
    },
    props:["name"],
    async created(){
        let data=await activityDetailApi(this.name);
        this.news=data.data.subjectProductList;
        console.log(this.news);
        this.img=data.data.subjectMap.IMG;
    }
}
</script>

<style>
        * {
            margin: 0;
            padding: 0;
        }

        html,
        body {
            height: 100%;
            width: 100%;
        }

        html {
            font-size: 32vw;
        }

        body {
            font-size: .16rem;
        }

        .activityDetail {
            height: 100%;
            width: 100%;
            background: #eee;
            overflow: auto;
        }

        .hezi {
            height: 1.5rem;
            width: 100%;
        }

        .headBg {
            height: 1.8rem;
            position: absolute;
            overflow: hidden;
            top: -0.5rem;
            left: -75%;
            width: 250%;
            border-radius: 50%;
            overflow: hidden;
        }

        .bg {
            opacity: 0.8;
            width: 100%;
            height: 2.5rem;
            position: absolute;
            background-position: center;
            overflow: hidden;
        }

        .newsList {
            height: 1.6rem;
            width: 100%;
            background: #fff;
            margin-bottom: 0.15rem;
            border-radius: 0.08rem;
        }

        .newsTop {
            padding: 0.15rem;
            display: flex;
            /* justify-content: center; */
            align-items: center;
            /* border-bottom: 1px solid #ccc; */
        }

        .newsTop .newsTopImg {
            height: 1.3rem;
            width: 1rem;
            display: block;
            border-radius: 0.08rem;
            margin-right:.1rem;
        }

        .newsTop .newsTitle {
            font-size: 0.14rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 0.1rem;
        }
        .newsPosition{
            font-size:.12rem;color:#ccc;margin-bottom: .15rem;
        }
        .newsMoney{
            color:#f00;font-size:.14rem;font-weight: bold;
        }
        .newsTop .newsTime {
            font-size: 0.1rem;
            color: #ccc;
            margin-bottom: .05rem;
        }

        hr {
            margin-left: 0.15rem;
            margin-right: 0.15rem;
        }
</style>