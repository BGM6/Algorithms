//LOOPING OBJECTS: OBJECT KEYS, VALUES, ENTRIES

const bryan = {
    firstName: 'Bryan',
    lastName: 'Guilas',
    pets: ['Niko', 'Roady'],
    wearsGlasses: true,
    hairColor: 'black',

};

//Object.keys() returns all the keys of the object
for (const key of Object.keys(bryan)) {
    console.log(key);
}

//Object.values() returns all the values of the object
for (const val of Object.values(bryan)) {
    console.log(val);
}

//Object.entries() returns all the key and values at once
for (const [key, value] of Object.entries(bryan)) {
    console.log(key, value);
}

