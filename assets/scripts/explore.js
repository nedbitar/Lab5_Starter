window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;


function init() {
  const voices = synth.getVoices(); // Corrected line

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }

  const button = document.querySelector("button"); // Assuming button ID is "speak-button"
  button.addEventListener("click", function() {
    const textData = document.getElementById('text-to-speak').value;
    playText(textData);
  });
}



function playText(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  var getPhoto = document.querySelector("img");
  const selectedOption = document.getElementById('voice-select').selectedOptions[0].getAttribute('data-name');
  
  const voices = synth.getVoices(); // Moved inside playText function
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      console.log("found");
      utterThis.voice = voices[i];
    }
  }

  // Event listener for when speech synthesis starts
  utterThis.addEventListener(synth.speaking === true, () => {
    getPhoto.src = "assets/images/smiling-open.png";
  });

  // Event listener for when speech synthesis ends
  utterThis.addEventListener(synth.speaking === false, () => {
    getPhoto.src = "assets/images/smiling.png"; // Change to the path of your other image
  });

    // Event listener for when speech synthesis starts
    utterThis.onstart = () => {
      getPhoto.src = "assets/images/smiling-open.png";
    };
  
    // Event listener for when speech synthesis ends
    utterThis.onend = () => {
      getPhoto.src = "assets/images/smiling.png"; // Change to the path of your other image
    };
  


  
  synth.speak(utterThis);
  

  // inputTxt.blur(); // inputTxt is not defined, comment it out
}
