(function() {
  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController)

  function PortfolioController($http) {
    const vm = this
    const project_url = 'https://mv-portfolio-api.herokuapp.com/api/v1/projects'

    vm.$onInit = function() {
      $http.get(project_url)
        .then(results => {
          console.log(results);
          vm.projects = results.data
        })
    }

  }
}());
