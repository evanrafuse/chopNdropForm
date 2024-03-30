function prepReport() {
    console.log("Clicked Submit");
    // window.open('mailto:test@example.com?subject=subject&body=body');
}

function resetForm() {
    console.log("Clicked Reset");
}

function reCalculate() {
    console.log("Recalculating Total...")
}

function main() {
    console.log("Initiate JS");

    // variable refs
    firstName = ""
    lastName = ""
    linearfeet = 0
    insideCorners = 0
    outsideCorners = 0
    downSpouts = 0
    elbows = 0
    drops = 0
    leafguard = false

    // doc refs
    fnameTxt = document.getElementById("fname");
    lnameTxt = document.getElementById("lname");
    linfeetInt = document.getElementById("linfeet");
    inCornerInt = document.getElementById("inCorner");
    outCornerInt = document.getElementById("outCorner");
    downspoutInt = document.getElementById("downspout");
    elbowInt = document.getElementById("elbow");
    dropInt = document.getElementById("drop");
    leafguardBool = document.getElementById("leafguard");
    submitBtn = document.getElementById("submitBtn");
    resetBtn = document.getElementById("resetBtn");

    fnameTxt.addEventListener("input", () => {
        firstName = fname.value;
    });
    lnameTxt.addEventListener("input", () => {
        lastName = lnameTxt.value;
    });
    linfeetInt.addEventListener("input", () => {
        linearfeet = linfeetInt.value;
        reCalculate();
    });
    inCornerInt.addEventListener("input", () => {
        insideCorners = inCornerInt.value;
        reCalculate();
    });
    outCornerInt.addEventListener("input", () => {
        outsideCorners = outCornerInt.value;
        reCalculate();
    });
    downspoutInt.addEventListener("input", () => {
        downSpouts = downspoutInt.value;
        reCalculate();
    });
    elbowInt.addEventListener("input", () => {
        elbows = elbowInt.value;
        reCalculate();
    });
    dropInt.addEventListener("input", () => {
        drops = dropInt;
        reCalculate();
    });
    leafguardBool.addEventListener("input", () => {
        leafguard = leafguardBool.value;
        reCalculate();
    });
    
    submitBtn.addEventListener("click", prepReport);
    resetBtn.addEventListener("click", resetForm);
}


main();