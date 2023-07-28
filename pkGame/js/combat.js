
export class Combat {
    arenaList = ['./pkGame/assets/arenas/arAut.png', './pkGame/assets/arenas/arCan.png', './pkGame/assets/arenas/arCer.png', './pkGame/assets/arenas/arCre.png', './pkGame/assets/arenas/arFor.png', './pkGame/assets/arenas/arRiv.png', './pkGame/assets/arenas/arTem.png', './pkGame/assets/arenas/arVag.png', './pkGame/assets/arenas/arVil.png']
    /**
     * L'objet combat permet de créer l'arène sur la page et de résoudre un combat entre 2 pokemon
     * 
     * @param {HTMLElement} element Block dans lequel s'affichera le jeu
     * @param {Object} pokemon1 
     * @param {Object} pokemon2 
     */
    constructor(element, pokemon1, pokemon2) {
        this.arena = element
        this.pok1 = pokemon1
        this.pok2 = pokemon2
    }

    generate() {
        let arenaNumber = Math.floor(Math.random()*this.arenaList.length)
        let arenaBlock = document.createElement('div')
        arenaBlock.setAttribute('class', 'arena')
        arenaBlock.style.backgroundImage = `url(${this.arenaList[arenaNumber]})`

        let playerPokemon = document.createElement('img')
        playerPokemon.setAttribute('class', 'playerPokemon')
        playerPokemon.setAttribute('src', this.pok1.sprites[0])
        playerPokemon.setAttribute('alt', this.pok1.nom)
        arenaBlock.appendChild(playerPokemon);
        this.plPic = playerPokemon

        let playerBar = document.createElement('div')
        playerBar.setAttribute('class', 'playerBar')
        let playerActuel = document.createElement('div')
        playerActuel.setAttribute('class', 'playerActuel')
        playerActuel.style.backgroundColor = "green"
        playerActuel.style.width = "100%"
        playerBar.appendChild(playerActuel)
        this.playerlifeBar = playerActuel
        arenaBlock.appendChild(playerBar)

        let advPokemon = document.createElement('img')
        advPokemon.setAttribute('class', 'advPokemon')
        advPokemon.setAttribute('src', this.pok2.sprites[0])
        advPokemon.setAttribute('alt', this.pok2.nom)
        arenaBlock.appendChild(advPokemon);
        this.advPic = advPokemon

        let advBar = document.createElement('div')
        advBar.setAttribute('class', 'advBar')
        let advActuel = document.createElement('div')
        advActuel.setAttribute('class', 'advActuel')
        advActuel.style.backgroundColor = "green"
        advActuel.style.width="100%"
        advBar.appendChild(advActuel)
        this.advlifeBar = advActuel
        arenaBlock.appendChild(advBar)

        /*let startButton = document.createElement('div')
        startButton.setAttribute('class', 'pkButton')
        startButton.innerHTML = "Combattre"
        startButton.addEventListener('click', this.resolution.bind(this))
        arenaBlock.appendChild(startButton)
        this.startButton = startButton*/

        let actionBar = document.createElement('div')
        actionBar.setAttribute('class', 'actionBar')
        this.actionBar = actionBar
        
        let actionButtons = []
        for(let i=0; i< this.pok1.powers.length; i++) {
            actionButtons[i] = document.createElement('div')
            actionButtons[i].setAttribute('class', 'actionButton')
            actionButtons[i].addEventListener('click', this.resolution.bind(this, this.pok1.powers[i]))
            actionButtons[i].innerHTML = this.pok1.powers[i].nom
            actionBar.appendChild(actionButtons[i])
        }

        let victoryMessage = document.createElement('div')
        victoryMessage.setAttribute('class', 'victoryMessage')
        this.arena.appendChild(victoryMessage)
        this.victoryMessage = victoryMessage
        
        this.arena.appendChild(arenaBlock)
        this.arena.appendChild(actionBar)



    }

    resolution(activePower) {

        let randomPower = activePower.usePower(this.pok1, this.pok2)
       
        if(this.pok1.isAlive && this.pok2.isAlive) {            
            this.actionBar.style.display = "none"
            this.pok1.attaquer(this.pok2, randomPower)
            this.pok2.etat(this.advlifeBar)
            this.pok1.etat(this.playerlifeBar)
            this.advPic.setAttribute('src', this.pok2.sprites[1])
            setTimeout(()=>{
                this.advPic.setAttribute('src', this.pok2.sprites[0])
                setTimeout(()=>{
                    this.pok2.attaquer(this.pok1)
                    this.pok1.etat(this.playerlifeBar)
                    this.plPic.setAttribute('src', this.pok1.sprites[1])
                    setTimeout(()=>{
                        this.plPic.setAttribute('src', this.pok1.sprites[0])
                        this.actionBar.style.display = "flex"
                        console.log(this.pok1, this.pok2)

                        if(!this.pok1.isAlive) {
                            let endPhrase = `${this.pok2.nom} a gagné`
                            this.plPic.setAttribute('src', this.pok1.sprites[2])
                            this.actionBar.style.display = "none"
                            this.victoryMessage.innerHTML = endPhrase
                            this.victoryMessage.style.opacity = 1
                            setTimeout(()=>{
                                this.victoryMessage.style.opacity = 0 
                            },3000)
                        } else if(!this.pok2.isAlive){
                            let endPhrase = `${this.pok1.nom} a gagné`
                            this.advPic.setAttribute('src', this.pok2.sprites[2])
                            this.actionBar.style.display = "none"
                            console.log(endPhrase)
                            this.victoryMessage.innerHTML = endPhrase
                            this.victoryMessage.style.opacity = 1
                            setTimeout(()=>{
                                this.victoryMessage.style.opacity = 0 
                            },5000)
                        }
                    },1000)
                },500)
            },1000)
            
        }
        
        

        
    }
}