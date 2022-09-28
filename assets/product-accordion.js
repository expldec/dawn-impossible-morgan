if (!customElements.get('product-accordion')) {
  customElements.define('product-accordion', class ProductAccordion extends HTMLElement {
    constructor() {
      super();
      // this.querySelectorAll('div').forEach(
      //   (div) => div.addEventListener('click', this.onCaretClick.bind(this))
      // );
    }

    onCaretClick(event) {
      console.log('HELLO');
    }
    
  });
}
