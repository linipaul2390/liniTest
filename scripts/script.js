var app = angular.module("myModule", [])
.controller("myCtrl", function($scope) {
    var employees = [
  {name:"Ben",dateOfBirth:new Date("November 23, 1980"),gender:"Male",salary:55500.788},
  {name:"Lini",dateOfBirth:new Date("December 23, 1985"),gender:"Female",salary:4000.0},
  {name:"Kathir",dateOfBirth:new Date("January 2, 1989"),gender:"Male",salary:8000.8},
  {name:"Shankar",dateOfBirth:new Date("December 23, 1985"),gender:"Male",salary:9999.99}
    ];

    $scope.employees = employees;
    $scope.rowLimit = 2;

});
