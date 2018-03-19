(function() {
  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController)

  function PortfolioController($http) {
    const vm = this

    vm.$onInit = function() {
      $http.get('http://localhost:3000/api/v1/projects')
        .then(results => {
          console.log(results);
          vm.projects = results.data
        })
    }

  }
}());
