const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(({ data }) => {
        let minionsCode = ''
        data.forEach(elm => minionsCode += `  <div class="character-info">
        <div class="id">Id:${elm.id}</div>
        <div class="name">Name:${elm.name}</div>
        <div class="occupation">Occupation:${elm.occupation}</div>
        <div class="cartoon">Cartoon:${elm.cartoon}</div>
        <div class="weapon">Weapon:${elm.weapon}</div>
      </div>`)
        document.querySelector('.characters-container').innerHTML = minionsCode
      })
      .catch(err => console.log(err))
  })


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('.operation input').value
    let minionsCode = ''

    function oneMinion(id) {
      charactersAPI
        .getOneRegister(id)
        .then(minion => {
          minionsCode += `  <div class="character-info">
        <div class="id">Id:${minion.id}</div>
        <div class="name">Name:${minion.name}</div>
        <div class="occupation">Occupation:${minion.occupation}</div>
        <div class="cartoon">Cartoon:${minion.cartoon}</div>
        <div class="weapon">Weapon:${minion.weapon}</div>
      </div>`
          document.querySelector('.characters-container').innerHTML = minionsCode
        })
        .catch(err => console.log(err))
    }
    oneMinion()
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    //   charactersAPI
    //     .createOneRegister('character-id')
    //     .then(({ data }) => {
    //       let minionsCode = ''
    //       data.forEach(elm => minionsCode += `  <div class="character-info">
    //       <div class="name">${elm.name}</div>
    //       <div class="occupation">${elm.occupation}</div>
    //       <div class="cartoon">${elm.cartoon}</div>
    //       <div class="weapon">${elm.weapon}</div>
    //     </div>`)
    //       document.querySelector('.characters-container').innerHTML = minionsCode
    //     })
    //     .catch(err => console.log(err))
    // })

  });
})
