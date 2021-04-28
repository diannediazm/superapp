<template>
  <v-app>
    <AppBar />
    <v-main>
      <AgregarData />
      <Data />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import AgregarData from "./components/AgregarData";
import Data from "./components/Data";

export default {
  name: "App",

  components: {
    AppBar,
    AgregarData,
    Data,
  },

  data: () => ({
    //
  }),
};
</script>
