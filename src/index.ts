import { CLI } from "./CLI";
import inquirer from "inquirer"


const startupParts = [
  "   __________  ____  ___       ____  ___    _   ____ __",
  "  / ____/ __ \\/ __ \\/   |     / __ )/   |  / | / / //_/",
  " / /   / / / / / / / /| |    / __  / /| | /  |/ / ,<   ",
  "/ /___/ /_/ / /_/ / ___ |   / /_/ / ___ |/ /|  / /| |  ",
  "\\____/\\____/_____/_/  |_|  /_____/_/  |_/_/ |_/_/ |_|",
  "",
  "La banque de demain, aujourd'hui.",
  "",
];
console.log(startupParts.join("\n"));

// TODO
const login = await inquirer.prompt([
  {
    type: 'number',
    name: 'string',
    message: 'entrez votre code pin'
  }
]);
console.log("Votre code confidentiel est : " + login.type + login.name + login.message);

const account = await  inquirer.prompt([
  {
    choices:[
      "Déposer de l'argent",
      "Retirer de l'argent",
      "Consulter de l'historique"
    ]
  }
])

const cli = new CLI([
  {
    answer: () => {

    },
    title: "Créer un compte",
    value: "create",
    action: () => {
      console.log("Création d'un compte");
      account.choices;
    }
  }
]);

cli.menu();
