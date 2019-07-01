import sha256 from "js-sha256"
import moment from "moment"

export default class Bloco {
  constructor(index, timestamp, data, hashAnterior, valid) {
    this.index = index
    this.timestamp = moment(timestamp).format("DD-MM-YYYY h:mm:ss")
    this.data = data
    this.hashAnterior = hashAnterior
    this.valid = valid
    this.hash = sha256(
      this.index + this.timestamp + this.data + this.hashAnterior
    )
  }
}
