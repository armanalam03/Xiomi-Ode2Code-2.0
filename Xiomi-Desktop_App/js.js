const { app, BrowserWindow } = require('electron')
const path = require('path')


/*-----------------LOGIN--------------*/
const id = document.getElementById("id")
const pass = document.getElementById("pass")
const loginBtn = document.getElementById("login_btn")
const loginContainer = document.getElementById("login_container")
const redBorder = document.getElementById("login_form")
const container = document.getElementById("container")
loginBtn.addEventListener("click", () => {
    if(id.value == "xiomi" && pass.value == "ode2code"){
        loginContainer.classList.add("login_success")
        container.classList.remove("blur")
    } else {
        redBorder.style.border = "1px solid red"
    }
})


let smartphone = [
    {
        "name": "Xiaomi Mi 12S Ultra",
        "storage": "8GB/256GB",
        "color": "Green",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4860 mAh",
        "image": "./images/Xiaomi Mi 12S Ultra Green.jpg",
        "category": "smartphone",
        "price": "100000",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Ultra, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Ultra",
        "storage": "8GB/256GB",
        "color": "Black",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4860 mAh",
        "image": "./images/Xiaomi Mi 12S Ultra Black.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Ultra, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Ultra",
        "storage": "12GB/512GB",
        "color": "Green",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4860 mAh",
        "image": "./images/Xiaomi Mi 12S Ultra Green.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Ultra, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Ultra",
        "storage": "12GB/512GB",
        "color": "Black",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4860 mAh",
        "image": "./images/Xiaomi Mi 12S Ultra Black.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Ultra, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/256GB",
        "color": "White",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro White.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/256GB",
        "color": "Purple",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Purple.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/256GB",
        "color": "Green",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Green.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/256GB",
        "color": "Black",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Black.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/128GB",
        "color": "White",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro White.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/128GB",
        "color": "Purple",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Purple.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/128GB",
        "color": "Green",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Green.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Xiaomi Mi 12S Pro",
        "storage": "8GB/128GB",
        "color": "Black",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Black.jpg",
        "category": "smartphone",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Tablet",
        "storage": "8GB/256GB",
        "color": "Green",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Green.jpg",
        "category": "tablet",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    },
    {
        "name": "Tablet",
        "storage": "8GB/256GB",
        "color": "Black",
        "processor": " Qualcomm Snapdragon 8 Gen 1",
        "camera": "32 MP / Triple 50MP+48MP+50MP",
        "screen": "6.73 '",
        "battery":  " 4600 mAh",
        "image": "./images/Xiaomi Mi 12S Pro Black.jpg",
        "category": "tablet",
        "price": "10",
        "description": "Xiaomi represented the futuristic smartphone Mi 12S Pro, and all the useful features have been built into this gadget. So, the device is equipped with a multifunctional camera that can please you with pictures of unsurpassed quality. The presence of the capacious RAM cannot but rejoice as it allows the device to run resource-intensive applications. The optimal operation of the smartphone is accompanied by a 4860 mAh battery, which ensures its autonomous operation for a long time. But a discharged battery should not upset you because the device supports fast charging, thanks to which you can easily replenish the charge."
    }
]
const productTemplate = document.querySelector("[product-template]")
const productsContainer = document.getElementById("products_container")
const searchbar = document.getElementById("searchbar")
const category = document.querySelectorAll("li")

let devices = []

searchbar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    //console.log(value)
    devices.forEach(device => {
        const isVisible = device.name.toLowerCase().includes(value) || device.color.toLowerCase().includes(value) || device.storage.toLowerCase().includes(value)
        device.element.classList.toggle("hide", !isVisible)
    })
})

window.addEventListener("DOMContentLoaded", () => {
    devices = smartphone.map(item => {
        const product = productTemplate.content.cloneNode(true).children[0];
        const img = product.querySelector("[product-img]");
        const name = product.querySelector("[product-name]");
        const price = product.querySelector("[product-price]");
        const storage = product.querySelector("[product-storage]");
        const color = product.querySelector("[product-color]");
        img.src = item.image;
        name.textContent = item.name
        price.textContent = 'Rs.' + item.price
        storage.textContent = item.storage
        color.textContent = item.color
        productsContainer.append(product);
        return {name: item.name, color: item.color, storage: item.storage, element: product}
    })
    

/* --------------ADD TO CART-------------- */
    var addToCartBtns = document.getElementsByClassName("add_btn")
    console.log(addToCartBtns.length)
    for(var i=0; i<addToCartBtns.length; i++){
        var btns = addToCartBtns[i]
        btns.addEventListener("click", (e) => {
            var targetBtn = e.target
            var product = targetBtn.parentElement.parentElement
            var img = product.getElementsByClassName("product_img")[0].src
            var name = product.getElementsByClassName("product_name")[0].innerHTML
            var storage = product.getElementsByClassName("product_storage")[0].innerHTML
            var color = product.getElementsByClassName("product_color")[0].innerHTML 
            var price = product.getElementsByClassName("product_price")[0].innerHTML
            //console.log(name, price, img)
            addItemToCart(name, price, img, storage, color)
            updateCartTotal()
        })
    }
})

    /* CART TOTAL */

    function updateCartTotal(){
        var cartItemsContainer = document.getElementsByClassName("cart_items_container")[0]
        var cartItems = document.getElementsByClassName("cart_item")
        var total = 0
        for(var i=0; i<cartItems.length; i++){
            var cartItem = cartItems[i]
            var priceElement = cartItem.getElementsByClassName("price")[0]
            var quantityElement = cartItem.getElementsByClassName("quantity")[0]
            var price = parseFloat(priceElement.innerHTML.replace('Rs.', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
            //console.log(total)
        }
        total = Math.round(total * 100) / 100
        document.getElementById("amount").innerHTML = 'Rs. ' + total
    }

    updateCartTotal()

    function addItemToCart(name, price, img, storage, color) {
        var cartItem = document.createElement("div")
        cartItem.classList.add("cart_item")
        var cartItemContainer = document.getElementsByClassName("cart_items_container")[0]
        var cartItemNames = cartItem.getElementsByClassName("name")/* replace product name with cart item name */
        console.log(cartItemNames)
        for(var i=0; i< cartItemNames.length; i++){
            if(cartItemNames[i].innerHTML==name){
                alert("Item already added to the cart.")
                return
            }
        }
        var cartItemContent = `
                <img src="${img}" alt="" class="cart_item_img">
                <div class="name_specs_container">
                <span class="name">${name}</span>
                <div class="cart_storage_color">
                <span class="storage">${storage}</span>
                <span class="color">${color}</span>
                </div>
                </div>
                <span class="price">${price}</span>
                <input type="number" name="" id="" class="quantity" value="1">
                <button class="remove">x</button>
        `
        cartItem.innerHTML = cartItemContent
        cartItemContainer.appendChild(cartItem)
        cartItem.getElementsByClassName("remove")[0].addEventListener("click", removeCartItem)
        cartItem.getElementsByClassName("quantity")[0].addEventListener("change", quantityChanged)
    }
    /* REMOVE FROM CART */
    var cartItemRemoveBtn = document.getElementsByClassName("remove")
    for(var i=0; i<cartItemRemoveBtn.length; i++){
        var removeBtn = cartItemRemoveBtn[i]
        removeBtn.addEventListener("click", removeCartItem) 
    }

    function removeCartItem(e){
        var btnClicked = e.target
        btnClicked.parentElement.remove()
        updateCartTotal()
    }
    /* QUANTITY CHANGED */
    var quantityInputs = document.getElementsByClassName('quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }

/*---------------QR CODE------------------*/
const qrCodeContainer = document.getElementById("qr-code-container")
const scanBtn = document.getElementById("scan_btn")
let scanner = new Instascan.Scanner({video: document.getElementById("preview")})
scanBtn.addEventListener("click", () => {
    container.classList.add("blur")
    qrCodeContainer.classList.remove("qr-hidden")
    qrCodeContainer.classList.add("qr-active")

    
    Instascan.Camera.getCameras().then((cameras) => {
        if(cameras.length > 0){
            scanner.start(cameras[0]);
        } else {
            alert("No Camera Found");
        }
    }).catch((e) => {
        console.error(e);
    });
})

    

    scanner.addListener("scan", (c) => {
        console.log(c)
        const item = JSON.parse(c)
        qrCodeContainer.classList.remove("qr-active")
        qrCodeContainer.classList.add("qr-hidden")
        container.classList.remove("blur")
        scanner.stop()
        const name = item.name
        const price = item.price
        const img = item.image
        console.log(img)
        const storage = item.storage
        const color = item.color
        addItemToCart(name, price, img, storage, color)
        updateCartTotal()
    })

/*-------------RANDOM ID------------*/

function randomId(){
    var id = new Date().getTime().toString()
    return id
}

/* PAYMENTS */

const cashCheck = document.getElementById("cash-check");
const paymentForm = document.getElementById("payment-form");
cashCheck.addEventListener("click", () => {
    if(cashCheck.checked == true){
        paymentForm.style.display = "none"
    } else {
        paymentForm.style.display = "flex"
    }
})



const checkoutBtn = document.getElementById("checkout_btn")
const infoPaymentContainer = document.getElementById("info-payment-container")
var totalAmount = document.getElementById("amount").innerHTML
checkoutBtn.addEventListener("click", () => {
    container.classList.add("blur")
    infoPaymentContainer.classList.remove("info-hidden")
    console.log(totalAmount)
    document.getElementById("amount").innerHTML = totalAmount
})



const payBtn = document.getElementById("pay-btn")
    payBtn.addEventListener("click", (e) => {
        var customerName = document.getElementById("customer_name").value
        var customerNumber = document.getElementById("customer_no").value
        var customerEmail = document.getElementById("customer_email").value
        var paymentId = randomId()
        e.preventDefault()
        Email.send({
            //SecureToken : "e61f2966-7847-45b9-861e-954a76cf250c",
            Host: "smtp.elasticemail.com",
            Username: "fakeonn12@gmail.com",
            Password: "F7325315976F6D62FC95C19D54CA3C9C16D6",
            To : customerEmail,
            From : "fakeonn12@gmail.com",
            Subject : "Mi Store Receipt",
            Body : `
            <span style:"font-weight: 600; color: 'orangered'"><bold>Customer Name:</bold> ${customerName}</span> <br>
            <span style:"font-weight: 600; color: 'orangered'><bold>Customer Number:</bold> ${customerNumber}</span> <br>
            <span style:"font-weight: 600; color: 'orangered'><bold>Payment Id:</bold> ${paymentId}</span>
            `
        }).then(
        message => console.log(message),
        alert(`Receipt has been sent on given mail-id with Payment-ID: ${paymentId}`),
        container.classList.remove("blur"),
        infoPaymentContainer.classList.add("info-hidden")
        );
    })

    /*  CLOSE BTN  */

const paymentClose = document.getElementById("payment-close")
const qrClose = document.getElementById("qr-close")
paymentClose.addEventListener("click", () => {
    container.classList.remove("blur")
    infoPaymentContainer.classList.add("info-hidden")
})
qrClose.addEventListener("click", () => {
    container.classList.remove("blur")
    qrCodeContainer.classList.add("qr-hidden")
    qrCodeContainer.classList.remove("qr-active")
    scanner.stop()
})