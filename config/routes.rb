Rails.application.routes.draw do
  #devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'index#inicio'
  get "/inicio" => "index#inicio"
  
  #get '/login' to: 'devise/sessions#new'
  
  
  get "/dash" => "dashboard#dash"
  
  
  devise_for :users, :controllers => { registrations: 'users/registrations', sessions: "users/sessions", passwords: 'users/passwords' } do
    get "/", :to => "users/sessions#create"
  end

  authenticated :user do
  end

  unauthenticated :user do
    devise_scope :user do
      get "/" => "users/sessions#new"
    end
  end
  
end
