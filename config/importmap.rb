# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true

# Controllers
pin_all_from "app/javascript/controllers", under: "controllers", preload: true

# External libraries
pin "imask", to: "https://ga.jspm.io/npm:imask@7.1.3/esm/index.js"
