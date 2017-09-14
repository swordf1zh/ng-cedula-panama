ng-cedula-panama 1.0.0
=========================
[![NPM version](https://badge.fury.io/js/ng-cedula-panama.svg)](http://badge.fury.io/js/ng-cedula-panama)

AngularJS wrapper for [cedula-panama](https://github.com/merlos/cedula-panama) (A javascript validator of the Panamenian id) written by [@merlos](https://github.com/merlos)
<br><br>ES
<br>Wrapper para AngularJS del paquete [cedula-panama](https://github.com/merlos/cedula-panama) (Validador Javascript de cédulas de Panamá) escrito por [@merlos](https://github.com/merlos)
-----
<br>

Install
-----
Install with npm

```
npm install --save ng-cedula-panama
```


Using ng-cedula-panama for form validation
---
```js
angular.module('yourApp', ['ngCedulaPanama']);
```

Writing your First Code
====
```html
<form name="Form">
    <div class="row">

        <div>
            <label>Valid id (cédula válida)</label>
            <input type="text"
                   name="cedulaValid"
                   ng-model="form.cedula1"
                   validar-cedula />
        </div>

        <div>
            <label>Complete id (cédula completa)</label>
            <input type="text"
                   name="cedulaComplete"
                   ng-model="form.cedula2"
                   validar-cedula-completa />
        </div>

        <div>
            <label>Valid and complete id (cédula válida y completa)</label>
            <input type="text"
                   name="cedulaValidComplete"
                   ng-model="form.cedula2"
                   validar-cedula
                   validar-cedula-completa />
        </div>
        <button ng-click="onSubmit()">Submit</button>
    </div>
</form>
```

Form.$error
===
 * cedulaInvalida
 * cedulaIncompleta


License
-----
MIT