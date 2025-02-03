import { Application } from "@hotwired/stimulus"

import IMask from 'imask/esm';
const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
