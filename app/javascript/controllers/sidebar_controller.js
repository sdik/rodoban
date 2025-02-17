import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown"]

  connect() {
    console.log("Sidebar controller connected!")
  }

  toggle(event) {
    event.preventDefault()
    const button = event.currentTarget
    const dropdownId = button.getAttribute("aria-controls")
    const dropdown = document.getElementById(dropdownId)

    // Fecha todos os outros dropdowns
    this.dropdownTargets.forEach(otherDropdown => {
      if (otherDropdown.id !== dropdownId && otherDropdown.classList.contains("block")) {
        otherDropdown.classList.remove("block")
        otherDropdown.classList.add("hidden")
        
        // Atualiza o ícone do botão correspondente
        const otherButton = document.querySelector(`[aria-controls="${otherDropdown.id}"]`)
        if (otherButton) {
          const icon = otherButton.querySelector(".fa-chevron-up")
          if (icon) {
            icon.classList.remove("fa-chevron-up")
            icon.classList.add("fa-chevron-down")
          }
        }
      }
    })

    // Toggle do dropdown atual
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden")
      dropdown.classList.add("block")
      const icon = button.querySelector(".fa-chevron-down")
      if (icon) {
        icon.classList.remove("fa-chevron-down")
        icon.classList.add("fa-chevron-up")
      }
    } else {
      dropdown.classList.remove("block")
      dropdown.classList.add("hidden")
      const icon = button.querySelector(".fa-chevron-up")
      if (icon) {
        icon.classList.remove("fa-chevron-up")
        icon.classList.add("fa-chevron-down")
      }
    }
  }
}
