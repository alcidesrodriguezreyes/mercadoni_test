function mapViewController() {

    this.$onChanges = function (){
        console.log(this.addressarray);
    };
}

angular.module('app').component('mapView', {
    templateUrl: 'app/mapView.html',
    controller: mapViewController,
    bindings: {
        addressarray: '<'
    }
});