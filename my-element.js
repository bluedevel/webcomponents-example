const template = `
<h1>Test! It works!!!</h1>
<slot></slot>
`;

window.customElements.define('my-element', class MyElement extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'})
            .innerHTML = template;

        const test  = this.querySelector('test');
        console.log(test);
        test.innerText = 'Hallo Welt';
    }
});
console.log('Loaded my-element');