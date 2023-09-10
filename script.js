// creates a new instance of the SpeechSynthesisUtterance object
let speech=new SpeechSynthesisUtterance();

// array will be used to store the available voices on the user's device.
let voices= [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
     voices = window.speechSynthesis.getVoices();
    //  sets the voice of the SpeechSynthesisUtterance object to the first voice in the voices array. This is the default voice.
     speech.voice=voices[0];

     voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",() => {
     speech.text=document.querySelector("textarea").value;
     window.speechSynthesis.speak(speech);
    });