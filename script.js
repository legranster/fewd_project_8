const users = [];
const directory = document.getElementById('directory');

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then((myJson) => {
      for(let i = 0; i < myJson.results.length; i++){
        users.push(myJson.results[i]);
      }
  })

//   users.forEach(element => console.log(element));

for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}


// let html = '<div class="userCard">';
// html+= `<h2>User Goes Here</h2>`;
// html += '</div>';
// directory.innerHTML = html;