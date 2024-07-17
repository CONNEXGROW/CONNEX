document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("videoModal");
    var span = document.getElementsByClassName("close")[0];

    // Show the modal when the page loads
    modal.style.display = "block";

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
        var iframe = document.getElementById("popupVideo");
        iframe.src = iframe.src; // Stop the video
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            var iframe = document.getElementById("popupVideo");
            iframe.src = iframe.src; // Stop the video
        }
    }
});

