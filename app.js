(function () {
'use strict';

angular.module('VibrationApp',['angular-vibrator'])
      .controller('AppController', AppController);

      AppController.$inject=['$scope','vibrator'];
      function AppController($scope, vibrator){
        var $ctrl=this;
        $ctrl.duration=10000;
        $ctrl.vibrate=function(duration){
          console.log('start vibration');
          vibrator.vibrate(duration);
        };
        $crtl.stop=function(){
          vibrator.stop();
        };
      };
})();
