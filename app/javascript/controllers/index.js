// Import and register all your controllers from the importmap under controllers/**/*_controller
import { application } from "./application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import AccordionController from "./accordion_controller"

// Register Accordion controller
application.register("accordion", AccordionController)

// Load all other controllers
eagerLoadControllersFrom("controllers", application)
