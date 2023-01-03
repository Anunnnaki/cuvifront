export const CuviController = {
  post: {
    cuvi: async (payload) => {
      const dataUser = $nuxt.$store.getters["localStorage/dataUser"];
      $nuxt.$api.setHeader("Authorization", `Bearer ${dataUser.token}`);

      const { data } = await $nuxt.$api.post("cuvi", payload);
      console.log("🚀 ~ file: cuvi.controller.js:5 ~ cuvi: ~ data", data);
      // console.log("🚀 ~ file: cuvi.controller.js:5 ~ cuvi: ~  data", data);
      // return data.data;
    },
  },
  get: {
    cuvi: async (idCuvi) => {
      const dataUser = $nuxt.$store.getters["localStorage/dataUser"];
      $nuxt.$api.setHeader("Authorization", `Bearer ${dataUser.token}`);

      const { data } = await $nuxt.$api.get(`cuvi/${idCuvi}`);
      return data.data;
    },

    // register: async (payload) => {
    //   const { data } = await $nuxt.$api.post("auth/register", payload);
    //   const token = data.data.token;
    //   if (token) {
    //     $nuxt.$router.push({ name: "login" });
    //   }
    // },
  },
};
