import http from "@utils/request";


export const detailsApi = (id) => http({
    method: "get",

    url: "/server/product/ticket-" + id + ".json?pid=" + id + ".html",
    data: {

    }
});
