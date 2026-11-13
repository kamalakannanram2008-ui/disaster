// Initialize map
const map = L.map('map').setView(
    [11.0168, 76.9558], 8
);

// Map layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

// Sample marker
L.marker([11.0168, 76.9558])
    .addTo(map)
    .bindPopup("Coimbatore - Sample Map Location");

// Emergency form
const form = document.getElementById("helpForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("person").value;
    const location = document.getElementById("location").value;
    const disaster = document.getElementById("disaster").value;
    const details = document.getElementById("details").value;

    const request = {
        name,
        location,
        disaster,
        details
    };

    console.log("Emergency request:", request);

    document.getElementById("response").textContent =
        "Demo request received. Connect a secure backend to register and forward it.";

    form.reset();
});
