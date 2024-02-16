document.addEventListener('DOMContentLoaded', function () {
    const ticketForm = document.getElementById('ticketForm');
    const ticketList = document.getElementById('ticketList');
    const deleteTickets = document.querySelector('button[type="reset"]'); // Select the reset button

    const tickets = [];

    ticketForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const movie = document.getElementById('movie').value;
        const quantity = document.getElementById('quantity').value;
        const firstname = document.getElementById('firstname').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        //checks if all input fields are filled in
        if (quantity <= 0 || !quantity) {
            alert("Ugyldig antall billetter");
        } else {
            if (!movie) {
                alert("Du må velge en film")
            } else if (!firstname) {
                alert("Du må fylle inn et fornavn")
            } else if (!surname) {
                alert("Du må fylle inn et etternavn")
            } else if (!email) {
                alert("Du må fylle inn en epostadresse.")
            } else if (!phone) {
                alert("Du må fylle inn et telefonnummer.")
            } else {

                // creates a ticket object
                const ticket = {
                    movie: movie,
                    quantity: quantity,
                    firstname: firstname,
                    surname: surname,
                    email: email,
                    phone: phone
                };

                tickets.push(ticket);
                ticketForm.reset();
                showTickets();
            }
        }
    });

    // Event listener for deleting tickets
    deleteTickets.addEventListener('click', function () {
        tickets.length = 0;
        showTickets();
    });

    ticketForm.addEventListener('reset', function () {
        ticketList.innerHTML = ''; //clear ticket list
    });

    function showTickets() {
        ticketList.innerHTML = ' ';
        tickets.forEach(function (ticket, index) {
            const li = document.createElement('li');
            li.textContent = `Film: ${ticket.movie}, Antall: ${ticket.quantity}, Fornavn: ${ticket.firstname}, Etternavn: ${ticket.surname} E-post: ${ticket.email}, Telefon: ${ticket.phone}`;
            ticketList.appendChild(li);
        });
    }

});