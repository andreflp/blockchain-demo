<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card-round">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ title }}</div>
            <div style="margin-top: 5px;">
              <span>Hash Anterior:</span>
              <span v-if="valid" class="green--text" style="margin-left: 3px;">{{ hashAnterior }}</span>
              <span v-if="!valid" class="red--text" style="margin-left: 3px;">{{ hashAnterior }}</span>
            </div>
            <div style="margin-top: 5px;">
              <span>Hash:</span>
              <span v-if="valid" class="green--text" style="margin-left: 3px;">{{ hash }}</span>
              <span v-if="!valid" class="red--text" style="margin-left: 3px;">{{ hash }}</span>
            </div>
            <div style="margin-top: 5px;">
              <span>Timestamp:</span>
              <span style="margin-left: 3px;">{{ timestamp }}</span>
            </div>
            <div style="margin-top: 5px;">
              <v-textarea
                name="input-7-1"
                label="Data"
                :value="data"
                @input="verificaHash"
                v-model="blockData"
              ></v-textarea>
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="minerar">Minerar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    index: [String, Number],
    title: String,
    timestamp: String,
    data: String,
    hashAnterior: String,
    indexAnterior: [String, Number],
    hash: String,
    valid: Boolean
  },
  data: () => ({
    blockData: ""
  }),

  computed: {},

  created() {
    this.blockData = this.data
  },

  methods: {
    verificaHash() {
      let obj = null
      if (this.blockData === this.data) {
        obj = {
          index: this.index,
          valid: true
        }
        this.$root.$emit("validBlock", obj)
      } else {
        obj = {
          index: this.index,
          valid: false
        }
        this.$root.$emit("validBlock", obj)
      }
    },

    minerar() {
      this.valid = true
      const obj = {
        index: this.index,
        blockData: this.blockData,
        valid: this.valid,
        indexAnterior: this.indexAnterior
      }
      this.$root.$emit("minerar", obj)
      this.$root.$emit("validBlock", this.valid)
    }
  }
}
</script>

<style scoped>
.card-round {
  border-radius: 8px;
}
</style>
