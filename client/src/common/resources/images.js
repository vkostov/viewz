/**
 * Created by vkostov on 1/21/14.
 */

angular.module('resources.images', []);

angular.module('resources.images').factory('Images', [function () {

    function ImagesResource(){}
    var Images;

    ImagesResource.prototype.all = function () {
        var imagesArray = [
            {
                id: 1,
                title: 'Image 1',
                imageUrl: 'http://www.window.state.tx.us/taxinfo/check/checkSample.jpg'
            },
            {
                id: 2,
                title: 'Image 2',
                imageUrl: 'http://eaptips.wdfiles.com/local--files/using-checks/check_front.jpg'
            },
            {
                id: 3,
                title: 'Image 3',
                imageUrl: 'http://eaptips.wdfiles.com/local--files/using-checks/check_copy.jpg'
            },
            {
                id: 4,
                title: 'Image 4',
                imageUrl: 'http://gallery.mailchimp.com/ef45f4ebf1f6a24b11ec49464/images/check.jpg'
            },
            {
                id: 5,
                title: 'Image 5',
                imageUrl: 'http://www.sos.mo.gov/business/commissions/pubs/notary/img/diploma.gif'
            }
        ];

        return imagesArray;
    }

    Images = new ImagesResource();

    return Images;
}]);
