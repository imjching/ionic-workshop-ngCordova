(function(){

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'starter.controllers' is found in controllers.js
  angular.module('starter', ['ionic', 'ngCordova'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('app.dialogs', {
      url: '/dialogs',
      views: {
        'menuContent': {
          templateUrl: 'templates/dialogs.html',
          controller: 'DialogsCtrl'
        }
      }
    }).state('app.device', {
      url: '/device',
      views: {
        'menuContent': {
          templateUrl: 'templates/device.html',
          controller: 'DeviceCtrl'
        }
      }
    }).state('app.network', {
      url: '/network',
      views: {
        'menuContent': {
          templateUrl: 'templates/network.html',
          controller: 'NetworkCtrl'
        }
      }
    }).state('app.vibration', {
      url: '/vibration',
      views: {
        'menuContent': {
          templateUrl: 'templates/vibration.html',
          controller: 'VibrationCtrl'
        }
      }
    }).state('app.barcode_scanner', {
      url: '/barcode_scanner',
      views: {
        'menuContent': {
          templateUrl: 'templates/barcode_scanner.html',
          controller: 'BarcodeScannerCtrl'
        }
      }
    }).state('app.camera', {
      url: '/camera',
      views: {
        'menuContent': {
          templateUrl: 'templates/camera.html',
          controller: 'CameraCtrl'
        }
      }
    }).state('app.pin_dialog', {
      url: '/pin_dialog',
      views: {
        'menuContent': {
          templateUrl: 'templates/pin_dialog.html',
          controller: 'PinDialogCtrl'
        }
      }
    }).state('app.touchid', {
      url: '/touchid',
      views: {
        'menuContent': {
          templateUrl: 'templates/touchid.html',
          controller: 'TouchIdCtrl'
        }
      }
    }).state('app.toast', {
      url: '/toast',
      views: {
        'menuContent': {
          templateUrl: 'templates/toast.html',
          controller: 'ToastCtrl as vm'
        }
      }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dialogs');
  });

}());
