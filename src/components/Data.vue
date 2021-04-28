<template>
  <v-container>
    <h1>Data</h1>
    <div
    v-for="dato in allDatos"
    v-bind:key="dato.key"
    >
    {{ dato.title }}
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Data",
  methods: {
    ...mapActions(["fetchDatos"])
  },
  computed: mapGetters(["allDatos"]),
  created() {
    this.fetchDatos();
  }
};
</script>

<style>
.v-application--wrap {
  min-height: 10vh !important;
}
</style>
