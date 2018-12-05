const template = document.createElement('template');

template.innerHTML = `
  <h1>About</h1>
`;

class MyViewAbout extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-view-about', MyViewAbout);
