/**
 * Created by vkostov on 1/22/14.
 */

angular.module('info-panel', ['services.imageManager'])

        .controller('InfoPanelCtrl', ['$scope', 'ImageManager', function ($scope, ImageManager) {
            $scope.images = ImageManager.getImages();


            $scope.selectImage = function(imageId) {

                ImageManager.selectImage(imageId);

                $scope.selectedImageId = ImageManager.selectedImageId;

                $scope.selectedImage = ImageManager.getImage(ImageManager.selectedImageId);
            };

        }]);
