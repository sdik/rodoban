// Import and register all your controllers from the importmap under controllers/**/*_controller
import { application } from "./application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"

// Import controllers manually
import HelloController from "./hello_controller.js"
import AccordionController from "./accordion_controller.js"
import MasksController from "./masks_controller.js"



// Load all controllers (including any others in the controllers directory)
eagerLoadControllersFrom("controllers", application)

// Register controllers manually
application.register("hello", HelloController)
application.register("accordion", AccordionController)
application.register("mask", MasksController)

