document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("videoModal");
    var span = document.getElementsByClassName("close-button")[0];
    var video = document.getElementById("adVideo");

    // Show the modal when the page loads
    modal.style.display = "flex";
    video.play(); // Try to play the video

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        video.pause();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            video.pause();
        }
    }
});
