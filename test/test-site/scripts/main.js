let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

document.querySelector("h1").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cyberpunk.png") {
        myImage.setAttribute("src", "images/Akila.jpg");
    } else {
        myImage.setAttribute("src", "images/cyberpunk.png");
    }
};

