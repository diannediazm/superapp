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
          <v-btn color="yellow" depressed small v-on:click='deleteDato(dato.id)'>
            <v-icon >
              {{ icons.mdiDelete }}
            </v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mdiDelete } from '@mdi/js';
export default {
  name: 'Data',
  data: () => ({
      icons: {
        mdiDelete,
      },
    }),
  methods: {
    ...mapActions(['fetchDatos', 'deleteDato']),
  },
  computed: mapGetters(['allDatos']),
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
