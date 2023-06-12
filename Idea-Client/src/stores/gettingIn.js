import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
// import Swal from 'sweetalert2/dist/sweetalert2.js'

const base_url = "http://localhost:3000";
// const base_url = "https://dailyjourney-production.up.railway.app";
export const useMainStore = defineStore("main", {
  state: () => ({}),
  actions: {},
});

export const useLoginStore = defineStore("login", {
  state: () => ({
    loginData: {},
    isLoggedin: false,
  }),
  actions: {
    async submitLogin(data) {
      try {
        console.log(data, "line 14 getingjs");
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const response = await axios.post(`${base_url}/customerLogin`, data, {
          headers,
        });
        // console.log(response, 'from gettinginjs login')
        this.loginData = response.data;
        localStorage.setItem("access_token", response.data.accessToken);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("role", response.data.role);

        this.isLoggedin = true;
        Swal.fire({
          icon: "success",
          title: `start your journey`,
          text: `login success`,
        });
        router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.error}`,
          text: `Please Handle`,
        });
      }
    },
    checkStatusLog() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedin = true;
      }
    },
    logoutHelp() {
      this.isLoggedin = false;
      // console.log('out')
      localStorage.clear();
      this.isLoggedin = false;
    },
    async callback(response) {
      try {
        console.log(response, "gettingin");
        console.log(response.credential, "gettingin");
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const data = await axios.post(
          `${base_url}/cusGoogleLog`,
          { token_google: response.credential },
          { headers }
        );
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("role", data.data.role);
        console.log(data);
        this.isLoggedin = true;
        Swal.fire({
          icon: "success",
          title: `start your journey`,
          text: `login success`,
        });
        router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.error}`,
          text: `Please Handle`,
        });
      }
    },
  },
  getters: {},
});

export const useRegisStore = defineStore("regis", {
  state: () => ({
    RegisData: {},
  }),
  actions: {
    async submitregis(data) {
      try {
        console.log(data, "line 14 getingjs");
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const response = await axios.post(`${base_url}/customerPost`, data, {
          headers,
        });
        console.log(response, "from gettingin js login");
        Swal.fire({
          icon: "success",
          title: `Please Login Now`,
          text: `Register success`,
        });
        router.push("/loginPage");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.error}`,
          text: `Please Handle`,
        });
      }
    },
  },
  getters: {},
});
