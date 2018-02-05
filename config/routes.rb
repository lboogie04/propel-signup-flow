Rails.application.routes.draw do
  
  root 'static#index'
  devise_for :users, controllers: {registrations: 'registrations', omniauth_callbacks: 'users/omniauth_callbacks'}
  get '/welcome',     to: 'welcome#index'
  get '/personalize',     to: 'welcome#personalize'

end
