var app = angular.module("myModule", [])
.controller("myCtrl", function($scope) {
    var subjects = [
      {name:"Maths",likes:0,dislikes:0},
      {name:"Chemistry",likes:0,dislikes:0},
      {name:"Physics",likes:0,dislikes:0},
      {name:"Biology",likes:0,dislikes:0}
    ];

    $scope.subjects = subjects;
    $scope.incrementLikes = function(subject){
      subject.likes++;

    }
    $scope.incrementDisikes = function(subject){
      subject.dislikes++;
    }

});
