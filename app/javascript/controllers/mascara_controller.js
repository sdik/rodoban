import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log("Mascara controller connected!")
    this.inputTargets.forEach(input => {
      console.log("Input target found:", input)
      this.setupMask(input)
    })
  }

  setupMask(input) {
    input.addEventListener("input", (event) => {
      let value = event.target.value.replace(/\D/g, "")
      const maskType = event.target.dataset.mask
      console.log("Applying mask:", maskType, "to value:", value)

      switch (maskType) {
        case "cpf":
          value = this.maskCPF(value)
          break
        case "cnpj":
          value = this.maskCNPJ(value)
          break
        case "cep":
          value = this.maskCEP(value)
          break
        case "telefone":
          value = this.maskTelefone(value)
          break
        case "money":
          value = this.maskMoney(value)
          break
      }

      console.log("Masked value:", value)
      event.target.value = value
    })
  }

  maskCPF(value) {
    value = value.slice(0, 11)
    if (value.length > 9) {
      return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`
    } else if (value.length > 6) {
      return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}`
    } else if (value.length > 3) {
      return `${value.slice(0, 3)}.${value.slice(3, 6)}`
    }
    return value
  }

  maskCNPJ(value) {
    value = value.slice(0, 14)
    if (value.length > 12) {
      return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12, 14)}`
    } else if (value.length > 8) {
      return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}`
    } else if (value.length > 5) {
      return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}`
    } else if (value.length > 2) {
      return `${value.slice(0, 2)}.${value.slice(2, 5)}`
    }
    return value
  }

  maskCEP(value) {
    value = value.slice(0, 8)
    if (value.length > 5) {
      return `${value.slice(0, 5)}-${value.slice(5, 8)}`
    }
    return value
  }

  maskTelefone(value) {
    value = value.slice(0, 11)
    if (value.length > 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
    } else if (value.length > 6) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`
    } else if (value.length > 2) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}`
    }
    return value
  }

  maskMoney(value) {
    value = (parseFloat(value) / 100).toFixed(2)
    return value.replace(/\d(?=(\d{3})+,)/g, "$&.").replace(".", ",")
  }
}
