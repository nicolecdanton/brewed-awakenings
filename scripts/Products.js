import { getOrders, getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product"
                    data-name="${product.name}"
                    data-price="${product.price}">
                    ${product.name}
                    </li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent1) => {
        const itemClicked = clickEvent1.target
        if (itemClicked.dataset.type === "product") {
            window.alert (`${itemClicked.dataset.name} costs \n $${itemClicked.dataset.price}`)
            }
    }

)

