<template>
  <v-container fluid>
    <h1>The Super APP</h1>
    <v-row >
      <v-col cols="12" sm="6">
        <v-textarea
          label="Agrega un dato"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AgregarData",
};
</script>
