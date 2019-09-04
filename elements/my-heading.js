class MyHeading extends HTMLElement {
	constructor() {
		super()
		this.root = this.attachShadow({ mode: 'open' })
		this.textAlign = this.getAttribute('text-align') || 'left'
		this.jsonld = {
			"@context": "https://schema.org",
			"@type": "Article",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://google.com/article"
			},
			"headline": "valera",
			"publisher": {
				"@type": "Organization",
				"name": "Google"
			},
			"description": "A most wonderful article"
		};

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
	    
	    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
        },
        "headline": "valera",
        "publisher": {
            "@type": "Organization",
            "name": "Google"
        },
        "description": "A most wonderful article"
    }
</script>
	  `
	}
}

customElements.define('my-heading', MyHeading)
