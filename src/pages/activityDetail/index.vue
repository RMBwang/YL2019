<template>
   <div class="activityDetail">
        <div class="hezi">
            <div class="headBg">
                <div class="bg"
                    style="background:url(http://static.228.cn/upload/2019/10/18/1571388728381_c1t8_m1.jpg!t640x260.jpg)">
                </div>
            </div>
        </div>
        <div class="detailName"></div>
        <div class="detailNews"></div>
        <div class="newsTop">
            <img src="http://static.228.cn/upload/2019/10/18/1571388728381_c1t8_m1.jpg!t640x260.jpg" class="newsTopImg" />
            <div class="right">
                <div class="newsTitle">2020 张韶涵「寓言」世界巡回演唱会-深圳站</div>
                <div class="newsTime">2019-12-12</div>
                <div class="newsPosition">dizhi </div>
                <div class="newsMoney">100元</div>
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
        }
    },
    props:["name"],
    async created(){
        let data=await activityDetailApi(this.name);
        this.news=data.data.subjectProductList;
        console.log(this.news);
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
            filter: blur(10px);
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

        .newsTop .newsTime {
            font-size: 0.1rem;
            color: #ccc;
        }

        hr {
            margin-left: 0.15rem;
            margin-right: 0.15rem;
        }
</style>