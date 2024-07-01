function showNav() {
    mobileNav.style.display = "flex";
    xBtn.style.display = "block";
    hamburgerBtn.style.display = "none";
}

function hideNav() {
    mobileNav.style.display = "none";
    xBtn.style.display = "none";
    hamburgerBtn.style.display = "block";
}

function prepReport() {
    console.log("Clicked Submit");

    body = "Hi "+fnameTxt.value+"!"
    body = body+"\n"+"Thanks for using our Chop-N-Drop estimator tool. This is an automatically generated email with your estimated cost. Send this to us, and we'll reach out to you to arrange your purchase. If you'd like to leave an additional message please insert it below."
    // body = body+"\n"+
    body=encodeURIComponent(body);
    window.open('mailto:test@example.com?subject=subject&body='+body);
}

function resetForm() {
    console.log("Clicked Reset");
    fnameTxt.value = "";
    lnameTxt.value = "";
    linfeetInt.value = "";
    inCornerInt.value = "";
    outCornerInt.value = "";
    endCapInt.value = "";
    downspoutInt.value = "";
    elbowInt.value = "";
    dropInt.value = "";
    leafguardBool.checked = false

    linearfeet = 0;
    insideCorners = 0;
    outsideCorners = 0;
    endCaps = 0;
    downSpouts = 0;
    elbows = 0;
    drops = 0;
    reCalculate()
}

function reCalculate() {
    console.log("Recalculating Total...");
    linearFootageTotal = linearfeet*gutter10ftCost;
    insideCornerTotal = insideCorners*insideCornerCost;
    outsideCornerTotal = outsideCorners*outsideCornerCost;
    endCapTotal = endCaps*endCapCost;
    downSpoutTotal = downSpouts*downspoutCost;
    elbowTotal = elbows*elbowCost;
    dropTotal = drops*dropCost;
    console.log(leafguard)
    if (leafguard) {
        console.log("leafguard is checked")
        leafguardTotal = linearfeet*leafguardCost;
    } else {
        console.log("leafguard is not checked")
        leafguardTotal = 0
    }

    totalCost = linearFootageTotal+insideCornerTotal+outsideCornerTotal+endCapTotal+downSpoutTotal+elbowTotal+dropTotal+leafguardTotal
    console.log("Total is: "+totalCost)
    updateFeedback()
}

function updateFeedback() {
    console.log("updateFeedback!")
    linearFootageRpt.innerText = linearfeet + " ft of Gutter - $" + linearFootageTotal.toFixed(2);
    insideCornerRpt.innerText = insideCorners + " Inside Corners - $" + insideCornerTotal.toFixed(2);
    outsideCornerRpt.innerText = outsideCorners + " Outside Corners - $" + outsideCornerTotal.toFixed(2);
    endCapRpt.innerText = endCaps + " End Caps - $" + endCapTotal.toFixed(2);
    downSpoutRpt.innerText = (downSpouts*10) + " ft of Downspout - $" + downSpoutTotal.toFixed(2);
    elbowRpt.innerText = elbows + " Elbows - $" + elbowTotal.toFixed(2);
    dropRpt.innerText = drops + " Drops - $" + dropTotal.toFixed(2);
    if (leafguard) {
        leafguardRpt.innerText = linearfeet + " ft of Leafguard - $" + linearFootageTotal.toFixed(2);
    } else {
        leafguardRpt.innerText = 0 + " ft of Leafguard - $0.00";
    }
    totalRpt.innerText = "Total: $" + totalCost.toFixed(2)
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
    // nav elements
    hamburgerBtn = document.getElementById("hamburgerDiv");
    xBtn = document.getElementById("xDiv");
    mobileNav = document.getElementById("mobileNav");

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
    totalRpt = document.getElementById("totalRpt");

    // Event Handling

    hamburgerBtn.addEventListener("click", showNav);
    xBtn.addEventListener("click", hideNav)

    fnameTxt.addEventListener("input", () => {
        firstName = fname.value;
    });
    lnameTxt.addEventListener("input", () => {
        lastName = lnameTxt.value;
    });
    linfeetInt.addEventListener("input", () => {
        if (linfeetInt.value == "") {
            linearfeet = 0;
        } else {
            linearfeet = linfeetInt.value;    
        }
        reCalculate();
    });
    inCornerInt.addEventListener("input", () => {
        if (inCornerInt.value == "") {
            insideCorners = 0;
        } else {
            insideCorners = inCornerInt.value;
        }
        reCalculate();
    });
    outCornerInt.addEventListener("input", () => {
        if (outCornerInt.value == "") {
            outsideCorners = 0;
        } else {
            outsideCorners = outCornerInt.value;
        }
        reCalculate();
    });
    endCapInt.addEventListener("input", () => {
        if (endCapInt.value == "") {
            endCaps = 0;
        } else {
            endCaps = endCapInt.value;
        }
        reCalculate();
    });
    downspoutInt.addEventListener("input", () => {
        if (downspoutInt.value == "") {
            downSpouts = 0;
        } else {
            downSpouts = downspoutInt.value;
        }
        reCalculate();
    });
    elbowInt.addEventListener("input", () => {
        if (elbowInt.value == "") {
            elbows = 0;
        } else {
            elbows = elbowInt.value;
        }
        reCalculate();
    });
    dropInt.addEventListener("input", () => {
        if (dropInt.value == "") {
            drops = 0;
        } else {
            drops = dropInt.value;
        }
        reCalculate();
    });
    leafguardBool.addEventListener("click", () => {
        leafguard = leafguardBool.checked;
        reCalculate();
    });
    
    submitBtn.addEventListener("click", prepReport);
    resetBtn.addEventListener("click", resetForm);
}


main();