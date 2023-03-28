window.addEventListener("load", function() {
    if (!localStorage.getItem("agePromptShown")) {
        var age = prompt("You need to be 18+ to enter this website");

        if (age === null || age === ` ` || isNaN(age)) {
            alert("You need to enter a valid number to enter this website");
            window.location.href = `about:blank`;
        } else if (age < 18) {
            alert("Sorry, you need to be at least 18+ to enter this website");
            window.location.href = `about:blank`;
        } else {
            localStorage.setItem("agePromptShown", true);
        };
    }

    var audio = document.getElementById("myAudio");
    audio.muted = true;
    audio.autoplay = true;

    audio.addEventListener("canplaythrough", function() {
        audio.play();
    });

    document.addEventListener("keypress", function(event) {
        if (event.key === "M" || event.key === "m") {
            audio.muted = !audio.muted;
        }
    });
});
