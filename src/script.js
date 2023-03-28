document.addEventListener('load', () => {
    let menu = document.querySelector('.nav_menu');
    let menu_toggle = document.querySelector('.mobile-menu-icon');
    let menu_toggle_icon = document.querySelector('.mobile-menu-icon ion-icon');
    menu_toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menu.classList.contains('active') ?
            menu_toggle_icon.setAttribute('name', 'close-outline') :
            menu_toggle_icon.setAttribute('name', 'menu-outline');
    });
  
 });

  async function fetchPoints() {
     let points_wrapper = document.querySelector('.points-container');
     let loader = document.querySelector('.loader');
     let url = 'https://world-cup.codsfli.com/points.php';
     let data = await fetch(url);
     if (data.ok) {
         setTimeout(async() => {
                     loader.remove();
                     let response = await data.json();
                     response.map((groups) => {
                                 let sor = groups.teams.sort((a, b) => {
                                     return a.position - b.position;
                                 });
                                 points_wrapper.innerHTML += `
                 <div class="points-table">
   <h1 class="group-heading">${groups.group}</h1>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>MP</th>
        <th>L</th>
        <th>D</th>
        <th>W</th>
        <th>Pts</th>
      </tr>
    </thead>
    <tbody>
      ${sor
        .map(
          (team) => `
      <tr>
        <td>
          <div class="d-a">
            <img
              src="${team.flag}"
              alt="${team.Team}"
              class="team-flag"
            />
            <span>${team.flag
              .split('https://world-cup.codsfli.com/flag/')
              .join('')
              .split('.png')
              .join('')}</span>
          </div>
        </td>
        <td>${team.match_play}</td>
        <td>${team.loss}</td>
        <td>${team.draw}</td>
        <td>${team.win}</td>
        <td>${team.points}</td>
      </tr>
      `
        )
        .join('')}
    </tbody>
  </table>
</div>
                `;
      });
    }, 1000);
  }
}
fetchPoints();

const element = document.querySelector('.btn-primary');
element.addEventListener('mouseover', function() {
  element.style.backgroundColor = 'yellow';
});

const element1 = document.querySelector('.btn-primary');
element1.addEventListener('click', function() {
  let isOk = confirm("SOLD OUT");
  if (isOk) {
    element1.innerText = "Alright";
  } else {
    element1.innerText = "=(";
  }
})
