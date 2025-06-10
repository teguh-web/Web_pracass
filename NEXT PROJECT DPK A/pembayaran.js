const radios = document.querySelectorAll('input[name="payment"]');
const paymentDetails = document.getElementById('payment-details');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        paymentDetails.style.display = 'block';
    });
});

function submitPayment() {
    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();

    if (name && number) {

                                                                                                                        
        window.location.href = 'barcode.html';
    } else {
        alert('Isi dulu ngab');
    }
}
