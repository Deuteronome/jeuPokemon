import { Power } from "./pouvoir.js"

export class Pokemon {
    
    isAlive = true
    powers = []

    constructor(params) {
        
        this.nom = params["nom"]
        this.element = params["element"]
        this.attaqueBase = params["attaque"]
        this.defenseBase = params["defense"]
        this.vie = params["vie"]
        this.vieMax = params["vie"]
        this.sprites = params["sprites"]
        this.resistances = params["resistances"]
        params["powers"].forEach(element => {
            console.log(element)
            this.powers.push(new Power(element))
        })
    }

    attaquer(adversaire, randomPower=6) {
        if(this.isAlive) {
            const forceAttaque = Math.floor(Math.random()*randomPower+1)
            const degat = this.attaque + forceAttaque - adversaire.defense
            if(degat>0) {
                adversaire.blessure(degat)
            }
            
        } else {
            let condition = `${this.nom} est mort, il ne peux plus attaquer`
            console.log(condition)
        }
    }

    blessure(degat){
        if (degat>0) {
            this.vie -= degat
            if(this.vie<=0) {
                this.isAlive = false;
                this.vie = 0
            }
        }
    }

    etat(barVie) {
        let propor = (this.vie/this.vieMax)*100
        barVie.style.width = `${propor}%`

        if( propor < 75 && propor>25) {
            barVie.style.backgroundColor ="orange"
        } else if (propor < 25) {
            barVie.style.backgroundColor ="red"
        }
    }
        
}