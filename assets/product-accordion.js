if (!customElements.get('product-accordion')) {
  customElements.define('product-accordion', class ProductAccordion extends HTMLElement {
    constructor() {
      super();
      
    }

    onCaretClick(event) {
      console.log('HELLO');
    }
    
  });
}
