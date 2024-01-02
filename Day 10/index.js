const player = document.getElementById("player")

function playSong(id) {
  // Construct the YouTube video URL with the provided video ID
  const videoURL = `https://www.youtube.com/embed/${id}?autoplay=1`;

  // Update the src attribute of the player iframe
  player.src = videoURL;
}