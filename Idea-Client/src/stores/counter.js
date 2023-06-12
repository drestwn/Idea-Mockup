import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const base_url = "http://localhost:3000";
// const base_url = 'https://dailyjourney-production.up.railway.app'

//for findall Post
export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async renderPost() {
      try {
        const { data } = await axios.get(`${base_url}/cusPost`);
        this.posts = data.post;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

//forFindandCountall
export const usePostPignationStore = defineStore("postsPig", {
  state: () => ({
    postsPig: [],
    totalPage: 0,
    category: "",
  }),
  actions: {
    async renderPignation(page = 1, categoryId = "") {
      console.log(categoryId, "counter 36");
      try {
        const data = await axios.get(
          `${base_url}/readPagination?page=${page}&limit=${4}&category=${categoryId}`
        );
        console.log(data, "ini dari counter js");
        this.postsPig = data.data.renderPost.rows;
        console.log(this.postsPig, "line 43");
        this.totalPage = data.data.totalPage;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const usePostDetailStore = defineStore("detailPost", {
  state: () => ({
    detailPost: [],
    statusDetail: false,
    selectedid: 0,
    detailQr: "",
  }),
  actions: {
    async renderDetail(id) {
      try {
        // console.log(id)
        const dataDetail = await axios.get(`${base_url}/cusPost/${id}`);
        console.log(dataDetail, "ini line 59 js");
        this.detailPost = dataDetail.data.Post;

        console.log(this.detailPost, "line 61 counterjs");

        this.statusDetail = true;
        this.selectedid = id;
      } catch (err) {
        console.log(err);
      }
    },
    hideDetail() {
      this.statusDetail = false;
    },
    async renderDetail2(id) {
      try {
        // console.log(id)
        const dataDetail = await axios.get(`${base_url}/cusPost/${id}`);
        console.log(dataDetail, "ini line 59 js");
        this.detailPost = dataDetail.data.Post;
        this.detailQr = dataDetail.data.qr;

        console.log(this.detailPost, "line 61 counterjs");
        router.push("/detail");

        // this.statusDetail = true
        // this.selectedid = id
      } catch (err) {
        console.log(err);
      }
    },
    backtoHome() {
      router.push("/");
    },
  },
  getters: {},
});

export const usePostCarousellStore = defineStore("postCarousel", {
  state: () => ({
    postCaros: [],
    totalPage: 0,
  }),
  actions: {
    async renderPignation(page = 3, limit = 4) {
      try {
        const data = await axios.get(
          `${base_url}/readPagination?page=${page}&limit=${limit}`
        );
        // console.log(data, 'ini dari counter js')
        this.postCaros = data.data.renderPost.rows;
        this.totalPage = data.data.totalPage;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useAddFavoriteStore = defineStore("addFav", {
  state: () => ({
    statusLoved: false,
    statusLovedId: 0,
  }),
  actions: {
    async addFavorite(id) {
      try {
        console.log(id, "line 110 ");

        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          access_token: localStorage.getItem("access_token"),
        };
        const data = await axios.post(`${base_url}/addFavPost/${id}`, null, {
          headers,
        });
        console.log(data, "ini dari counter js");
        this.statusLoved = true;
        this.statusLovedId = id;
        // console.log(this.statusLovedId)
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useDeleteFavoriteStore = defineStore("deleteFav", {
  state: () => ({
    changestatus: true,
  }),
  actions: {
    async deleteFav(id) {
      try {
        console.log(id, "line 110 ");
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          access_token: localStorage.getItem("access_token"),
        };
        const data = await axios.delete(`${base_url}/removeFav/${id}`, null, {
          headers,
        });
        console.log(data, "ini dari counter js");
        this.changestatus = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useRenderCatStore = defineStore("cats", {
  state: () => ({
    dataCat: [],
  }),
  actions: {
    async renderCat() {
      try {
        const data = await axios.get(`${base_url}/renderAllCat`);
        this.dataCat = data.data.categories;
        console.log(this.dataCat, "dari counter cat");
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export const useRenderFavAstore = defineStore("renderFav", {
  state: () => ({
    postsPig: [],
    statusPagelove: false,
  }),
  actions: {
    async renderFav() {
      try {
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          access_token: localStorage.getItem("access_token"),
        };
        console.log(headers);
        const data = await axios.get(`${base_url}/renderFavPost`, { headers });
        console.log(data, "ini dari counter line 218");

        const data1 = data.data.response.map((el) => el.Post);
        console.log(data1, "ini data 1");
        this.postsPig = data1;
        console.log(this.postsPig, "line 220");
        this.statusPagelove = true;
      } catch (err) {
        console.log(err);
      }
    },
    loveButton() {
      this.statusPagelove = false;
    },
  },
});
