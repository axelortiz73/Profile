document.getElementById('qr-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const qrCodeDiv = document.getElementById('qr-code');

    fetch('/generate-qr-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=${encodeURIComponent(url)}`,
    })
        .then((response) => response.json())
        .then((data) => {
            qrCodeDiv.innerHTML = `<img src="${data.qrCodeUrl}" alt="QR Code">`;
        })
        .catch((error) => {
            console.error('Error:', error);
            qrCodeDiv.innerHTML = '<p>Error generating QR code</p>';
        });
});