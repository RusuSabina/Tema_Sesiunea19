/* 1. Creeaza o clasa care va fi folosita pentru a crea mai multe ferme. Fiecare ferma va avea:
- un id auto atribuit (un numar care se va incrementa de fiecare data cand instantiem o ferma);
- o locatie;
- un array de animale.
    Fiecare animal are proprietatile nume si cantitate.
    Clasa va contine urmatoarele metode:
-> listAnimals => metoda va afisa un string ce contine toate animalele din ferma (tip: use the join method).
-> listRareAnimals => metoda va afisa un string ce contine toate animalele ale caror cantitate < 5.
    Creati 2 ferme care sa contina cel putin 4 animale.*/

    console.log ("EXERCITIUL 1");
class myFarm {
    id
    location
    animals;

    constructor(location, animals) {
        this.location = location;
        this.animals = animals;
        this.id = myFarm.currentId;

        myFarm.currentId++;
    }
static currentId = 10;

    listAnimals() {
        
        if (this.animals.length) {
            console.log(`Ferma contine urmatoarele animale: ${this.animals.map(animal => animal.name).join(", ")}`)
        } else {
            console.log("Ferma nu contine animale");
        }
    }
    listRareAnimals() {
        const rareAnimals = this.animals.filter(animal => animal.quantity < 5).map(animal => animal.name);
        if (rareAnimals.length) {
            console.log(`Ferma contine urmatoarele animale rare: ${rareAnimals.join(", ")}`)
        } else {
            console.log("Ferma nu contine animale");
        }
    }
}
const animals1 = [
    {
        name: 'Vaca',
        quantity: 85
    },
    {
        name: 'Gaina',
        quantity: 40
    },
    {
        name: 'Cal',
        quantity: 9
    },
    {
        name: 'Capra',
        quantity: 35
    }
];

const animals2 = [
    {
        name: 'Rata',
        quantity: 310
    },
    {
        name: 'Alpaca',
        quantity: 1
    },
    {
        name: 'Strut',
        quantity: 2
    },
    {
        name: 'Bivol',
        quantity: 5
    }
];


const farm1 = new myFarm("Iasi", animals1);
console.log(farm1);
const farm2 = new myFarm("Brasov", animals2);
console.log(farm2);

farm1.listAnimals();
farm2.listRareAnimals();


// 2. Creati doua metode, min si max, care sa fie disponibile pe orice array. Metodele vor returna minimul, respectiv maximul din array-ul curent.
// TIP: Array.prototype

console.log("EXERCITIUL 2");

const valori = [1, 2, 3, 4, 5];

Array.prototype.min = function(){
    return Math.min(...this);
}
console.log("Array: [1, 2, 3, 4, 5]");
console.log("Minimul array-ului curent este", valori.min());

Array.prototype.max = function(){
    return Math.max(...this);
}
console.log("Maximul array-ului curent este", valori.max());

// ex 1 optional
//Folosind builder pattern, să se creeze o clasa care descrie un Animal cu proprietățile name, age si rasa. Clasa nu va avea un constructor, in schimb vom configura valori interne prin setters care vor returna o instanță a obiectului curent.

class newAnimal {
    name;
    age;
    race;

    setName(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setRace(race) {
        this.race = race;
        return this;
    }

    printAnimal() {
        console.log(`Animalul ${this.name} are varsta de ${this.age} an si este de rasa ${this.race}`)
    }
}

const myAnimal = new newAnimal();

myAnimal
    .setName("Doggy")
    .setAge(1)
    .setRace("Akita");

myAnimal.printAnimal();

   