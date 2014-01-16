angular.module('app', [
    'ngRoute',
    'templates.app',
    'templates.common'
]);

angular.module('app').controller('AppCtrl', ['$scope', function($scope) {

}]);


angular.module('app').controller('HeaderCtrl', ['$scope', '$location', '$route',
  function ($scope, $location, $route) {
  $scope.location = $location;

  $scope.home = function () {
     $location.path('/dashboard');
  };

  $scope.isNavbarActive = function (navBarPath) {
       return false;
  };

  $scope.hasPendingRequests = function () {
     return false;
  };

}]);

angular.module('app').controller('ToolbarCtrl', ['$scope', '$location', '$route',
   function ($scope, $location, $route) {

   }
]);