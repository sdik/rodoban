import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["submenu"]

  toggle(event) {
    event.preventDefault()
    
    // Get the submenu element
    const submenu = this.submenuTarget
    const icon = event.currentTarget.querySelector('.accordion-icon')
    
    // Toggle the current submenu
    submenu.classList.toggle('hidden')
    
    // Toggle icon rotation
    if (icon) {
      icon.classList.toggle('rotate-180')
    }
    
    // Close other accordion items
    const otherAccordions = document.querySelectorAll('[data-controller="accordion"]')
    otherAccordions.forEach(accordion => {
      if (accordion !== this.element) {
        const otherSubmenu = accordion.querySelector('[data-accordion-target="submenu"]')
        const otherIcon = accordion.querySelector('.accordion-icon')
        if (otherSubmenu && !otherSubmenu.classList.contains('hidden')) {
          otherSubmenu.classList.add('hidden')
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180')
          }
        }
      }
    })
  }
}
