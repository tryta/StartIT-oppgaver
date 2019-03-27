function showMainScreen() {
    header.innerHTML = '<h1>Hovedside</h1>';
    content.setAttribute('class', 'mainPageContentGrid');
    content.innerHTML = `
    <button class="mainGoals" onclick="showMyGoalsScreen()">
      bla bla bla
    </button>
      <div><button class="mainButton" onclick="ukentligEvaluering()">Ukentlig evaluering</button></div>
      <div><button class="mainButton" onclick="dagligEvaluering()">Daglig evaluering</button></div>
      <div><button class="mainButton" onclick="createNewGoal()">Nytt mål</button></div>
      <div><button class="mainButton" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="mainButton" onclick="kalender()">Kalender</button></div>
    `;
}
