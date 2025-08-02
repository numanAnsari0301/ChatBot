const recognition = new(window.webkitSpeechRecognition || window.SpeechRecognition);
recognition.lang = "en-US";
// console.log(recognition);
let button = document.querySelector(".listen_button");
// console.log(button);

button.addEventListener("click",()=>{
    function speak(text){
        let get = new SpeechSynthesisUtterance(text);
        get.rate = 1;
        get.pitch = 1;
        // get.voice = voices[2]; // voice index
        window.speechSynthesis.speak(get);
    }
    
    // concert text to voice
    function handlecommands(commands){
        if(commands.includes("open youtube"))
        {
            speak("opening youtube...");
            window.open("https://www.youtube.com/","_blank")
        }
        else if(commands.includes("open facebook"))
        {
            speak("opening facebook....");
            window.open("https://www.facebook.com/");
            // speak("facebook is opened");
        }
        else if(commands.includes("open Instagram"))
        {
            speak("opening Instagram...");
            window.open("https://www.instagram.com/","_blank")
            // speak("Instagram is opened");
        }
        else if(commands.includes("open github")){
            speak("opening github....");
            window.open("https://github.com/","_blank");
            // speak("Github is opened");
        }
        else{
            speak("Searching on Google....");
            window.open(`https://www.google.com/search?q=${commands}`,"_blank");
            speak("Here you can see the google result");
        }
        recognition.onend= ()=>{
            button.innerHTML = "Press to Start🎤";
            button.style.backgroundColor = " rgb(180, 180, 184)";
            recognition.continuous = true;
            recognition.interimResults = false;
            recognition.onend();
    
        }
    }
    // auto speak
    speak("welcome sir, I am your Al assistant,how can I help you");
    // to start recognition after 5000ms
    setTimeout(()=>{
        recognition.start();
        button.innerHTML = "Listening....";
        button.style.backgroundColor = "#18ce76";
    },3000)

    recognition.onresult = (event) => {
        let commands = event.results[0][0].transcript.toLowerCase();
        console.log(commands);
        handlecommands(commands);
    }
    
    recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    };

   
})
