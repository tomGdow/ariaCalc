var Converter = ((function () {
    var converterValue = 2;
    return {
        btn_plus_fn: function  (value) {

        return   value += '+';

        },

        btn_subtract_fn: function  (value) {

            return   value += '-';

        },

        btn_modulus_fn: function  (value) {

            return   value += '%';

        },

        btn_equals_fn: function (value) {

            return eval(value);
        }
    }
    })());



