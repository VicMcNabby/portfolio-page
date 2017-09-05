(function() {

  angular
    .module('portfolio')
    .config(config)

  function config($stateProvider, $locationProvider, $urlServiceProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        component: 'landingpage'
      }).state('resume', {
        url: '/resume',
        component: 'resume'
      }).state('portfolio', {
        url: '/portfolio',
        component: 'portfolio'
      })
    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
