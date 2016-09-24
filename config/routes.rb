Rails.application.routes.draw do

  get 'profile', to: 'profile#index'
  patch 'profile', to: 'profile#update'

  devise_for :users
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
