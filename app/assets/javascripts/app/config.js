App.config(function($httpProvider) {
  var authToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

App.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
