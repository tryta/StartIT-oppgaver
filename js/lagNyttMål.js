var mainGoal;

function newGoal() {}

function lagNyttMål() {
    header.innerHTML = '<h1>Nytt Mål</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('lagNyttMål');
    content.innerHTML = `
    <div style="align-self: center">
        Opprett et nytt mål:
    </div>
    <div><textarea class="mainGoalInput"></textarea></div>
    <div><button onclick="showMainScreen()">Tilbake</button> <button onclick="showMainScreen()">Lagre og ferdig</button> <button>Nytt mål</button</div>
    `;
}

function mainextra() {
    var mainGoalInput = document.getElementById('mainGoalInput');
    mainGoal = mainGoalInput.value;

    mainextra.innerHTML = `
                <div class="overskrift back" onclick="newGoal()">←</div>
                Du har valgt dette som ditt mål: ${mainGoal}`;
}