import { Application } from "@hotwired/stimulus"
import MaskController from "./controllers/mask_controller";

const application = Application.start()
application.register("mask", MaskController);

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

export { application }
