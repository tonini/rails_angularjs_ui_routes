RailsAngularjsUiRoutes::Application.routes.draw do

  get '/project_management', to: redirect('/project_management/projects')
  get '/project_management/projects' => 'project_management#index'
  get '/project_management/projects/:id' => 'project_management#index'

end
