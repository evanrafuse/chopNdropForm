function prepReport() {
    console.log("Clicked Submit");
    // window.open('mailto:test@example.com?subject=subject&body=body');
}

function resetForm() {
    console.log("Clicked Reset");
}

function reCalculate() {
    console.log("Recalculating Total...");
    linearFootageRpt.innerText = linearfeet + " ft of gutter - $" + (linearfeet*gutter10ftCost);
    insideCornerRpt.innerText = insideCorners + " inside corners - $" + (insideCorners*insideCornerCost);
    outsideCornerRpt.innerText = outsideCorners + " outside corners - $" + (outsideCorners*outsideCornerCost);
    endCapRpt.innerText = endCaps + " end caps - $" + (endCapInt*endCapCost);
}

function main() {
    console.log("Initiate JS");

    // Cost constants
    gutter10ftCost = 5.00
    insideCornerCost = 2.00
    outsideCornerCost = 2.00
    endCapCost = 1.00
    downspoutCost = 5.00
    elbowCost = 2.00
    dropCost = 2.00
    leafguardCost = 5.00

    // variable refs
    firstName = ""
    lastName = ""
    linearfeet = 0
    insideCorners = 0
    outsideCorners = 0
    endCaps = 0
    downSpouts = 0
    elbows = 0
    drops = 0
    leafguard = false

    // ~~ doc refs ~~
    // form elements
    fnameTxt = document.getElementById("fname");
    lnameTxt = document.getElementById("lname");
    linfeetInt = document.getElementById("linfeet");
    inCornerInt = document.getElementById("inCorner");
    outCornerInt = document.getElementById("outCorner");
    endCapInt = document.getElementById("endCap");
    downspoutInt = document.getElementById("downspout");
    elbowInt = document.getElementById("elbow");
    dropInt = document.getElementById("drop");
    leafguardBool = document.getElementById("leafguard");
    submitBtn = document.getElementById("submitBtn");
    resetBtn = document.getElementById("resetBtn");
    // report elements
    linearFootageRpt = document.getElementById("linearFootageRpt");
    insideCornerRpt = document.getElementById("insideCornerRpt");
    outsideCornerRpt = document.getElementById("outsideCornerRpt");
    endCapRpt = document.getElementById("endCapRpt");
    downSpoutRpt = document.getElementById("downSpoutRpt");
    elbowRpt = document.getElementById("elbowRpt");
    dropRpt = document.getElementById("dropRpt");
    leafguardRpt = document.getElementById("leafguardRpt");

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
    endCapInt.addEventListener("input", () => {
        endCaps = endCapInt.value;
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