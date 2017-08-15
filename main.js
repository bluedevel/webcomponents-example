require('@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce');
console.log("Loaded @webcomponents/webcomponentsjs");

require('./app.html');
require('./my-element');

console.log(window.customElements);

document.querySelector('body').innerHTML = '<test-app></test-app>';