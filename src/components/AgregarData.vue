<template>
  <v-container>
    <h1 class="mb-5">The Super APP</h1>
    <v-row>
      <v-col cols="12" sm="6">
        <v-form ref="form" @submit="onSubmit">
          <v-text-field v-model="title" label="Name" required></v-text-field>
          <v-btn
            color="success"
            class="mr-4"
            type="submit"
            value="Submit"
          >
            UPLOAD
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AgregarData",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addDato"]),
    onSubmit(event) {
      event.preventDefault();
      this.addDato(this.title);
      this.title = "";
    },
  },
};
</script>
