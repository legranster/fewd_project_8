const users = [];
const directory = document.getElementById('directory');

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then((myJson) => {
      for(let i = 0; i < myJson.results.length; i++){
        users.push(myJson.results[i]);
      }
  });

  users.forEach(element => console.log(element));
