var app = angular.module("myModule", [])
.controller("myCtrl", function($scope) {
    var employees = [
      {firstName:"Lini",lastName:"Paul",gender:"female",salary:"4000"},
      {firstName:"Rosemy",lastName:"Baby",gender:"female",salary:"4000"},
      {firstName:"Akhil",lastName:"kk",gender:"male",salary:"4000"}
    ];
    $scope.employees = employees;
});
