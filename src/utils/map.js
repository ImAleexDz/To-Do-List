const firebase = {
    "-MGGIXIgC5lfoBVlLHsS": {
        "category": "Cocina",
        "done": false,
        "title": "Hacer el desayuno"
    },
    "-MGGItTLrO-Z-msr1EFN": {
        "category": "Hogar",
        "done": false,
        "title": "Limpiar la casa"
    },
    "-MGGJ1T45nUzBsLXicqu": {
        "category": "DEV.F",
        "done": false,
        "title": "Estudiar"
    },
    "-MGPy8IPVSbF6fUfrog8": {
        "category": "DEV.F",
        "done": false,
        "title": "Estudiar"
    }
}

console.log(Object.keys(firebase));

const nuevo = Object.keys(firebase).map((valor) => {console.log(firebase[valor].category)});