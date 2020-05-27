Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :trips do
    member do
      get 'custom', to: 'trips#custom'
    end
    # resources :trip_venues, only: [:create]
  end
  resources :trip_venues, only: [:create, :destroy]
  get "/profile", to: 'pages#profile'
end
