function getData() {
  fetch('https://valorant-api.com/v1/agents')
    .then(response => response.json())
    .then(data => {
      const listAgents = document.getElementById('list-agents')
      console.log(data)
      data.data.forEach(element => {
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