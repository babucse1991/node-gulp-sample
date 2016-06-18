'use strict';

// Setting up route
VinApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);



    // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

    // Home state routing
    $stateProvider
    .state('test', {
      url: '/',
      templateUrl: 'views/testPage.html',
      controller : 'MainController'
    })
   .state('test2', {
      url: '/test2',
      templateUrl: 'views/testPage2.html'
    })
  }
]);