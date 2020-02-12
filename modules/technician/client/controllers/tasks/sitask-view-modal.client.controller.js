'use strict';

angular.module('system').controller('SITaskViewModalController', ['$scope','$http','$state', '$uibModalInstance', 'data', 'Authentication', 'ModalLauncher',
  function ($scope, $http, $state, $uibModalInstance, data, Authentication, ModalLauncher) {
    $scope.data = data; $scope.user = Authentication.getUser();
    
    // Modal functions
    $scope.cancel = function() {
      $uibModalInstance.close(false);
    };
  }

]);
