(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter']
    
    function DIController ($scope, $filter) {
      $scope.name = "Yaakov";

      // Converts everything to uppercase when cursor is not focused
      // on the input field
      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      }
    }
    
    })();