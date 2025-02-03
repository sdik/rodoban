import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Hello Controller Connected!")
  }

  greet() {
    console.log("Greet action called!")
    if (this.hasOutputTarget) {
      this.outputTarget.textContent = "Hello, Stimulus is working!"
    }
  }
}
