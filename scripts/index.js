document.addEventListener('DOMContentLoaded', function () {
  
const urlSity = 'https://devrel.rndtech.pro/api/cities';
const MethodGet = 'GET';

const topButton = document.querySelector('.buttonPanel')
topButton.addEventListener('click', function(e) {
    
    e.target.style.background  = '#2a4aff'
    e.target.style.color = 'white'

    let i = 0;
    while(i< topButton.children.length)
    {
        if(topButton.children[i].className!==e.target.className)
        {
            topButton.children[i].style.background = ''
            topButton.children[i].style.color = ''
        }

        i++
    }
    
    //e.target.style.color = '#2a4aff'
})

//Fetch(urlSity, MethodGet)
OutElements();


//console.log(Fetch(urlSity, MethodGet));
})
// функция отрисовки элементов
// function AddContainerToDo(text){

//     let elementCheckBox = document.createElement('div')
//     elementCheckBox.className = 'elementCheckBox'
    
//     let divcheckbox = document.createElement('div')
//     divcheckbox.className = 'checkbox'

//     let divtext = document.createElement('div')
//     divtext.className = 'text'
//     divtext.innerText = text.text

//     let divdel = document.createElement('div')
//     divdel.className = 'del'
    
//   }
  


function Fetch(Url, Metod)
{
    return fetch(Url, {
        method: Metod
    }).then(responce => responce.json())
    .then(data => {localStorage.setItem('Sity', JSON.stringify(data))})
}

function OutElements(){
    let a = localStorage.getItem('Sity');
    JSON.parse(a).forEach(element => {

        let oneSity = document.createElement('div')
        oneSity.className = 'oneSity'

        let image = document.createElement('img')
        image.className = 'img'
        image.src = 'images/gerbSitys/' + element +'.png'

        let nameSity = document.createElement('div')
        nameSity.className = 'nameSity'
        nameSity.innerText = element

        let favoriteSity = document.createElement('div')
        favoriteSity.className = 'favoriteSity'
        favoriteSity.setAttribute('data-tooltip', 'Добавить в избранное.')

        let removeSity = document.createElement('div')
        removeSity.className = 'removeSity'
        removeSity.setAttribute('data-tooltip', 'Удалить.')

        let Sity = document.querySelector('.sity')
        Sity.append(oneSity)
        oneSity.prepend(removeSity)
        oneSity.prepend(favoriteSity)
        oneSity.prepend(nameSity)
        oneSity.prepend(image)


        
    });
}