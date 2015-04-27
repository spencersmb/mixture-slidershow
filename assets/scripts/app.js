
var app = angular.module('NapApp',[
  'ui.router',
  'app.HomeController',
]);


// app.config(['$routeProvider',
// function($routeProvider) {
//   console.log('conf');
//   $routeProvider.
//     when('/', {
//       templateUrl: '/assets/partials/index.html',
//       controller: 'appCtrl'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });
//   }
// ]);

app.config(['$urlRouterProvider', '$stateProvider',
function($urlRouterProvider, $stateProvider ) {
  console.log('conf');
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'assets/scripts/app/home/home.tmpl.html',
    controller: 'HomeListCtrl',
    controllerAs:'ctrl'
  });
  // .state('movieDetails',{
  //   url:'/movies/:movieTitle/:movieId',
  //   templateUrl:'app/movies/movieDetails/movieDetails.tmpl.html',
  //   controller:'MovieDetailsCtrl',
  //   controllerAs: 'ctrl'
  // });
  }
]);