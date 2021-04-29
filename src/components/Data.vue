<template>
  <v-container>
    <h1>Data</h1>
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" sm="6" md="4">
        <v-card
          @click="editDato(dato)"
          :key="dato.id"
          v-for="dato in allDatos"
          class="data"
          outlined
          tile
          v-bind:class="{'theme--light.v-card':dato.completed}"
        >
          {{ dato.title }}
          <v-btn
            color="yellow"
            depressed
            small
            v-on:click="deleteDato(dato.id)"
          >
            <v-icon color="white">
              {{ icons.mdiDelete }}
            </v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mdiDelete } from "@mdi/js";

export default {
  name: "Data",
  data: () => ({
    icons: {
      mdiDelete,
    },
  }),
  methods: {
    ...mapActions(["fetchDatos", "deleteDato", "updatedDato"]),
    editDato(dato) {
      const updatedDato = {
        id: dato.id,
        title: dato.title,
        completed: !dato.completed,
      };
      this.updatedDato(updatedDato);
    },
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
.data {
  padding: 2vh;
  margin: 2vh;
}
.theme--light.v-card {
  background-color: blueviolet;
}
</style>
