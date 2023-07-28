//["physique", "foudre", "feu", "eau", "soins"]

let attaque = {
    "nom" : "attaque",
    "type" : 0,
    "bonusAttaque" : 0,
    "bonusDefense" : 0,
    "randomPower" : 6,
    "soins" : 0
}

let coupDeFoudre = {
    "nom" : "coup de foudre",
    "type" : 1,
    "bonusAttaque" : 0,
    "bonusDefense" : 0,
    "randomPower" : 10,
    "soins" : 0
}

let tonnerre = {
    "nom" : "tonnerre",
    "type" : 1,
    "bonusAttaque" : 7,
    "bonusDefense" : -5,
    "randomPower" : 4,
    "soins" : 0
}

let souffle = {
    "nom" : "souffle",
    "type" : 2,
    "bonusAttaque" : 2,
    "bonusDefense" : 0,
    "randomPower" : 9,
    "soins" : 0
}

let pique = {
    "nom" : "piqué",
    "type" : 0,
    "bonusAttaque" : 0,
    "bonusDefense" : 3,
    "randomPower" : 3,
    "soins" : 0
}

let grignotage = {
    "nom" : "grignotage",
    "type" : 3,
    "bonusAttaque" : 0,
    "bonusDefense" : 0,
    "randomPower" : 4,
    "soins" : 4
}

let coupDeQueue = {
    "nom" : "Coup de queue",
    "type" : 3,
    "bonusAttaque" : 4,
    "bonusDefense" : -2,
    "randomPower" : 5,
    "soins" : 0
}

let charge = {
    "nom" : "charge",
    "type" : 3,
    "bonusAttaque" : -4,
    "bonusDefense" : -2,
    "randomPower" : 12,
    "soins" : 0
}

let sautDeLaMort = {
        "nom" : "saut de la mort",
        "type" : 0,
        "bonusAttaque" : 8,
        "bonusDefense" : -4,
        "randomPower" : 6,
        "soins" : -20
    
}

let morsure = {
        "nom" : "morsure",
        "type" : 0,
        "bonusAttaque" : 4,
        "bonusDefense" : -2,
        "randomPower" : 8,
        "soins" : 0
}

let soins = {
        "nom" : "soins",
        "type" : 4,
        "bonusAttaque" : 0,
        "bonusDefense" : 4,
        "randomPower" : 0,
        "soins" : 6
}

export let powerList = [attaque, coupDeFoudre, tonnerre, souffle, pique, grignotage, coupDeQueue, charge, sautDeLaMort, morsure, soins]