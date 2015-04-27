'use strict';

var appCtrls = angular.module("app.HomeController", []);

appCtrls.controller('HomeListCtrl',
  function (){
    console.log('init');
    var ctrl = this;
    ctrl.title = 'spencer';
  });

// angular.module('NapApp')

//   .controller('HomeListCtrl', function () {
//     var ctrl = this;
//     ctrl.title = 'spencer';
//     // //rename movies to movies
//     // MoviesModel.getMovies().then(function (result) {
//     //   ctrl.movies = result;
//     //   console.log(result);
//     // });

//     // //Select Drop down
//     // ctrl.options = MoviesModel.options;

//     // //make dropdown start with alphabetical
//     // ctrl.descending = MoviesModel.options[0];

//     // //function to make release dates into sortable numbers
//     // ctrl.releaseDates =  MoviesModel.releaseDates;


//   });