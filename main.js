require('@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce');
console.log("Loaded @webcomponents/webcomponentsjs");

require('./my-element');


document.querySelector('body').innerHTML = `
<p>Test!!!</p>
<my-element>
    <test></test>    
</my-element>
`;