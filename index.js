console.log("     ▄▄        ▄                                      ▄▄        ▄");
console.log(" ▄▄▄▄██▄▄▄▄    ██   ▄                             ▄▄▄▄██▄▄▄▄    ██   ▄");
console.log(" █        █ ▄▄▄███▀▀             ▄▄█   ▀▄    ▄▀   █        █ ▄▄▄███▀▀             ▄▄█");
console.log(" ▀        █     ██   ▄▄       ▄▄██▀▀     ▀▄▄▀     ▀        █     ██   ▄▄       ▄▄██▀▀");
console.log("          █   ▄▄███▀▀▀   ▄▄▄████         ▄▀▀▄              █   ▄▄███▀▀▀   ▄▄▄████");
console.log("       ▄▄█▀  ▀▀  ██      ▀▀▀  ██       ▄▀    ▀▄        ▄▄█▀  ▀▀  ██      ▀▀▀  ██");
console.log("     ▀▀▀▀         ██          ██                     ▀▀▀▀         ██          ██");



// blink
var blink_speed = 900; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
        var ele = document.getElementById('blink');
        ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

function toggleTheme() {
        colorchange("white-text");

        colorchange("white-head0");
        colorchange("white-head1");
        colorchange("white-head2");
        colorchange("white-head3");
        colorchange("white-head4");

        var element = document.body;
        element.classList.toggle("dark-mode");
        console.log("Toggled Theme");
} 

function colorchange(id) {
        var background = document.getElementById(id).style.color;
        if (background == "rgb(0, 0, 0)") {
                document.getElementById(id).style.color = "#ffffff";
        } else {
                document.getElementById(id).style.color = "rgb(0,0,0)";
        }
}
