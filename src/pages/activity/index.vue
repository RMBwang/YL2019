<template>
    <div class="activity">

        <!-- header -->

       <Header title="活动专区" icon search/>


        <!-- main -->

        <div class="main">
            <div class="top">
                <router-link tag="div" :to="'activity/'+((item.URL).substr(1))" class="list tc" v-for="(item,index) in list" :key="index">
                    <div class="photo">
                        <img :src="'http://static.228.cn'+item.IMG" alt="">
                    </div>
                    <div class="fw fs">{{item.REMARK}}</div>
                </router-link>
                
                <div class="loard_more">
                    <a href="">查看更多</a>
                </div>
            </div>
          
            <Center/>
        </div>
    </div>
</template>




<script>
import {activityApi} from "@api/activity";
export default {
    name:"activity",
    data(){
        return {
            list:[],
        }
    },
    async created() {
        let data = await activityApi();

        this.list = data.data.subjectPage.list;
        // console.log(this.list);
    }
}
</script>



<style>
    .activity{
    width: 100%;
    height: 100%;
    background: #f5f6f7;
}

/* header */
.header{
    width: 100%;
    height: 0.4rem;
    position: fixed;
    display: flex;
    align-items: center;
   
}
.header>i{
    width: .3rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    color: #999;
    font-size: .2rem;
}
.header>a{
    flex: 1;
    text-align: center;
    height: .4rem;
    line-height: .4rem;
    font-size: .16rem;
    font-weight: 400;
}

/* main */

.main{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0.4rem 0 0.5rem 0;
    /* padding-bottom:.5rem */
}




/* top */

.main .top{
    margin: .15rem;
    display: flex;
    flex-direction: column;
}
.main .top .list{
    margin-bottom: .2rem;
    width: 100%;
    border-radius: .1rem;
    overflow: hidden;
    background: #fff;
}
.main .top .tc{
    text-align: center;
}
.main .top .list .photo{
    height: 1.435rem;
    width: 100%;
}
.main .top .list .photo img{
    height: 100%;
    width: 100%;
}

.main .top .list .fw{
    font-weight: bold;
    font-size: .16rem;
    margin: .1rem
}


/* loarde */

/* load_more */

.loard_more{
    width: 100%;
    height: 0.3rem;
    background: #fff7f7;
    text-align: center;
    line-height: .3rem;
    margin-bottom:.1rem;
    
}
.loard_more a{
    color: #c33;
}
</style>