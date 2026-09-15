/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message) qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des 
 * astérisques 
 * de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS * et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let motsInterdits = ["idiot", "noob", "nul"]

function filtrerMessage(message) {
  let resultat = message

  for (let mot of motsInterdits) {
    let motMinuscule = mot.toLowerCase()
    let messageMinuscule = resultat.toLowerCase()

    if (messageMinuscule.includes(motMinuscule)) {
      let index = messageMinuscule.indexOf(motMinuscule)
      let avant = resultat.slice(0, index)
      let apres = resultat.slice(index + mot.length)
      resultat = avant + "*" + apres;
    }
  }

  return resultat;
}

console.log(filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!"))   

          
