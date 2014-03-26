var mymodule = (function () {
//Private

//Public
    return {

        $$: function (id) {
            'use strict';
            if (typeof id != 'undefined') {
                return document.getElementById(id);
            }
            else {
                return 'undefined'
            }
        },

        btn_plus_fn: function () {

            if (pane.value.slice(-1) != "+" && pane.value.slice(-1) != "-" && pane.value.slice(-1) != "*" && pane.value.slice(-1) != "/" && pane.value.slice(-1) != "%") {
                pane.value += '+';

            }
        },

        btn_subtract_fn: function () {

            if (pane.value.slice(-1) != "+" && pane.value.slice(-1) != "-" && pane.value.slice(-1) != "*" && pane.value.slice(-1) != "/" && pane.value.slice(-1) != "%") {
                pane.value += '-';

            }
        },

        btn_multiply_fn: function () {

            if (pane.value.slice(-1) != "+" && pane.value.slice(-1) != "-" && pane.value.slice(-1) != "*" && pane.value.slice(-1) != "/" && pane.value.slice(-1) != "%") {
                pane.value += '*';

            }
        },

        btn_divide_fn: function () {

            if (pane.value.slice(-1) != "+" && pane.value.slice(-1) != "-" && pane.value.slice(-1) != "*" && pane.value.slice(-1) != "/" && pane.value.slice(-1) != "%") {
                pane.value += '/';

            }
        },

        btn_modulus_fn: function () {

            if (pane.value.slice(-1) != "+" && pane.value.slice(-1) != "-" && pane.value.slice(-1) != "*" && pane.value.slice(-1) != "/" && pane.value.slice(-1) != "%") {
                pane.value += '%';

            }
        },

        btn_equals_fn: function () {

            pane.value = eval(pane.value);
        }, // Evaluate the String

        btn_decimal_fn: function () {

            //if(pane.value.charAt(pane.value.length - 1) !=".")
            if (pane.value.slice(-1) != ".") {
                pane.value += '.';

            }
        },

        btn_cancel_fn: function () {

            pane.value = "";
        }
    }
})();


var pane = document.getElementById('calcPanel');


function elementGenerate(myId, myClass, myContent, myElement) {
    var myElement = document.createElement(myElement);
    myElement.setAttribute("id", myId);
    myElement.setAttribute("class", myClass);
    //childNodes[0].nodeValue
    myElement.innerHTML = myContent;
    return myElement;
}

//Generate Button Elements and Add to DOM

//Row One
for (i = 1; i <= 3; i++) {

    mymodule.$$('calcRowOne').appendChild(elementGenerate(i, 'mybtn', i, "button"))
}
;// (0-3)

mymodule.$$('calcRowOne').appendChild(elementGenerate('btnMultiply', 'mybtn', '&times;', "button"));//multiply

//Row Two
for (i = 4; i <= 6; i++) {

    mymodule.$$('calcRowTwo').appendChild(elementGenerate(i, 'mybtn', i, "button"))
}
;//(4-6)

mymodule.$$('calcRowTwo').appendChild(elementGenerate('btnDivide', 'mybtn', '&#247;', "button"));//Divide

//Row Three
for (i = 7; i <= 9; i++) {

    mymodule.$$('calcRowThree').appendChild(elementGenerate(i, 'mybtn', i, "button"))
}
;//(7-9)

mymodule.$$('calcRowThree').appendChild(elementGenerate('btnSubtract', 'mybtn', '&#8211;', "button"));//Subtract

//Row Four
mymodule.$$('calcRowFour').appendChild(elementGenerate('0', 'mybtn', '0', "button"));//
mymodule.$$('calcRowFour').appendChild(elementGenerate('btnDecPoint', 'mybtn', '&period;', "button"));
mymodule.$$('calcRowFour').appendChild(elementGenerate('btnPlus', 'mybtnAlt', '+', "button"));

//Row Five
mymodule.$$('calcRowFive').appendChild(elementGenerate('(', 'mybtn', '(', "button"));//
mymodule.$$('calcRowFive').appendChild(elementGenerate(')', 'mybtn', ')', "button"));
mymodule.$$('calcRowFive').appendChild(elementGenerate('btnModulus', 'mybtn', 'mod', "button"));
mymodule.$$('calcRowFive').appendChild(elementGenerate('btnCancelError', 'mybtn', 'Ce', "button"));

//Row Six
mymodule.$$('calcRowSix').appendChild(elementGenerate('btnCancel', 'mybtnAlt', 'C', "button"));
mymodule.$$('calcRowSix').appendChild(elementGenerate('btnEquals', 'mybtnAlt', '=', "button"));


//EventHandlers and EventListeners
for (i = 0; i <= 9; i++) {

    mymodule.$$(i).addEventListener("click", function () {
        pane.value += this.id
    }, false)

}//Buttons (0-9)

mymodule.$$('(').addEventListener("click", function () {
    pane.value += this.id
}, false);
mymodule.$$(')').addEventListener("click", function () {
    pane.value += this.id
}, false);

mymodule.$$('btnPlus').onclick = function () {
    mymodule.btn_plus_fn()
};
mymodule.$$('btnMultiply').onclick = function () {
    mymodule.btn_multiply_fn()
};
mymodule.$$('btnDivide').onclick = function () {
    mymodule.btn_divide_fn()
};
mymodule.$$('btnSubtract').onclick = function () {
    mymodule.btn_subtract_fn()
};
mymodule.$$('btnEquals').onclick = function () {
    mymodule.btn_equals_fn()
};
mymodule.$$('btnDecPoint').onclick = function () {
    mymodule.btn_decimal_fn()
};


mymodule.$$('btnCancel').addEventListener("click", function () {
    mymodule.btn_cancel_fn()
}, false);
mymodule.$$('btnCancelError').addEventListener("click", function () {
    mymodule.btn_cancelError_fn()
}, false);
mymodule.$$('btnModulus').addEventListener("click", function () {
    mymodule.btn_modulus_fn()
}, false);


document.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
        btn_equals_fn()
    }
});


$(dragDiv);

//Functions
function dragDiv() {
    $('#myCalculator').draggable();
}

