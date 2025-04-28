const searchForm = document.querySelector('.search-form')
const productList = document.querySelector('.product-list')

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault()
    const inputvalue = event.target[0].value

    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputvalue}`)
    const products = (await data.json()).results.slice(0, 10)

    displayItems(products)

})

function displayItems(products) {
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</p>
            <p>Loja: ${product.seller.nickname}</p>
        </div>
        `,).join('')
}