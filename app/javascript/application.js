// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"

// Initialize Stimulus application
const application = Application.start()

// Configure Stimulus development experience
application.debug = true

// Import and register all controllers
import MascaraController from "./controllers/mascara_controller"
application.register("mascara", MascaraController)

import TesteController from "./controllers/teste_controller"
application.register("teste", TesteController)

import SidebarController from "./controllers/sidebar_controller"
application.register("sidebar", SidebarController)