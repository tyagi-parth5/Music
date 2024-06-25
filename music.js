alert('Click on icon to play sound or press alphabet written over them to hear sound')
for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case "h":
            var harmonium = new Audio('./sounds/harmonium.mp3');
            harmonium.play();
            break;
        case "t":
            var tabla = new Audio('./sounds/tabla.mp3');
            tabla.play();
            break;
        case "f":
            var flute = new Audio('./sounds/flute.mp3');
            flute.play();
            break;
        case "d":
            var dholak = new Audio('./sounds/dholak.mp3');
            dholak.play();
            break;
        case "s":
            var sitar = new Audio('./sounds/sitar.mp3');
            sitar.play();
            break;
        case "m":
            var mridangam = new Audio('./sounds/mridangam.mp3');
            mridangam.play();
            break;
        default:
            console.log("Invalid Choice By user");

    }
}