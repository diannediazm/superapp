<template>
  <v-app>
    <AppBar />
    

    <v-main>
      <ButtonData />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import ButtonData from "./components/ButtonData";

export default {
  name: "App",

  components: {
    AppBar,
    ButtonData,
  },

  data: () => ({
    //
  }),
};
</script>
