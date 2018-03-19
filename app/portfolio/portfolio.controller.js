(function() {
  angular
    .module('portfolio')
    .controller('PortfolioController', PortfolioController)

  AOS.init({
    // offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 50
  })
  AOS.refresh();

  function PortfolioController() {
    const vm = this

  }
}());
