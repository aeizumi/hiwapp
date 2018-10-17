angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.waitingOrders', {
    url: '/waiting',
    views: {
      'tab1': {
        templateUrl: 'templates/waitingOrders.html',
        controller: 'waitingOrdersCtrl'
      }
    }
  })

  .state('tabsController.cart', {
    url: '/cart',
    views: {
      'tab2': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('tabsController.completedOrders', {
    url: '/comp',
    views: {
      'tab3': {
        templateUrl: 'templates/completedOrders.html',
        controller: 'completedOrdersCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/regist',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('page9', {
    url: '/resd',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('hiw', {
    url: '/hiw',
    templateUrl: 'templates/hiw.html',
    controller: 'hiwCtrl'
  })

  .state('restaurant1', {
    url: '/res',
    templateUrl: 'templates/restaurant1.html',
    controller: 'restaurant1Ctrl'
  })

  .state('restaurant1m', {
    url: '/resm',
    templateUrl: 'templates/restaurant1m.html',
    controller: 'restaurant1mCtrl'
  })

  .state('restaurant1s', {
    url: '/ms',
    templateUrl: 'templates/restaurant1s.html',
    controller: 'restaurant1sCtrl'
  })

  .state('restaurant1v', {
    url: '/mv',
    templateUrl: 'templates/restaurant1v.html',
    controller: 'restaurant1vCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});