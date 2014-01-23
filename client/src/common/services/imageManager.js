/**
 * Created by vkostov on 1/22/14.
 */

angular.module('services.imageManager', ['resources.images']);

angular.module('services.imageManager').factory('ImageManager', ['$rootScope', 'Images', function ($rootScope, Images) {
    var ImageManager = {
        images: [],
        selectedImageId: null,
        currentView: 0,

        loadImages: function (url) {
            ImageManager.images = Images.all();
        },
        getImages: function () {
            return ImageManager.images;
        },
        selectImage: function (imageId) {
            ImageManager.selectedImageId = imageId;
        },
        getSelectedImageId: function () {
            return ImageManager.selectedImageId;
        },
        getImage: function (imageId) {
            var img = ImageManager.images.filter(function (image) {
                return image.id === imageId;
            });
            return img[0];
        },
        setView: function (view) {
            ImageManager.currentView = view;
        },
        getCurrentView: function () {
            return ImageManager.currentView;
        }
    };

    return ImageManager;
}]);
