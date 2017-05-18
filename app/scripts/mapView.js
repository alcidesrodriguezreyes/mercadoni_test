function mapViewController() {
    console.log('map view');
}

angular.module('app').component('mapView', {
    templateUrl: 'app/mapView.html',
    controller: mapViewController
});