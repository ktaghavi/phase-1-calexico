const cart = document.querySelector("#number-in-cart")

fetch ('http://localhost:3000/menu')
.then(r => r.json())
.then (menu => {
    menu.forEach((item) => {
        addToMenu(item)
    })

    displayMenuItem(menu[0])
})

function addToMenu (item) {
    const span = document.createElement("span")
    const menu_items = document.querySelector("#menu-items")
    span.textContent = item.name
    menu_items.append(span)
    span.addEventListener("click", () => {
        console.log(item)
        // displayMenuItem(item)
    })
}

function displayMenuItem(item) {
    const image = document.querySelector("#dish-image")
    const name = document.querySelector("#dish-name")
    const description = document.querySelector("#dish-description")
    const price = document.querySelector("#dish-price")
    image.src = item.image
    name.textContent = item.name
    description.textContent = item.description
    price.textContent = item.price
    cart.textContent = item.number_in_bag
}

const form = document.querySelector("#cart-form")
form.addEventListener("submit", (e) => submitHandler(e))

function submitHandler (e) {
    e.preventDefault()
    cart.textContent = parseInt(cart.textContent) + parseInt (e.target["cart-amount"].value)
}