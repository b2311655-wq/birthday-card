const diveButton = document.getElementById("diveButton");
const ocean = document.getElementById("ocean");

diveButton.addEventListener("click", function() {
    ocean.scrollIntoView({
        behavior: "smooth"
    });
});


const shellButton = document.getElementById("shellButton");
const birthday = document.getElementById("birthday");

shellButton.addEventListener("click", function() {
    birthday.scrollIntoView({
        behavior: "smooth"
    });
});


const blowButton = document.getElementById("blowButton");
const message = document.getElementById("message");

blowButton.addEventListener("click", function() {
    message.scrollIntoView({
        behavior: "smooth"
    });
});

const fish = document.querySelectorAll(".fish");

fish.forEach(function(fish) {

    fish.addEventListener("click", function() {

        fish.classList.add("paused");

        setTimeout(function() {
            fish.classList.remove("paused");
        }, 2000);

    });

});