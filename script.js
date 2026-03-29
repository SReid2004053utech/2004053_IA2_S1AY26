
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
    alert(name + " added to cart!");
}

function displayCart() {
    let table = document.getElementById("cartTable");
    let total = 0;

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    `;

    cart.forEach(item => {
        let row = table.insertRow();
        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = "$" + item.price;
        total += item.price;
    });

    let tax = total * 0.15;
    let finalTotal = total + tax;

    document.getElementById("total").innerHTML =
        "Subtotal: $" + total +
        "<br>Tax (15%): $" + tax.toFixed(2) +
        "<br><b>Total: $" + finalTotal.toFixed(2) + "</b>";
}

function clearCart() {
    cart = [];
    saveCart();
    location.reload();
}

function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("loginError").innerText = "Please fill in all fields";
        return false;
    }
    return true;
}

function validateRegister() {
    let email = document.getElementById("email").value;

    if (email === "") {
        document.getElementById("regError").innerText = "Email is required";
        return false;
    }
    return true;
}

function checkout() {
    let name = document.getElementById("cname").value;
    let address = document.getElementById("address").value;

    if (name === "" || address === "") {
        document.getElementById("msg").innerText = "Please fill all fields";
        return false;
    }

    document.getElementById("msg").innerText = "Order Confirmed! ✅";

    clearCart(); 
    return false;
}