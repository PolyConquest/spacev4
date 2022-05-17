// -------------------------------
// Fichier généré automatiquement par polyconquest :
// Veuillez utiliser ce fichier pour envoyer votre code
// -------------------------------

// Reads the data of the game 
const content = JSON.parse(readline());
/* graph = {
    planets : [
        {
            id:number,
            name: string,
            position: {x: number, y: number}
        },...
    ],
    paths : [
        {
            src: 1, // id of the planet
            dest: 0, // id of the planet
            length :  number // path length
        },...
    ],
    startingPoint: number : id of the planet,
    endPoints : number[] ids of the planets
}
*/
const graph = content.graph; 
// carburant : number
const carburant = content.carburant;

// move the ship from the planet 1 to the planet 2
console.log("move 1 0");