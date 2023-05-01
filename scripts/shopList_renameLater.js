function addProductCard(product){
    const productHTML = `
    <div class="column">
        <img src="${this.img}" alt="${this.name}" height="500" width="100%">
        <p>${this.name}</p>
        <p>$${this.price}</p>
    `;

    let i=0;
    for(i; i < this.rating; i++){
        productHTML += `
        <span class="fa fa-star checked"></span>`;
    }
    for(i; i < 5; i++) {
        productHTML += `
        <span class="fa fa-star"></span>`;
    }

    productHTML += `
    </div>`;

    document.getElementsByClassName('container4')[0].getElementsByClassName('row')[0].appendChild(productHTML);
}

function addProductsFromController(prodController) {
    for (let i=0; i<prodController.items.length)
}