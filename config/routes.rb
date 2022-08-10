Rails.application.routes.draw do
  resources :matches
  resources :user_profiles
  resources :user_accounts
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
