// create a function of price calculation
function updatePrice(productId, costId, price) {
    document.getElementById(productId).addEventListener('click', function () {
        const productCost = document.getElementById(costId);
        productCost.innerText = price;

        const bestPrice = document.getElementById('best-price').innerText;
        const memoryCost = document.getElementById('memory-cost').innerText;
        const storageCost = document.getElementById('storage-cost').innerText;
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    })
}
// call the function
updatePrice('eightGB', 'memory-cost', 0);
updatePrice('sixteenGB', 'memory-cost', 300);
updatePrice('ssd1', 'storage-cost', 0);
updatePrice('ssd2', 'storage-cost', 400);
updatePrice('ssd3', 'storage-cost', 600);
updatePrice('free-delivery', 'delivery-cost', 0);
updatePrice('paid-delivery', 'delivery-cost', 20);
// promo code calculation
document.getElementById('apply-btn').addEventListener('click', function () {
    const inputField = document.getElementById('promo-input');
    const inputValue = inputField.value;
    const promoCode = 'hard work';
    const errorMessage = document.getElementById('error-text');
    console.log(errorMessage.innerText)
    if (inputValue != promoCode) {
        console.log('Wrong')
    }
    const appliedMessage = document.getElementById('applied-text');
    if (inputValue === promoCode) {
        const totalPrice = document.getElementById('total-price');
        const total = parseFloat(totalPrice.innerText);
        const discount = (total * 20) / 100;
        const discountPrice = total - discount;
        totalPrice.innerText = discountPrice;
        inputField.value = '';
        const applyButton = document.getElementById('apply-btn');
        applyButton.disabled = true;
        appliedMessage.classList.remove('d-none');
    }
    else {
        errorMessage.classList.remove('d-none');
    }
})