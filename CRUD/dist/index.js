"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
var products = [];
const form = document.getElementById("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name")).value;
    const price = +(document.getElementById("price")).value;
    var product = new product_1.Product(name, price);
    const table = document.getElementById("table");
    table === null || table === void 0 ? void 0 : table.insertAdjacentHTML("beforeend", `<tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button class="delete-button btn btn-danger" type="reset">Delete</button>

                <button type="button" class="edit-button btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edit</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="product-name-id" class="col-form-label">Name:</label>
                            <input type="text" class="form-control" id="product-name-id">
                        </div>
                        <div class="mb-3">
                            <label for="product-price-id" class="col-form-label">Price:</label>
                            <input class="form-control" id="product-price-id"></input>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" id='save-button'>Save</button>
                    </div>
                    </div>
                </div>
                </div>

            </td>
        </tr>`);
});
var buttons = document.querySelector(".delete-button");
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete-button")) {
        const row = target.closest("tr");
        if (row) {
            row.remove();
        }
    }
});
var buttons = document.querySelector(".edit-button");
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("edit-button")) {
        const row = target.closest("tr");
        let elements = row === null || row === void 0 ? void 0 : row.children;
        for (let i = 0; i < 3; i++) {
            console.log(elements[i].textContent);
        }
        const inputProductName = document.getElementById("product-name-id");
        if (inputProductName) {
            inputProductName.value = elements[0].textContent;
        }
        const inputProductPrice = document.getElementById("product-price-id");
        if (inputProductPrice) {
            inputProductPrice.value = elements[1].textContent;
        }
    }
});
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("save-button")) {
        const row = target.closest("tr");
        const inputProductName = document.getElementById("product-name-id");
        const inputProductPrice = document.getElementById("product-price-id");
        var elements = row === null || row === void 0 ? void 0 : row.children;
        if (inputProductName) {
            elements[0].innerHTML = inputProductName.value;
        }
        if (inputProductPrice) {
            elements[1].innerHTML = inputProductPrice.value;
        }
    }
});
