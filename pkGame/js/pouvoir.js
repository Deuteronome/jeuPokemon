export class Power {
    typeList = ["physique", "foudre", "feu", "eau", "soins"]

    constructor(params) {
        this.nom = params["nom"]
        this.type = this.typeList[params["type"]]
        this.bonusAttaque = params["bonusAttaque"]
        this.bonusDefense = params["bonusDefense"]
        this.randomPower = params["randomPower"]
        this.soins = params["soins"]
    }

    usePower(plPok, advPok) {
        this.statUpdate(plPok, advPok)

        return this.randomPower
    }

    statUpdate(plPok, advPok) {
        plPok.attaque = plPok.attaqueBase + this.bonusAttaque
        plPok.defense = plPok.defenseBase + this.bonusDefense + plPok.resistances[advPok.element]
        advPok.attaque = advPok.attaqueBase
        advPok.defense = advPok.defenseBase + advPok.resistances[this.type]
                
        plPok.vie += this.soins
        if (plPok.vie>plPok.vieMax) {
            plPok.vie = plPok.vieMax
        } else if (plPok.vie<0) {
            plPok.vie = 0
        }
        
    }

    
}