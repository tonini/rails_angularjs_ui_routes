App.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('project_management', {
      url: '/project_management',
      abstract: true,
      templateUrl: "/assets/layouts/project_management.html.erb"
    })
    .state('project_management.projects', {
      parent: 'project_management',
      url: '/projects',
      views: {
        'projects': {
          controller: 'ProjectCtrl',
          templateUrl: "/assets/projects/index.html.erb"
        },
        'description': {
          controller: 'ProjectDetailCtrl',
          templateUrl: "/assets/projects/description.html.erb"
        }
      }
    })
    .state('project_management.description', {
      parent: 'project_management',
      url: '/projects/:id',
      views: {
        'projects': {
          controller: 'ProjectCtrl',
          templateUrl: "/assets/projects/index.html.erb"
        },
        'description': {
          controller: 'ProjectDetailCtrl',
          templateUrl: "/assets/projects/description.html.erb"
        },
      }
    });
});
