angular.module('starter')

.controller('DialogsCtrl', function($cordovaDialogs, $scope) {
  // REF: http://ngcordova.com/docs/plugins/dialogs/

  // alert(message, title, buttonName)
  $scope.alert = function() {
    $cordovaDialogs.alert('Wow!', 'Alert Title', 'Dismiss');
  };

  // confirm(message, title, buttonArray)
  $scope.confirm = function() {
    $cordovaDialogs.confirm('Are you sure?', 'Confirmation', ['Yes', 'No'])
      .then(function(buttonIndex) {
        // no button = 0, 'Yes' = 1, 'No' = 2
        $cordovaDialogs.alert('You selected button ' + buttonIndex, 'Response');
      });
  };

  // prompt(message, title, buttonArray, defaultText)
  $scope.prompt = function() {
    $cordovaDialogs.prompt('Please Login', 'Login', ['Login', 'Cancel'], 'Change me')
      .then(function(result) {
        var input = result.input1;
        // no button = 0, 'OK' = 1, 'Cancel' = 2
        var btnIndex = result.buttonIndex;

        $cordovaDialogs.alert('You selected button number ' + btnIndex + ' and entered ' + input, 'Response');
      });
  };

  // beep(repetitions)
  $scope.beep = function() {
    // beep 1 time
    $cordovaDialogs.beep(1);
  };
})

.controller('DeviceCtrl', function($cordovaDevice, $scope) {
  // REF: http://ngcordova.com/docs/plugins/device/

  $scope.device = function() {
    $scope.results = $cordovaDevice.getDevice();
  };

  $scope.cordovaVersion = function() {
    $scope.results = $cordovaDevice.getCordova();
  };

  $scope.deviceModel = function() {
    $scope.results = $cordovaDevice.getModel();
  };

  $scope.devicePlatform = function() {
    $scope.results = $cordovaDevice.getPlatform();
  };

  $scope.deviceUUID = function(){
    $scope.results = $cordovaDevice.getUUID();
  };

  $scope.deviceVersion = function() {
    $scope.results = $cordovaDevice.getVersion();
  };

})

.controller('NetworkCtrl', function($cordovaNetwork, $scope, $rootScope, $cordovaDialogs) {
  // REF: http://ngcordova.com/docs/plugins/network/

  $scope.type = $cordovaNetwork.getNetwork();

  $scope.isOnline = $cordovaNetwork.isOnline();

  $scope.isOffline = $cordovaNetwork.isOffline();

  // listen for Online event
  $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
    var onlineState = networkState;

    $cordovaDialogs.alert('Online event is fired. Status: ' + onlineState, 'Fired!');
  });

  // listen for Offline event
  $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
    var offlineState = networkState;

    $cordovaDialogs.alert('Offline event is fired. Status: ' + onlineState, 'Fired!');
  });
})

.controller('VibrationCtrl', function($cordovaVibration, $scope) {
  // REF: http://ngcordova.com/docs/plugins/vibration/

  $scope.vibrate = function() {
    $cordovaVibration.vibrate(500);
  };
})

.controller('BarcodeScannerCtrl', function($cordovaBarcodeScanner, $scope, $cordovaDialogs) {
  // REF: http://ngcordova.com/docs/plugins/barcodeScanner/

  $scope.scan = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      // Success! Barcode data is here
      $scope.results = imageData;
    }, function(err) {
      // An error occured. Show a message to the user
      $cordovaDialogs.alert('Error scanning: ' + err, 'Error!');
    });
  };

  $scope.lookup = function() {
    window.open("http://www.upcindex.com/" + $scope.results.text, "_system");
  };

  $scope.reset = function() {
    $scope.results = null;
  };
})

.controller('CameraCtrl', function($cordovaCamera, $scope, $cordovaDialogs) {
  // REF: http://ngcordova.com/docs/plugins/camera/

  $scope.takePicture = function() {
    var options = {
      quality : 100,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      // Success! Image data is here
      $scope.imgSrc = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      $cordovaDialogs.alert('An error occurred: ' + err, 'Error!');
    });
  };

  $scope.selectPicture = function() {
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    $cordovaCamera.getPicture(options).then(function(imageUri) {
      // Success! Image data is here
      $scope.imgSrc = imageUri;
    }, function(err) {
      $cordovaDialogs.alert('An error occurred: ' + err, 'Error!');
    });
  };
});
