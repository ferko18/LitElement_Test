import { LitElement, html } from "lit-element";

class TodoView extends LitElement {
  render() {
    return html`
      <p>Hello</p>
    `;
  }
}

//register the custom element
customElements.define("todo-view", TodoView);
