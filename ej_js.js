let data = [
  {
    name: 'Gracia',
    score: [21,3,5,78,25],
    temporada: true
  },
  {
    name: 'Nico M',
    score: [55,66,77,55,66],
    temporada: false
  },
  {
    name: 'Nico G',
    score: [12,34,67,89,34],
    temporada: true
  },
  {
    name: 'Gemma',
    score: [12,90,13,45,6],
    temporada: true
  }
];

let top_player = 0;

data.forEach(element => {

  console.log(element.name);

  let score_list = element.score

  console.log(score_list);

  sum = 0;

  console.log(score_list.length);

  for (let i = 0; i < score_list.length; i++) {
    sum = score_list[i] + sum
    console.log(sum);
  }


  console.log(sum);

  let prom = sum / score_list.length

  console.log(prom);

  if (top_player < prom) {
    if (element.temporada == true) {
      top_player = prom;
    }
  }

  element.promedio = prom;
})

console.log(data);
console.log(top_player);

data.forEach(el => {
  if (el.promedio == top_player) {
    console.log(el);
    mejor_jugador(el)
  }
})

function mejor_jugador(objeto) {
  console.log(`el mejor jugador es: ${objeto.name}`);
  console.log(`su puntaje seria: ${objeto.promedio}`);
}

//47
const data_2 = {
  Antonio:{
    classification: 'comunication',
    age: 40
  },
  Nicolas:{
    classification: 'profesor',
    age: 34
  },
  Gracia:{
    classification: 'profesor',
    age: 37
  },
  Oscar:{
    classification: 'student',
    age: 35
  },
  nico:{
    classification: 'profesor',
    age: 29
  },
  lufi:{
    classification: 'student',
    age: 29
  },
  maria:{
    classification: 'comunication',
    age: 28
  },
  pablo:{
    classification: 'student',
    age: 26
  },
}

let data_2_profesor = {}
let data_2_students = {}
let data_2_comunication = {}
let ages = [];

let edad_profes = 0;

for(let property in data_2) {
  console.log(property);
  console.log(data_2);

  let value = data_2[property];

  console.log(value);

  if (value.classification == 'profesor') {
    console.log(property);
    data_2_profesor[property] =  value;

    
    ages.push(value.age);

    console.log(ages);

    ages.sort(function(a, b) {
      return a -b;
    })

    console.log(ages)

  } else if (value.classification == 'student') {
    console.log(property);
    data_2_students[property] = value;
  } else {
    console.log(property);
    data_2_comunication[property] = value
  }
}

let copy_data_2_profesor = {}

for (let i = 0; i < ages.length; i++) {
  
  console.log(ages[i]);

  for(let property in data_2_profesor) {

    console.log(property);

    let value = data_2[property];

    console.log(value);

    if (ages[i] == value.age) {
      console.log(property);
      copy_data_2_profesor[property] = value;
    }
  }
}

console.log(data_2_profesor);
console.log(data_2_students);
console.log(data_2_comunication);

console.log(copy_data_2_profesor);