const template = document.createElement('template');

template.innerHTML = `
  <h1>Home</h1>
`;

class MyViewHome extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-view-home', MyViewHome);
