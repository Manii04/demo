function submitForm() {
    var name = document.getElementById("name").value;
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var passengers = parseInt(document.getElementById("passengers").value);
    var transportation = document.getElementById("transportation").value;

    if (name && destination && date && passengers && transportation) {
        var passengerNames = '';
        for (var i = 0; i < passengers; i++) {
            var passengerName = prompt(`Enter name of Passenger ${i + 1}:`);
            if (!passengerName) {
                alert("Please enter names for all passengers.");
                return;
            }
            passengerNames += `${passengerName} `;
        }

        var modalText = `Congratulations, ${name}! You have successfully booked your travel ticket. 
        Destination: ${destination}, Date: ${date}, Passengers Name: ${passengerNames}, Transportation: ${transportation}.`;
        document.getElementById("modal-text").innerText = modalText;
        document.getElementById("myModal").style.display = "block";

        // Reset the form after showing the pop-up
        resetForm();
    } else {
        alert("Please fill out all the fields.");
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function resetForm() {
    document.getElementById("booking-form").reset();
    document.getElementById("passenger-names").innerHTML = '';
    var passengers = parseInt(document.getElementById("passengers").value);
    if (passengers > 1) {
        var passengerNamesDiv = document.getElementById("passenger-names");
        for (var i = 0; i < passengers; i++) {
            var input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Passenger ${i + 1} Name`;
            passengerNamesDiv.appendChild(input);
        }
    }
}



// for scrplling 
// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: 'smooth'
//             });
//         });
//     });
// });

// function submitForm() {
//     // Handle form submission logic here
//     // ...
// }

// arrow
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", toggleScrollToTop);
});

function toggleScrollToTop() {
    const scrollButton = document.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

