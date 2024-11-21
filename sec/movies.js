// Movie data
const movies = [
    { name: "Avengers: Endgame", availableSeats: 100 },
    { name: "The Dark Knight", availableSeats: 50 },
    { name: "Inception", availableSeats: 70 },
    { name: "Interstellar", availableSeats: 60 }
];

// Function to view movies
function viewMovies() {
    const moviesListDiv = document.getElementById('movies-list');
    moviesListDiv.innerHTML = ''; // Clear previous content

    const ul = document.createElement('ul');
    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${movie.name} (Available Seats: ${movie.availableSeats})`;
        ul.appendChild(li);
    });

    moviesListDiv.appendChild(ul);
}

// Function to show booking form
function showBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.style.display = 'block';

    const movieSelect = document.getElementById('movie-select');
    movieSelect.innerHTML = ''; // Clear previous options

    movies.forEach((movie, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerHTML = movie.name;
        movieSelect.appendChild(option);
    });
}

// Function to book tickets
function bookTickets() {
    const movieSelect = document.getElementById('movie-select');
    const ticketCount = document.getElementById('ticket-count').value;

    const movieIndex = movieSelect.value;
    const movie = movies[movieIndex];

    if (!ticketCount || ticketCount <= 0) {
        alert("Please enter a valid number of tickets.");
        return;
    }

    if (movie.availableSeats >= ticketCount) {
        movie.availableSeats -= ticketCount;
        alert(`Booking successful! You booked ${ticketCount} ticket(s) for ${movie.name}.`);
        viewMovies(); // Refresh the movie list to reflect updated available seats
    } else {
        alert("Not enough seats available. Please try again.");
    }

    // Clear the form
    document.getElementById('ticket-count').value = '';
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('message').innerHTML = `Tickets booked for ${movie.name}!`;
}
