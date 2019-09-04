class MyHeading extends HTMLElement {
	constructor() {
		super()
		this.root = this.attachShadow({ mode: 'open' })
		this.textAlign = this.getAttribute('text-align') || 'left'

		this.root.innerHTML = `
			<style>
			:host {
				font-size: 12px;
				font-weight: 600;
				text-align: ${this.textAlign};
				display: block;
				margin: 1em 0;
			}
			</style>
			
	    <slot></slot>
	  `
	}
}

customElements.define('my-heading', MyHeading)
