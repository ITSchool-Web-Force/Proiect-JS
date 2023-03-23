window.addEventListener("load", function() {
    var age = prompt("You need to specify your age");

    if (age === null || age === ` ` || isNaN(age)) {
        alert("You need to enter a valid number to enter this website");
        window.location.href = `about:blank`;
    } else if (age < 18) {
        alert("Sorry, you need to be 18+ to enter this website");
        window.location.href = `about:blank`;
    } else {
    }
})