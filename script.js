const Product ={
    name: "RTX 5090",
    price: 1999.99,
    quantity: 10,


    sell: function(amountToSell = 1){
        if(this.quantity >= amountToSell){
            this.quantity -= amountToSell;
            return {
                success: true, 
                message: `Sold ${amountToSell} items(s) New quantity: ${this.quantity}`
            };
        }else{
            return {
                success: false, 
                message: "Sorry, out of stock"
            };
        }
    }, 

    updatePrice: function(newPrice){
        const newPriceValue = parseFloat(newPrice);
        if(!isNaN(newPriceValue) && newPriceValue > 0){
            this.price = newPriceValue;
            return {
                success: true, 
                message: `Price updated to $${this.price.toFixed(2)}.`
            };
        }else{
            return {
                success: false,
                 message: "Invalid price. Plese enter a positive number."
                };
        }
    },

    restock: function(amountToAdd = 5){
        this.quantity += amountToAdd;
        return {
            success: true,
            message: `Restocked ${amountToAdd} items(s), New quantity ${this.quantity}`
        };
    }
};

const productNameEl = document.getElementById('product-name');
const productPriceEl = document.getElementById('product-price');
const productQuantityEl = document.getElementById('product-quantity');
const sellOneBtn = document.getElementById('sell-one-btn');
const restockBtn = document.getElementById('restock-btn');
const newPriceInput = document.getElementById('new-price-input');
const updatePriceBtn = document.getElementById('update-price-btn');
const messageBox = document.getElementById('message-box');

function updateDisplay(){
    productNameEl.textContent = Product.name;
    productPriceEl.textContent = `$${Product.price.toFixed('2')}`;
    productQuantityEl.textContent = Product.quantity;
}

function showMessage(message, isSuccess = true){
    messageBox.textContent = message;
            messageBox.className = `mt-4 p-4 text-center text-sm font-medium rounded-xl block ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
}

sellOneBtn.addEventListener('click', ()=>{
    const result = Product.sell(25);
    showMessage(result.message, result.success);
    updateDisplay();
});

restockBtn.addEventListener('click', ()=>{
    const result = Product.restock(50);
    showMessage(result.message, result.success);
    updateDisplay();
})

updatePriceBtn.addEventListener('click', () =>{
    const newPrice = newPriceInput.value;
    const result = Product.updatePrice(newPrice);
    showMessage(result.message, result.success);
    updateDisplay();
})

updateDisplay();