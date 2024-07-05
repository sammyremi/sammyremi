Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "homes#index"

  get "c", to: "home#index"

  get "about", to: "abouts#about"
  get "service", to: "services#service"
  get "portfolio", to: "portfolios#portfolio"
  get "contact", to: "contacts#contact"
  get '/Resume.pdf', to: "contacts#resume"


end
