export class OpengraphGenerator {
	#title: string;
	#url: string;

	constructor(title: string, url: string) {
		this.#title = title;
		this.#url = url;
	}

	private get title  () {
		return `<meta property="og:title" content="${this.#title}">`;
	};
    private get url (){
        return `<meta property="og:url" content="${this.#url}">`
    }

	public generate_opengraph() {
		let opengraph_html = `
            <meta property="og:type" content="website">
        `;

		if (this.#title) {
			opengraph_html += this.title;
		}
        if (this.#url ){
            opengraph_html += this.url;
        }



		return opengraph_html;
	}
}
