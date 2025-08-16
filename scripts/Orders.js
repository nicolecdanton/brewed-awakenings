import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, productList) => {
    let orderProduct = null

    for (const product of productList) {
        if (product.id === order.productId) {
            orderProduct = product.name
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, employeeList) => {
    let orderEmployee = null

    for (const employee of employeeList) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return orderEmployee
}

const allEmployees = getEmployees()
const allProducts = getProducts()

export const Orders = () => {
    let html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, allEmployees)
        const product = findProduct(order, allProducts)

        html += `<li>${product} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

