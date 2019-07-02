<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline primary--text">Aviso</v-card-title>

        <v-card-text>Para adicionar um novo bloco, o ultimo precisa ser um bloco válido.</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" flat="flat" @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  },
  data() {
    return {
      dialog: false
    }
  },

  created() {
    this.$root.$on("showModal", this.showModal)
  },

  methods: {
    showModal(value) {
      this.dialog = value
    }
  }
}
</script>

<style>
</style>
