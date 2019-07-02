<template>
  <v-app>
    <v-layout row wrap justify-center align-start>
      <v-flex v-for="block in blockchain" :key="block.index" xs8>
        <BlocoCard
          style="margin-top: 50px;"
          :index="block.index"
          :title="block.title"
          :valid="block.valid"
          :timestamp="block.timestamp"
          :indexAnterior="block.indexAnterior"
          :data="block.data"
          :hashAnterior="block.hashAnterior"
          :hash="block.hash"
        />
      </v-flex>
    </v-layout>
    <v-layout justify-center style="margin-top: 30px;">
      <v-flex x12 text-xs-center>
        <h2>Blocos na rede: {{ blockchain.length }}</h2>
        <v-btn color="primary" @click="criarBlockchain">Add Novo Bloco</v-btn>
      </v-flex>
    </v-layout>
    <Modal />
  </v-app>
</template>

<script>
import BlocoCard from "@/components/Bloco"
import Modal from "@/components/Modal"
import Bloco from "@/block"
import sha256 from "js-sha256"
import moment from "moment"
export default {
  components: {
    BlocoCard,
    Modal
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
    this.$root.$on("minerar", this.minerar)
  },

  methods: {
    counter() {
      this.count++
      this.criarBlockchain(this.count)
    },

    validBlock(obj) {
      this.blockchain.forEach(item => {
        if (item.index == obj.index) {
          item.valid = obj.valid
        }
      })
    },

    verificarBlocosInvalidos(indexBlock) {
      let bloco = this.blockchain.filter(item => item.index == indexBlock)
      if (bloco[0].valid === false) {
        this.blockchain.forEach((item, index) => {
          if (index < indexBlock) return
          item.valid = false
        })
      }
    },

    minerar(obj) {
      this.verificarBlocosInvalidos(obj.index)
      let blocoAnterior = null
      if (obj.index != 0) {
        blocoAnterior = this.blockchain.filter(
          block => block.index == obj.indexAnterior
        )
      } else {
        blocoAnterior = 0
      }

      this.blockchain.forEach(item => {
        if (item.index == obj.index) {
          item.data = obj.blockData
          item.timestamp = moment(Date.now()).format("DD-MM-YYYY h:mm:ss")
          item.valid = true
          item.hashAnterior = blocoAnterior == 0 ? "0" : blocoAnterior[0].hash
          item.hash = sha256(item.index + item.timestamp + item.hashAnterior)
        }
      })
    },

    criarBlockInicial: () =>
      new Bloco(0, 0, "Bloco Inicial", Date.now(), "Transação 1", "0", true),

    proximoBloco(ultimoBloco, data, title) {
      return new Bloco(
        ultimoBloco.index + 1,
        ultimoBloco.index,
        title,
        Date.now(),
        data,
        ultimoBloco.hash,
        ultimoBloco.valid
      )
    },

    criarBlockchain() {
      const lastBlock = this.blockchain.slice(-1)[0]
      if (!lastBlock.valid) {
        this.$root.$emit("showModal", true)
        return
      }
      this.index++
      const bloco = this.proximoBloco(
        this.blocoAnterior,
        `Transação nº ${this.index}`,
        `Este é o bloco #${this.index}`
      )
      this.blockchain.push(bloco)
      this.blocoAnterior = bloco
    }
  }
}
</script>
