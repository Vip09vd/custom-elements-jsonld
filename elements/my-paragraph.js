class MyParagraph extends HTMLElement {
	constructor() {
		super()
		this.root = this.attachShadow({ mode: 'open' })
		this.textAlign = this.getAttribute('text-align') || 'left';

		this.root.innerHTML = `
			<style>
			:host {
				font-size: 12px;
				display: block;
				text-align: ${this.textAlign};
			}
			</style>
	    <slot></slot>
	  `
	}
}

customElements.define('my-paragraph', MyParagraph)
