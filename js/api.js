function getAgents() {
  fetch('https://valorant-api.com/v1/agents')
    .then(response => response.json())
    .then(agents => {
      const listAgents = document.getElementById('list-agents')
      agents.data.forEach(element => {
        if(element.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"){
          const itemAgent = document.createElement('li')
          itemAgent.classList.add('item-agent')
          itemAgent.classList.add(element.displayName)
          itemAgent.addEventListener('click', item => {
            const painelAgents = document.getElementById('painel-agent')
            painelAgents.style.backgroundImage = "url('" + element.background + "')"

            const imageAgents = document.getElementById('painel-img-agent')
            imageAgents.style.backgroundImage = "url('" + element.fullPortrait + "')"
          })
          listAgents.appendChild(itemAgent)
          
          const iconAgent = document.createElement('img')
          iconAgent.classList.add('icon-agent')
          iconAgent.src = element.displayIcon
          itemAgent.appendChild(iconAgent)

          const nameAgent = document.createElement('p')
          nameAgent.textContent = element.displayName
          itemAgent.appendChild(nameAgent)
        } else {
          console.log('Sova ruim')
        }
      });
    })
    .catch(error => {
      // Lide com erros
      console.error(error);
    });
}

function getSprays() {
  fetch('https://valorant-api.com/v1/sprays')
    .then(response => response.json())
    .then(sprays => {
      sprays.data.forEach(element => {
        const listSprays = document.getElementById('list-sprays')
        const itemSpray = document.createElement('li')
        itemSpray.classList.add('item-spray')

        const imageSpray = document.createElement('img')
        imageSpray.classList.add('spray')
        imageSpray.src = element.fullIcon
        imageSpray.style.width = '150px'
        
        itemSpray.appendChild(imageSpray)
        listSprays.appendChild(itemSpray)
      })
    });
}

function getRanks() {
  fetch('https://valorant-api.com/v1/competitivetiers')
  .then(response => response.json())
  .then(ranks => {
    console.log(ranks.data[4].tiers)
    ranks.data[4].tiers.forEach(element => {
      if(element != ranks.data[4].tiers[1] && element != ranks.data[4].tiers[2]) {
        const listRanks = document.getElementById('list-ranks')
        const itemRank = document.createElement('li')
        itemRank.classList.add('item-rank')

        const imageRank = document.createElement('img')
        imageRank.src = element.largeIcon
        imageRank.style.width = '150px'

        itemRank.appendChild(imageRank)
        listRanks.appendChild(itemRank)
      }
    })
  })
}

function getMaps() {
  fetch('https://valorant-api.com/v1/maps')
  .then(response => response.json())
  .then(maps => {
    maps.data.forEach(element => {
      if(element != maps.data[11]) {
        const listMaps = document.getElementById('list-maps')
        const itemMap = document.createElement('li')
        itemMap.classList.add('item-map')
        itemMap.style.textAlign = 'center'

        const nameMap = document.createElement('p')
        nameMap.textContent = element.displayName
        const imageMap = document.createElement('img')
        imageMap.src = element.displayIcon
        imageMap.style.width = '150px'

        itemMap.appendChild(nameMap)
        itemMap.appendChild(imageMap)
        listMaps.appendChild(itemMap)
      } else {
        console.log('The Range')
      }
    })
  })
}

function getGuns() {
  fetch('https://valorant-api.com/v1/weapons')
  .then(response => response.json()
  .then(guns => {
    console.log(guns.data)
    guns.data.forEach(element => {
      
    })
  }))
}

function switchCategorie(id) {
  const categorie = document.getElementById(id)
  const sectionsIds = ["maps", "agents", "ranks", "sprays"]
  for (let i = 0; i < sectionsIds.length; i++) {
    const idSection = document.getElementById(sectionsIds[i])
    if(idSection.classList != 'd-none') {
      idSection.classList.remove('d-block')
      idSection.classList.add('d-none')
    } else {}
  }
  if(categorie.classList == 'd-none') {
    categorie.classList.add('d-block')
    categorie.classList.remove('d-none')
  } else {
    categorie.classList.add('d-none')
    categorie.classList.remove('d-block')
  }
}