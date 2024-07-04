document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        event.preventDefault();
    } else {
        alert('Merci pour votre message !');
    }
});
