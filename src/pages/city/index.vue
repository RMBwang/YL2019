<template>
  <div class="city_list">
    <!-- header -->
    <Header title="选择演出城市" icon />

    <!-- localtion -->
    <div class="position_city">
      <div class="localtion_city ml12 mt30 gray9 f12">
        <a href class="localtion">定位城市</a>
        <a href class="hong">北京</a>
      </div>
      <h4 class="gray9 f12 city_tit">热门城市</h4>
      <div class="populor city_hot">
        <ul>
          <li class="local">全国</li>
          <v-touch
            tag="li"
            @tap="handelCityto(item,index)"
            class="local"
            v-for="(item,index) in cityhotList"
            :key="index.id"
          >{{item.nm}}</v-touch>
        </ul>
      </div>
      <h4 class="gray9 f12 city_tit">更多城市</h4>
      <div class="more_city city_hot">
        <ul>
          <v-touch
            tag="li"
            @tap="handelCityto(item,index)"
            class="local"
            v-for="(item,index) in cityfList"
            :key="index"
          >{{item.nm}}</v-touch>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
  name: "city",
  created() {
    if (
      !(
        sessionStorage.getItem("cityhotList") &&
        sessionStorage.getItem("cityfList")
      )
    ) {
      this.$store.dispatch("city/handelGetCityList");
    }
    const cityhotList = sessionStorage.getItem("cityhotList");
    const cityfList = sessionStorage.getItem("cityfList");
  },
  computed: {
    ...mapState({
      cityhotList: state => state.city.cityhotList,
      cityfList: state => state.city.cityfList
    })
  },
  methods: {
    handelCityto(nm, id, cs) {
      let path = this.$route.query.path || "/home";
      this.$router.push(path);
      this.$store.commit("city/handelupdateCity", nm, id, cs);
    }
  }
};
</script>


<style>
.city_list {
  width: 100%;
  height: 100%;
  background: #fff;
}
/* localtion_city */
.position_city {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin-top: 0.4rem;
}
.gray9 .localtion {
  color: #999;
  margin-right: 0.1rem;
}
.hong {
  color: #c33;
}
.f12 {
  font-size: 0.12rem;
}
.ml12 {
  margin-left: 0.2rem;
}
.mt30 {
  margin-top: 0.2rem;
}
.city_tit {
  margin: 0.2rem 0.2rem 0;
  font-weight: 400;
  color: #999;
}

.city_hot {
  margin: 0.1rem 0.2rem;
}
.city_hot ul {
  display: flex;
  flex-wrap: wrap;
}
.city_hot ul li {
  width: 25%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
}
</style>