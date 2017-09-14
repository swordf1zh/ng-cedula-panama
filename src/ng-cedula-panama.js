const MODULE_NAME = 'ngCedulaPanama';

import validateCedula from 'cedula-panama';

angular.module(MODULE_NAME, [])

  .directive('validarCedula', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {
        ngModel.$validators.cedulaInvalida = function(modelValue, viewValue) {
          let cedula = modelValue || viewValue;
          if (!cedula) return true;
          let validation = validateCedula.validate(cedula);
          return validation.isValid
        }
      }
    }
  })

  .directive('validarCedulaCompleta', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {
        ngModel.$validators.cedulaIncompleta = function(modelValue, viewValue) {
          let cedula = modelValue || viewValue;
          if (!cedula) return true;
          let validation = validateCedula.validate(cedula);
          return validation.isComplete
        }
      }
    }
  });

export default MODULE_NAME;