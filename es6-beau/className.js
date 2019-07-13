class Princess {
    constructor(name, movie){
        this.name = name;
        this.movie = movie
    }
}
   

let jasmine = new Princess('Jasmin', "Aladin");

console.log(jasmine);

const articleCenter = document.getElementsByClassName('center')[0];
let createNewSection = document.createElement('section');
let createHeader = document.createElement('h1');

articleCenter.appendChild(createNewSection.appendChild(createHeader));


articleCenter.addEventListener('click', articleCenter.appendChild(createNewSection.appendChild(createHeader)));

document.getElementsByClassName('center').write(document.createElement('section'))



