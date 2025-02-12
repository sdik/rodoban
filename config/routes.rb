Rails.application.routes.draw do
  resources :cities
  resources :employees
  resources :clients
  get "dashboard/index"
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get 'cities/ajax/municipios', to: 'cities_ajax#municipios'
  get 'cities/ajax/detalhes_municipio', to: 'cities_ajax#detalhes_municipio'
  root "home#index"
  get 'test', to: 'home#test'
  # Defines the root path route ("/")
  # root "posts#index"
end
