let welcomeActive = true;

const AVAILABLE_YEARS = ["2023", "2024"]

function toggleMenu() {
    let gearDiv = document.getElementById("settings-gear");
    if (gearDiv.classList.contains("wait-animation")) {
        gearDiv.classList.remove("wait-animation");
        gearDiv.classList.add("menu-idle");
    } else {
        gearDiv.classList.add("wait-animation");
        gearDiv.classList.remove("menu-idle");
    }

    let welcomePopover = document.getElementById("menu-welcome");
    let menuPopover = document.getElementById("menu-settings");

    if (welcomeActive) {
        welcomePopover.classList.add("off-left");
        menuPopover.classList.remove("off-right");
        welcomeActive = false;
    } else {
        welcomePopover.classList.remove("off-left");
        menuPopover.classList.add("off-right");
        welcomeActive = true;
    }
}

function nextYear() {
    let textRoot = document.getElementById("menu-version");
    let artRoot = document.getElementById("menu-version-art");
    let newIdx = (AVAILABLE_YEARS.indexOf(textRoot.firstElementChild.textContent) + 1) % AVAILABLE_YEARS.length;

    textRoot.firstElementChild.textContent = AVAILABLE_YEARS[newIdx];
    textRoot.dataset.version = newIdx;

    updateMessageVersion()

    artRoot.className = `menu-version-${AVAILABLE_YEARS[newIdx]}`
}

function lastYear() {
    let textRoot = document.getElementById("menu-version");
    let artRoot = document.getElementById("menu-version-art");
    let rawIdx = (AVAILABLE_YEARS.indexOf(textRoot.firstElementChild.textContent) - 1);
    let newIdx = (rawIdx < 0)
        ? (rawIdx + AVAILABLE_YEARS.length) % AVAILABLE_YEARS.length
        : rawIdx % AVAILABLE_YEARS.length;
    textRoot.firstElementChild.textContent = AVAILABLE_YEARS[newIdx];
    textRoot.dataset.version = newIdx;

    updateMessageVersion()

    artRoot.className = `menu-version-${AVAILABLE_YEARS[newIdx]}`
}