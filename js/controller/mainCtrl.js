angular.module('petLocationApp', ['ngMap', 'ngFileUpload'])
    .controller('MainController', ['$scope', 'NgMap', function($scope, NgMap) {
        NgMap.getMap('map').then(function(map) {
            $scope.map = map;
        });

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

            $scope.resetPetForm();
        };

        $scope.resetPetForm = function () {
            $scope.name = null;
            $scope.plight = null;
            $scope.photo = null;

            $('.select-dropdown').val('');
        };

        $scope.getRandomPosition = function (map) {
            var center = map.getCenter();

            var position;
            do {
                var latDeviation = (Math.random() * 0.031653) * (Math.random() < 0.5 ? -1 : 1);
                var lngDeviation = (Math.random() * 0.031653) * (Math.random() < 0.5 ? -1 : 1);
                position = new google.maps.LatLng(center.lat() + latDeviation, center.lng() + lngDeviation);
            } while (google.maps.geometry.spherical.computeDistanceBetween(center, position) > 3000);

            return position;
        };

        $scope.showPetDetails = function (pet) {
            $scope.petDetails = pet;

            $('#pet-details-modal').modal('open');
        }
    }]);
