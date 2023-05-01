export class cartComponent extends HTMLElement {

    constructor () {
        super();
    }
     connecctedCallback() {
        this.innerHTML = 
            <i id="cartIcon" className="fa fa shopping-cart"></i> 
            (<span id="cart-count"></span>);
     }

    
}

customElements.define('cart-component', cartComponent);