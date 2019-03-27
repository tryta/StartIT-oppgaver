function showMyGoalsScreen() {
    header.innerHTML = '<h1>Mine mål</h1>';
    content.setAttribute('class', 'myGoalsContentGrid');
    content.innerHTML = `
      <div><button class="mainButton">Legg til oppgave</button></div>
      <div><button class="mainButton">Rediger</button></div>
      <div><button class="mainButton">Slett</button></div>
      <div><button class="mainButton" onclick="showEvaluateScreen()">Evaluer</button></div>
      <div><center><button >Tilbake</button></center></div>      
    `;
}
