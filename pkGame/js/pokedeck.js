import { powerList } from "./powerList.js"

//[attaque, coupDeFoudre, tonnerre, souffle, pique, grignotage, coupDeQueue, charge, sautDeLaMort, morsure, soins]
let pikachu = {
    "nom" : "Pikachu",
    "element" : "foudre",
    "attaque" : 12,
    "defense" : 10,
    "vie" : 20,
    "sprites" : ["./pkGame/assets/sprites/pikDef.png", "./pkGame/assets/sprites/pikHurt.png", "./pkGame/assets/sprites/pikDown.png"],
    "resistances" : {
        "physique" : 0,
        "foudre" : 5,
        "feu" : -7,
        "eau" : 0,
        "soins" : 100
    },
    "powers" : [powerList[0], powerList[1], powerList[2]]
}

let dracaufeu = {
    "nom" : "Dracaufeu",
    "element" : "feu",
    "attaque" : 14,
    "defense" : 7,
    "vie" : 25,
    "sprites" : ["./pkGame/assets/sprites/dracDef.png", "./pkGame/assets/sprites/dracHurt.png", "./pkGame/assets/sprites/dracDown.png"],
    "resistances" : {
        "physique" : 0,
        "foudre" : 0,
        "feu" : 4,
        "eau" : -6,
        "soins" : 100
    },
    "powers" : [powerList[0], powerList[3], powerList[4]]
}

let keunotor = {
    "nom" : "Keunotor",
    "element" : "eau",
    "attaque" : 10,
    "defense" : 12,
    "vie" : 20,
    "sprites" : ["./pkGame/assets/sprites/keuDef.png", "./pkGame/assets/sprites/keuHurt.png", "./pkGame/assets/sprites/keuDown.png"],
    "resistances" : {
        "physique" : 0,
        "foudre" : -3,
        "feu" : -3,
        "eau" : 5,
        "soins" : 100
    },
    "powers" : [powerList[0], powerList[5], powerList[6]]
}

let tortank = {
    "nom" : "Tortank",
    "element" : "eau",
    "attaque" : 9,
    "defense" : 14,
    "vie" : 30,
    "sprites" : ["./pkGame/assets/sprites/torDef.png", "./pkGame/assets/sprites/torHurt.png", "./pkGame/assets/sprites/torDown.png"],
    "resistances" : {
        "physique" : 0,
        "foudre" : -8,
        "feu" : -3,
        "eau" : 2,
        "soins" : 100
    },
    "powers" : [powerList[0], powerList[7], powerList[8]]
}

let rattata = {
    "nom" : "Rattata",
    "element" : "physique",
    "attaque" : 12,
    "defense" : 7,
    "vie" : 25,
    "sprites" : ["./pkGame/assets/sprites/ratDef.png", "./pkGame/assets/sprites/ratHurt.png", "./pkGame/assets/sprites/ratDown.png"],
    "resistances" : {
        "physique" : 0,
        "foudre" : 2,
        "feu" : -3,
        "eau" : -2,
        "soins" : 100
    },
    "powers" : [powerList[0], powerList[9], powerList[10]]
}

export let pokeList = [pikachu, dracaufeu, keunotor, tortank, rattata]




