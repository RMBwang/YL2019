<template>
  <div class="homeVenue">
    <ol class="venue_lists">
      <router-link tag="li" :to="'details/'+item.URL" class="venue" v-for="(item,index) in homeVenueList" :key="index.id">
        <div>
          <img :src="'//static.228.cn'+item.IMG"/>
          <b class="mingcheng">{{item.VNAME}}</b>
          <span class="weizhi">{{item.ADDRESS}}</span>
        </div>
      </router-link>
    </ol>
  </div>
</template>

<script>
import { homeVenueApi } from "@api/home";
export default {
  name: "homeVenue",
  data() {
    return {
      homeVenueList: [],
      cs:1
    };
  },
  created() {
    this.handelGetvenue(1)
    
  },
  activated(){
    if(this.cs==this.$store.state.city.cs){
      this.homeVenueList=JSON.parse(sessionStorage.getItem("homeVenueList"))
    }else{
      this.handelGetvenue(this.$store.state.city.cs)
      this.cs=this.$store.state.city.cs;
    }
    
  },

  methods:{
    async handelGetvenue(cs){

      let data=await homeVenueApi(cs);
    console.log(cs)
      this.homeVenueList=data.data.venuePage.list;
      sessionStorage.setItem("homeVenueList",JSON.stringify(data.data.venuePage.list))
      }
  }
 
};
</script>

<style>
/* 场馆 */
.venue_lists {
  margin: 0 0.2rem;
  display: flex;
  flex-wrap: wrap;
}
.venue {
  width: 48%;
  margin-right: 2%;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.12rem;
  height: 1.7rem;
}
.venue div {
  color: #333;
}
.venue div img {
  width: 100%;
  height: 1.4rem;
  border-radius: 0.1rem;
}
.venue div .mingcheng {
  font-size: 0.13rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.venue div .weizhi {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.11rem;
  color: #999;
  display: block;
  width: 100%;

  
}
</style>