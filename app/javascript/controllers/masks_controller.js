import { Controller } from "@hotwired/stimulus"
import IMask from 'imask/esm'

export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log("MaskController connected")
    console.log("IMask version:", IMask.version)
    
    if (!this.hasInputTarget) {
      console.warn("No input targets found!")
      return
    }

    console.log("Found", this.inputTargets.length, "input targets")
    
    this.inputTargets.forEach(input => {
      console.log("Processing input:", input.id)
      
      try {
        if (input.id === 'client_cpf') {
          console.log("Applying CPF mask")
          IMask(input, {
            mask: '000.000.000-00'
          })
        }
        else if (input.id === 'client_cnpj') {
          console.log("Applying CNPJ mask")
          IMask(input, {
            mask: '00.000.000/0000-00'
          })
        }
        else if (['client_fone1', 'client_fone2', 'client_celular'].includes(input.id)) {
          console.log("Applying phone mask")
          IMask(input, {
            mask: [
              { mask: '(00) 0000-0000' },
              { mask: '(00) 00000-0000' }
            ]
          })
        }
        else if (input.id === 'client_cep') {
          console.log("Applying CEP mask")
          IMask(input, {
            mask: '00000-000'
          })
        }
      } catch (error) {
        console.error("Error applying mask to", input.id, ":", error)
      }
    })
  }
}