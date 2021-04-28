<template>
  <v-container>
    <h1>Data</h1>

    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="6" md="4">
        <v-card
          class="pa-2 ma-3"
          outlined
          tile
          v-for="dato in allDatos"
          v-bind:key="dato.key"
        >
          {{ dato.title }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Data",
  methods: {
    ...mapActions(["fetchDatos"]),
  },
  computed: mapGetters(["allDatos"]),
  created() {
    this.fetchDatos();
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 10vh !important;
}
</style>
