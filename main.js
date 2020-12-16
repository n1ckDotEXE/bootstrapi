const xhr = new XMLHttpRequest();

xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    document.querySelector("#image").src=data.message;
})

document.getElementById("button1").addEventListener("click", function() {
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
});

