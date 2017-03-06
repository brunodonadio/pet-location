angular.module('petLocationApp', ['ngMap', 'ngFileUpload'])
    .controller('MainController', ['$scope', 'NgMap', function($scope, NgMap) {
        $scope.pets = [];

        $scope.addPet = function (name, plight, photo) {
            var position = $scope.getRandomPosition($scope.map);
            var newPet = {
                name: name,
                plight: plight,
                photo: photo,
                marker: {
                    lat: position.lat(),
                    lng: position.lng()
                }
            };

            $scope.pets.push(newPet);
        };
    }]);
