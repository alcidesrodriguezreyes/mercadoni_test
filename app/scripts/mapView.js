function mapViewController() {
    this.language = navigator.language;
    this.start = {};
    this.end = {};

    this.$onChanges = function () {
        if (this.addressarray) {
            this.initMap();
        }
    };

    this.initMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12
        });
        var geocoder = new google.maps.Geocoder();
        this.addressarray.map((address) => {
            this.geocodeAddress(geocoder, map, address);
        });
    };

    clicks = 0;
    startPoint = {};
    deleteLine = null;
    makeHandler = function (map) {
        return function (e) {
            clicks += 1;
            if (clicks % 2 === 0) {
                deleteLine = traceLine(map, startPoint, e.latLng);
            } else {
                startPoint = e.latLng;
                if (deleteLine) {
                    deleteLine();
                }
            }
        }
    };

    traceLine = function (map, start, end) {
        var coordinates = [
            { lat: start.lat(), lng: start.lng() },
            { lat: end.lat(), lng: end.lng() }
        ];
        var line = new google.maps.Polyline({
            path: coordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        line.setMap(map);
        return function () {
            line.setMap(null);
        }
    };


    this.geocodeAddress = function (geocoder, resultsMap, address) {
        geocoder.geocode({ 'address': address, componentRestrictions: { country: 'CO' } }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
                var handler = makeHandler(resultsMap);
                marker.addListener('click', handler);
            }
        });
    };



}

angular.module('app').component('mapView', {
    templateUrl: 'app/mapView.html',
    controller: mapViewController,
    bindings: {
        addressarray: '<'
    }
});