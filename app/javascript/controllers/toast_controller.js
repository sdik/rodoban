import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.showToasts()
  }

  showToasts() {
    const toasts = this.element.querySelectorAll('[role="alert"]')
    
    toasts.forEach((toast, index) => {
      // Mostrar toast com delay para cada um
      setTimeout(() => {
        toast.classList.remove('hidden')
        toast.classList.add('animate-slide-in')
      }, index * 200)

      // Auto-esconder após 5 segundos
      setTimeout(() => {
        this.hideToast(toast)
      }, 5000 + (index * 200))
    })
  }

  hideToast(toast) {
    toast.classList.add('animate-fade-out')
    setTimeout(() => {
      toast.remove()
    }, 300)
  }
}
