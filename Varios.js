const vector=[10,20,30,40,50];

vector.forEach((data, indice, array) => {
    console.log(data, indice, array, array[0]);
})


//tiene un array de nombres de personas.
//se pide devolver el array que incluya unicamente los 
//nombres que tienen una sola palabra
const nombres =["Juam","Iván","Maria","Armando Paredes","Elba Surita"];
//resultado esperado ["Juam","Ivan","Maria"]
function getNombresDeUnaPalabra(array){
    return array.filter (data => {
        return data.indexOf(' ')==-1;
    })
}

const nom = getNombresDeUnaPalabra(nombres);
console.log(nom);



//Una funcion recibe una cadena de caracteres.
//Se pide que la funcion devuelva la palabra ingresada sin consonantes.
//Por ejemeplo: Universidad
//Resultado esperado: Uieia
//ayuda: indexOf, split

function soloVocales(array){
    var vocales =['a','e','i','o','u'];

    return array.split("").filter (data =>{
        return vocales.indexOf(data.toLowerCase()) !=-1;
    }).join('');
}

const p1=soloVocales("Universidad");
console.log(p1);
console.log(soloVocales("Iván"));

//Una funcion recibe un array de palabras
//Se pide que la funcion devuelva las palabras que tienen la misma vocal
//Entrada: ["amalgam","zoom","casa,"jinete","iglesia"]
//Salida: ["amalgan","czoom","casa"]

entrada = ["amalgam","zoom","casa","jinete","iglesia"];
function palabrasMismaVocal(array){
    array.filter(data => {
        
        const strVocales = soloVocales(data);
        console.log(strVocales);

    })   
}

palabrasMismaVocal(entrada);