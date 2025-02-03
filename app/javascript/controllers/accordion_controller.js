import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["submenu"]

  connect() {
    console.log("Accordion controller connected")
  }

  toggle(event) {
    event.preventDefault()
    console.log("Toggle clicked")
    
    if (!this.hasSubmenuTarget) {
      console.warn("No submenu target found")
      return
    }

    const submenu = this.submenuTarget
    const icon = event.currentTarget.querySelector('.accordion-icon')
    
    submenu.classList.toggle('hidden')
    if (icon) {
      icon.classList.toggle('rotate-180')
    }
  }
}