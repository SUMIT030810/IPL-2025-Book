const images = [
    "images/ipl team.jpg", "images/ipl logo.jpg", "images/ipl MI squad.jpg", 
     "images/ipl CSK squad.jpg", "images/ipl KKR squad.jpg",
    "images/ipl SRH squad.jpg", "images/ipl RR1squad.jpg", "images/ipl GT squad.jpg",
    "images/ipl LSG squad.jpg", "images/ipl RCB squad.jpg", "images/ipl DC squad.jpg","images/ipl pbks1 squad.jpg",
    "images/ipl schedule 1.jpg", "images/ipl schedule 2.jpg"
];

const colors = [
    "#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF", "#B9FBC0",
    "#FF9CEE", "#AFCBFF", "#A2D2FF", "#FFDEB4", "#FFECB3", "#D8F3DC",
    "#FFD6A5", "#C1E1C1"
];

let index = 0;

document.getElementById("changeButton").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.body.style.backgroundColor = colors[index];
    document.getElementById("displayImage").src = images[index];
});

//adding zoom effect

let img = document.getElementById("displayImage");
let scale = 1; // Initial zoom scale

const imageElement=document.getElementById("displayImage");
imageElement.addEventListener("click", function() {
    if (imageElement.classList.contains("zoomed")) {
        imageElement.classList.remove("zoomed"); // Zoom out
    } else {
        imageElement.classList.add("zoomed"); // Zoom in
    }
});


/*/img.addEventListener("click",function zoomin() {
    if (scale < 3) { // Set a max zoom limit (3x)
        scale += 0.2;
        img.style.transform = `scale(${scale})`;
    }
});

img.addEventListener("click", function zoomout() {
    if (scale > 1) { // Prevent shrinking below original size
        scale -= 0.2;
        img.style.transform = `scale(${scale})`;
    }
});
*/

