Rails.application.routes.draw do
  resources :characters, expect:  [:new, :edit]
  # get 'programs/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # 7 restFul Pogram Routes
  # verb   URL/URI pattern   controller#action
  # get '/programs' => 'programs#index'
  # get '/programs', to: 'programs#index' # ~> display all programs
  # * get '/programs/:id', to: 'programs#show' # ~> displays 1 program by ID 
  # * get '/programs/:id/edit', to: 'programs#edit' # ~> edit a specific program, FORM
  # * patch '/programs/:id', to: 'programs#update' # ~> UPDATE your editted program in DB
  # * put '/programs/:id', to: 'programs#update' # ~> UPDATE your editted program in DB
  # get '/programs/new', to: 'programs#new' # ~> render new FORM
  # post '/programs', to: 'programs#create' # ~> PERSIST new program in db
  # * delete '/programs/:id', to: 'programs#destroy' # ~> DELETE program from DB

  # resources :programs, only: [:index, :show, :create, :update, :destroy]
  resources :programs, expect:  [:new, :edit]
end
