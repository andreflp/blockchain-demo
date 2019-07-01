<template>
  <v-app>
    <v-layout row wrap justify-center align-start>
      <v-flex v-for="block in blockchain" :key="block.index" xs8>
        <BlocoCard
          style="margin-top: 50px;"
          :valid="block.valid"
          :timestamp="block.timestamp"
          :data="block.data"
          :hashAnterior="block.hashAnterior"
          :hash="block.hash"
        />
      </v-flex>
    </v-layout>
    <v-layout justify-center style="margin-top: 30px;">
      <v-flex x12 text-xs-center>
        <h2>Blocos na rede: {{ blockList.length }}</h2>
        <v-btn color="primary" @click="criarBlockchain">Add Novo Bloco</v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import BlocoCard from "@/components/Bloco"
import Bloco from "@/block"
export default {
  components: {
    BlocoCard
  },
  name: "App",
  data() {
    return {
      blockList: [],
      count: 0,
      valid: true,
      blockchain: [],
      blocoAnterior: null,
      index: 1
    }
  },

  created() {
    this.blockchain = [this.criarBlockInicial()]
    this.blocoAnterior = this.blockchain[0]
    this.$root.$on("validBlock", this.validBlock)
  },

  methods: {
    counter() {
      this.count++
      this.criarBlockchain(this.count)
    },

    validBlock(valid) {
      this.valid = valid
    },

    criarBlockInicial: () =>
      new Bloco(0, Date.now(), "Bloco Inicial", "0", true),

    proximoBloco(ultimoBloco, data) {
      return new Bloco(
        ultimoBloco.index + 1,
        Date.now(),
        data,
        ultimoBloco.hash,
        ultimoBloco.valid
      )
    },

    criarBlockchain() {
      if (!this.valid) {
        alert("Bloco Inválido")
        return
      }
      const bloco = this.proximoBloco(
        this.blocoAnterior,
        `Este é o bloco #${this.index++}`
      )
      this.blockchain.push(bloco)
      this.blocoAnterior = bloco
    }
  }
}
</script>
