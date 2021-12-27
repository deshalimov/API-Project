document.addEventListener('DOMContentLoaded', function () {
  
const urlSity = 'https://devrel.rndtech.pro/api/cities';
const MethodGet = 'GET';

Fetch(urlSity, MethodGet)

const topButton = document.querySelector('.buttonPanel')
const main = document.querySelector('.main')
main.style.background = '#2a4aff'
main.style.color = 'white'

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
    OpenTab(e.target)
    
    //e.target.style.color = '#2a4aff'
})

//Fetch(urlSity, MethodGet)
OutElements();


//console.log(Fetch(urlSity, MethodGet));
})



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
        //favoriteSity.setAttribute('data-tooltip', 'Добавить в избранное.')

        let removeSity = document.createElement('div')
        removeSity.className = 'removeSity'
        //removeSity.setAttribute('data-tooltip', 'Удалить.')

        let Sity = document.querySelector('.sity')
        Sity.append(oneSity)
        oneSity.prepend(removeSity)
        oneSity.prepend(favoriteSity)
        oneSity.prepend(nameSity)
        oneSity.prepend(image)


        
    });
}

function OpenTab(element){
    const div = document.querySelector('.sity')
    if(element.className === "button main")
    {
        removeElement(div.children.length, '.oneSity')
        OutElements()
    }
    if(element.className === "button favourites")
    {
        removeElement(div.children.length, '.oneSity')
    }
    if(element.className === "button remote")
    {
        removeElement(div.children.length, '.oneSity')
    }

}

function removeElement(i, classname)
{
    if(i>0)
    while( i > 0)
    {
        const oneSity = document.querySelector(classname)
        oneSity.remove()
        i--
        //console.log(i + " " + div.children.length)
    }
}