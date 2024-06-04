//Select element function 
const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

//Add an Event Listener 
menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});