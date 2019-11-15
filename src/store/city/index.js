// import http from "@utils/request";
import { cityAllApi } from "@api/city"
let state = {
    cityhotList: JSON.parse(sessionStorage.getItem("cityhotList")) || [],
    cityfList: JSON.parse(sessionStorage.getItem("cityfList")) || [],
    nm: sessionStorage.getItem("nm") || "北京",
    cityId: sessionStorage.getItem("cityId") || "bj",
    cs: sessionStorage.getItem("cs") || 1,
   
}


let actions = {
    async handelGetCityList({ commit }) {
        let data = await cityAllApi();
        commit("handelHotCity", data.data.hotCitys)
        commit("handelFCity", data.data.fcitys)
    }
}

let mutations = {
    handelupdateCity(state, params) {
        state.cityId = params.id;
        state.nm = params.nm
        state.cs=params.cs
        sessionStorage.setItem("cityId", params.id)
        sessionStorage.setItem("nm", params.nm)
        sessionStorage.setItem("cs", params.cs)
    },
    //热门城市
    handelHotCity(state, hotCitys) {
        console.log(hotCitys)
        let hotlist = [];

        for (var i = 0; i < hotCitys.length; i++) {
            hotlist.push({ id: hotCitys[i].CITYJX, nm: hotCitys[i].JXNAME, cs:hotCitys[i].FCONFIGID})
        }
        state.cityhotList = hotlist;
        sessionStorage.setItem("cityhotList", JSON.stringify(state.cityhotList))
    },
    //更多城市
    handelFCity(state, fcitys) {
        console.log(fcitys)
        let flist = [];
        for (var i = 0; i < fcitys.length; i++) {
            flist.push({ id: fcitys[i].CITYJX, nm: fcitys[i].JXNAME ,cs:fcitys[i].FCONFIGID})
        }
        state.cityfList = flist;
        sessionStorage.setItem("cityfList", JSON.stringify(state.cityfList))
    }

}


let getters = {

}


export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
}