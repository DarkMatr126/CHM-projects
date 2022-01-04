let itmSlt = 1;
let itmNum = 5;

window.addEventListener("keydown", function(event) {
    if (event.which === 37 && itmSlt > 1) { //Left Arrow - Left
        itmSlt--;

        document.getElementById(`lbl${itmSlt}`).style.display = "block";
        document.getElementById(`lbl${itmSlt + 1}`).style.display = "none";

        document.getElementById(`date${itmSlt}`).style.fontWeight = "900";
        document.getElementById(`date${itmSlt + 1}`).style.fontWeight = "400";
  
    } else if (event.which === 39 && itmSlt < itmNum) { //Right Arrow - Right
        itmSlt++;

        document.getElementById(`lbl${itmSlt}`).style.display = "block";
        document.getElementById(`lbl${itmSlt - 1}`).style.display = "none";

        document.getElementById(`date${itmSlt}`).style.fontWeight = "900";
        document.getElementById(`date${itmSlt - 1}`).style.fontWeight = "400";
    } else if (event.which === 65 && itmSlt > 1) { //A - Left
        itmSlt--;

        document.getElementById(`lbl${itmSlt}`).style.display = "block";
        document.getElementById(`lbl${itmSlt + 1}`).style.display = "none";

        document.getElementById(`date${itmSlt}`).style.fontWeight = "900";
        document.getElementById(`date${itmSlt + 1}`).style.fontWeight = "400";
  
    } else if (event.which === 68 && itmSlt < itmNum) { //D - Right
        itmSlt++;

        document.getElementById(`lbl${itmSlt}`).style.display = "block";
        document.getElementById(`lbl${itmSlt - 1}`).style.display = "none";

        document.getElementById(`date${itmSlt}`).style.fontWeight = "900";
        document.getElementById(`date${itmSlt - 1}`).style.fontWeight = "400";
    }
});

function ArwClk(a) {
    if (a === "L" && itmSlt > 1) {
        itmSlt--;

        document.getElementById(`lbl${itmSlt}`).style.display = "block";
        document.getElementById(`lbl${itmSlt + 1}`).style.display = "none";

        document.getElementById(`date${itmSlt}`).style.fontWeight = "900";
        document.getElementById(`date${itmSlt + 1}`).style.fontWeight = "400";

    } else if (a === "R" && itmSlt < itmNum) {
        itmSlt++;

        document.getElementById(`lbl${itmSlt}`).style.display = "block";
        document.getElementById(`lbl${itmSlt - 1}`).style.display = "none";

        document.getElementById(`date${itmSlt}`).style.fontWeight = "900";
        document.getElementById(`date${itmSlt - 1}`).style.fontWeight = "400";
    }
}