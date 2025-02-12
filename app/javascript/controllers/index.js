// Import and register all your controllers from the importmap under controllers/**/*_controller
import { application } from "./application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"

// Load all controllers
eagerLoadControllersFrom("controllers", application)
