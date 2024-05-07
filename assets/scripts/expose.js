window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  const hornType = document.getElementById('horn-select');
  hornType.addEventListener("change", function() {
    changeHorn(hornType.value);
  });

  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    const audio = document.querySelector(".hidden");
    if (document.getElementById('horn-select').value == "party-horn") {
      jsConfetti.addConfetti()
    }
    audio.play();
  });

  const vol = document.getElementById('volume');
  vol.addEventListener("input", function() { // Changed to "input" event to update continuously
    console.log(vol.value);
    changeVol(parseInt(vol.value, 10));
    const audio = document.querySelector(".hidden");
    audio.volume = vol.value / 100; // Corrected setting volume
  })
}

function changeVol(volume) {
  const volIco = document.getElementById('volume-controls').querySelector("img");
  if (volume === 0) {
    volIco.src = "assets/icons/volume-level-0.svg";
  } else if (volume < 33) {
    volIco.src = "assets/icons/volume-level-1.svg";
  } else if (volume < 67) {
    volIco.src = "assets/icons/volume-level-2.svg";
  } else {
    volIco.src = "assets/icons/volume-level-3.svg";
  } 
}

function changeHorn(hornType) {
  const img = document.querySelector("img");
  const audio = document.querySelector(".hidden");

  switch (hornType) {
    case 'air-horn':
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
      break;
    case 'car-horn':
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
      break;
    case 'party-horn':
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
      break;
    default:
      // Handle default case
      img.src = "assets/images/no-image.png";
      break;
  }
}
