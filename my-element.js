window.customElements.define('my-element', class MyElement extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <h1>Test! It works!!!</h1>
        `;
    }
});
console.log('Loaded my-element');