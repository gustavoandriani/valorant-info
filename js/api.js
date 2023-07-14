function getMaps() {
  fetch('https://valorant-api.com/v1/maps')
  .then(response => response.json())
  .then(maps => {
    maps.data.forEach(element => {
      if(element != maps.data[11]) {
        const listMaps = document.getElementById('list-maps')
        const itemMap = document.createElement('div')
        itemMap.classList.add('item-map', 'bg-box', 'rounded-xl', 'md:w-48')
        itemMap.style.textAlign = 'center'

        const nameMap = document.createElement('p')
        nameMap.textContent = element.displayName
        const imageMap = document.createElement('img')
        imageMap.classList.add('mx-auto')
        imageMap.src = element.displayIcon
        imageMap.style.width = '150px'

        itemMap.appendChild(nameMap)
        itemMap.appendChild(imageMap)
        listMaps.appendChild(itemMap)
      } else {}
    })
  })
}

function getAgents() {
  fetch('https://valorant-api.com/v1/agents')
    .then(response => response.json())
    .then(agents => {
      const listAgents = document.getElementById('list-agents')
      agents.data.forEach(element => {
        if(element.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"){
          const itemAgent = document.createElement('div')
          itemAgent.classList.add('bg-box', 'p-2' , 'h-fit', 'text-center', 'rounded-xl', 'cursor-pointer', 'hover:bg-boxDark')
          itemAgent.classList.add(element.displayName)
          itemAgent.addEventListener('click', item => {
            const painelAgents = document.getElementById('painel-agent')
            painelAgents.style.backgroundImage = "url('" + element.background + "')"
            painelAgents.classList.add('bg-center', 'bg-contain', 'bg-no-repeat', 'w-80', 'h-72', 'md:w-full', 'md:h-full')

            const imageAgents = document.getElementById('painel-img-agent')
            imageAgents.style.backgroundImage = "url('" + element.fullPortrait + "')"
            imageAgents.classList.add('bg-center', 'bg-cover', 'w-full', 'h-full')
          })
          listAgents.appendChild(itemAgent)
          
          const iconAgent = document.createElement('img')
          iconAgent.classList.add('icon-agent')
          iconAgent.src = element.displayIcon
          itemAgent.appendChild(iconAgent)

          const nameAgent = document.createElement('p')
          nameAgent.textContent = element.displayName
          itemAgent.appendChild(nameAgent)
        }
      });
    });
}

function getRanks() {
  fetch('https://valorant-api.com/v1/competitivetiers')
  .then(response => response.json())
  .then(ranks => {
    ranks.data[4].tiers.forEach(element => {
      if(element != ranks.data[4].tiers[1] && element != ranks.data[4].tiers[2]) {
        const listRanks = document.getElementById('list-ranks')
        const itemRank = document.createElement('div')
        itemRank.classList.add('p-3','bg-box', 'rounded-xl')
        
        const nameRank = document.createElement('p')
        nameRank.textContent = element.tierName
        nameRank.classList.add('text-center')

        const imageRank = document.createElement('img')
        imageRank.src = element.largeIcon
        imageRank.style.width = '150px'
        imageRank.classList.add('mx-auto')

        itemRank.appendChild(imageRank)
        itemRank.appendChild(nameRank)
        listRanks.appendChild(itemRank)
      }
    })
  })
}

function getSprays() {
  fetch('https://valorant-api.com/v1/sprays')
    .then(response => response.json())
    .then(sprays => {
      sprays.data.forEach(element => {
        const listSprays = document.getElementById('list-sprays')
        const itemSpray = document.createElement('div')

        const imageSpray = document.createElement('img')
        imageSpray.classList.add('mx-auto')
        if (element.animationGif != null) {
          imageSpray.src = element.animationGif
        } else if (element.fullIcon != null) {
          imageSpray.src = element.fullIcon
        } else {
          imageSpray.src = element.displayIcon
        }
        imageSpray.style.width = '150px'

        const nameSpray = document.createElement('p')
        nameSpray.textContent = element.displayName
        nameSpray.classList.add('text-center')
        
        itemSpray.appendChild(imageSpray)
        itemSpray.appendChild(nameSpray)
        listSprays.appendChild(itemSpray)
      })
    });
}

function getGuns() {
  fetch('https://valorant-api.com/v1/weapons')
  .then(response => response.json())
  .then(guns => {
    console.log(guns.data)
    guns.data.forEach(element => {
      const standardGun = "Standard " + element.displayName
      const listGuns = document.getElementById('list-guns')

      const itemGun = document.createElement('div')
      itemGun.style.backgroundImage = "url(" + element.displayIcon + ")"
      itemGun.classList.add('bg-contain', 'bg-center', 'bg-no-repeat', 'h-32', 'md:w-full', 'md:h-48', 'bg-red-500', 'rounded-xl', 'text-center', 'cursor-pointer', 'hover:bg-red-600', 'md:mx-auto')
      itemGun.addEventListener('click', item => {
        const painelGuns = document.getElementById('painel-guns')
        painelGuns.style.backgroundImage = "url(" + element.displayIcon + ")"
        painelGuns.classList.add('w-full', 'h-36', 'md:h-48', 'p-10', 'bg-no-repeat', 'bg-center', 'bg-contain')

        const listSkinsGuns = document.getElementById('list-skins-guns')
        listSkinsGuns.remove()
        const painelListGuns = document.getElementById('painel-list-guns')
        const createdListSkinsGuns = document.createElement('div')
        createdListSkinsGuns.classList.add('grid', 'md:grid-cols-6', 'grid-cols-1', 'gap-4')
        createdListSkinsGuns.id = 'list-skins-guns'
        painelListGuns.appendChild(createdListSkinsGuns)
        
        element.skins.forEach(skin => {
          if(skin.displayIcon != null) {
            const itemSkinsGuns = document.createElement('div')
            const imageSkinGun = document.createElement('img')
            const nameSkinGun = document.createElement('p')
            if(skin.displayName !== standardGun && skin.displayName !== "Random Favorite Skin") {
              itemSkinsGuns.id = 'itemSkin'
              itemSkinsGuns.classList.add('w-full', 'mb-5', 'p-5')

              nameSkinGun.classList.add('text-center')
              console.log(standardGun)
            
              imageSkinGun.src = skin.displayIcon
              nameSkinGun.textContent = skin.displayName

              itemSkinsGuns.appendChild(nameSkinGun)
              itemSkinsGuns.appendChild(imageSkinGun)
              createdListSkinsGuns.appendChild(itemSkinsGuns)
            } 
            else {
              skin.chromas.some(skinsChroma => {
                if(skinsChroma.displayIcon != null) {
                    imageSkinGun.src = skinsChroma.displayIcon
                    return true
                } else {
                  skin.levels.some(skinsLevels => {
                    if(skinsLevels.displayIcon != null) {
                      imageSkinGun.src = skinsLevels.displayIcon
                      return true
                    }
                  })
                }
              })
            }
          } 
          
        })

        painelGuns.appendChild(imageGuns)
      })

      const nameGun = document.createElement('p')
      nameGun.textContent = element.displayName
      nameGun.classList.add('text-lg')

      itemGun.appendChild(nameGun)
      listGuns.appendChild(itemGun)
    })
  })
}

function switchCategorie(id) {
  const categorie = document.getElementById(id)
  const sectionsIds = ["maps", "agents", "ranks", "sprays", "guns"]
  for (let i = 0; i < sectionsIds.length; i++) {
    const idSection = document.getElementById(sectionsIds[i])
    if(idSection.classList != 'd-none') {
      idSection.classList.add('d-none')
    } else {}
  }
  if(categorie.classList == 'd-none') {
    categorie.classList.remove('d-none')
    categorie.classList.add('d-block')
  } else {
    categorie.classList.remove('d-block')
  }
  
}