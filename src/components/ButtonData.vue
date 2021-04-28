<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="mb-5">¡Baja la data!</h1>
        <v-btn
          class="mx-2"
          fab
          dark
          color="indigo"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>


      <v-col
        class="mb-5"
        cols="12"
      >

        <v-row justify="center"
        
        >
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ButtonData',
    
    
  }
</script>

<style>

.v-application--wrap {
  min-height: 10vh !important;
}
  
</style>