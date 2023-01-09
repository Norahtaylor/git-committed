Rails.application.routes.draw do
  resources :messages
  resources :matches
  resources :user_profiles
  resources :user_accounts
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create, :show, :index]

  # websockets use their own protocol, 
  #/cable endpoint is used to start the websocket connection with the server 
  mount ActionCable.server => '/cable'

  get '/hello', to: 'application#hello_world'

  # login and stay logged in
  post '/login', to: 'sessions#create'

  get '/me', to: 'user_accounts#show_current'

  post '/signup', to: 'user_accounts#create'

  delete '/logout', to: 'sessions#destroy'

  get '/thematches', to: 'matches#my_matches'

  get '/pendingtheapproval', to: 'matches#pending_approval'

  get '/yourrequests', to: 'matches#requested'

  get '/findlove', to: 'user_accounts#show_interested'

  # delete '/mymatches/:id', to: 'matches#delete_match'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
