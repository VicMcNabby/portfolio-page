(function() {
  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController)

  AOS.init({
    // offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100
  })
  AOS.refresh();

  function PortfolioController() {
    const vm = this

  }
}());
