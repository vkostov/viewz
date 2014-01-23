/**
 * Created by vkostov on 1/23/14.
 */

angular.module('image-panel', ['services.imageManager'])

        .controller('ImagePanelCtrl', ['$scope', 'ImageManager', function ($scope, ImageManager) {

            var imageSelectionListener = function () {
                return ImageManager.selectedImageId
            };

            var imageSelectionHandler = function (newImgId, oldImgId) {
                if (newImgId) {
                    $scope.selectedImage = ImageManager.getImage(newImgId);
                }
            }

            $scope.$watch(imageSelectionListener,imageSelectionHandler);

        }]);