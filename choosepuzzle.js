function simulateFileInput(url) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

            const fileInput = document.getElementById('imgUpload');
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            const changeEvent = new Event('change', {
                bubbles: true
            });
            fileInput.dispatchEvent(changeEvent);
        })
        .catch(error => {
            console.error(error);
        });
}

function selectImage(url) {
    const imgUpload = document.getElementById('imgUpload');
    simulateFileInput(url);
    imgUpload.value = ''; 
}