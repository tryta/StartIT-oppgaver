function createNewGoal() {
    header.innerHTML = '<h1>Nytt Mål</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('createNewGoal');
    content.innerHTML = `
    <div style="align-self: center">
        Opprett et nytt mål:
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button>Tilbake</button> <button>Lagre</button> <button>Neste</button</div>
    `;
}