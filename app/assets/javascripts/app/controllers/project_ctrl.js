App.controller('ProjectCtrl', ['$scope', function($scope) {

  $scope.projects = [
    {
      id: 1,
      name: "Cabbage",
      description: "cabbage helps you to manage your emacs configuration and allows you to stay in sync with other fellow emacs users. It is designed to be a community-driven framework to build your emacs configuration. The ultimate goal of cabbage is to provide a hassle-free, fast and robust emacs setup."
    },
    {
      id: 2,
      name: "elixir-mix",
      description: "Integration of Elixir's building and deployment tool: mix into Emacs."
    }
  ]

}]);
