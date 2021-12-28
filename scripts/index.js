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


//Fetch(urlSity, MethodGet)



//console.log(Fetch(urlSity, MethodGet));
    })
    OutElements();
})


function Fetch(Url, Metod)
{
    return fetch(Url, {
        method: Metod
    }).then(responce => responce.json())
    .then(data => {localStorage.setItem('Sity', JSON.stringify(data))})
}

function OutElements(){
    let a = JSON.parse(localStorage.getItem('Sity'));
    const del = JSON.parse(localStorage.getItem('Deleted'))
    a = a.filter(x => !del.includes(x))
    a.forEach(element => {
        

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
        //favoriteSity.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' viewBox=\'0 0 12 12\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M7.41401 6.00001L11.707 1.70701C12.098 1.31601 12.098 0.684006 11.707 0.293006C11.316 -0.0979941 10.684 -0.0979941 10.293 0.293006L6.00001 4.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L4.58601 6.00001L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.41401L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00001Z\' fill=\'%23F04F2B\'/%3E%3C/svg%3E%0A");'
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

        removeSity.addEventListener('click', function(e) {
            const name = e.target.parentNode.querySelector('.nameSity').innerHTML
            //const deleted = localStorage.getItem('Deleted')
            let array = []
            if (localStorage.getItem('Deleted')!=null)
            {
                const del = localStorage.getItem('Deleted')
                array = JSON.parse(del)
                array.push(name)   
            }
            localStorage.setItem('Deleted',JSON.stringify(array))
            e.target.parentNode.remove()
        })

        favoriteSity.addEventListener('click', function(e){
            const name = e.target.parentNode.querySelector('.nameSity').innerHTML
            let array = []
            if (localStorage.getItem('Favourite')!=null)
            {
                
                array = JSON.parse(localStorage.getItem('Favourite'))
                if(array.filter(x => name.includes(x)).length === 0)
                array.push(name)
            }
            
            localStorage.setItem('Favourite',JSON.stringify(array))
            //e.target.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' viewBox=\'0 0 12 12\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M7.41401 6.00001L11.707 1.70701C12.098 1.31601 12.098 0.684006 11.707 0.293006C11.316 -0.0979941 10.684 -0.0979941 10.293 0.293006L6.00001 4.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L4.58601 6.00001L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.41401L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00001Z\' fill=\'%23F04F2B\'/%3E%3C/svg%3E%0A");'
           

        })
        
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
        const favorite = localStorage.getItem('Favourite')
        if (favorite!=null)
        {
            outFavoutiteElements();
        }
    }
    if(element.className === "button remote")
    {
        removeElement(div.children.length, '.oneSity')
        const deleted = localStorage.getItem('Deleted')
        if (deleted!=null)
        {
            outDeletedElements();
        }
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

function outDeletedElements()
{
    let a = localStorage.getItem('Deleted');
    JSON.parse(a).forEach(element => {

        let oneSity = document.createElement('div')
        oneSity.className = 'oneSity'

        let image = document.createElement('img')
        image.className = 'img'
        image.src = 'images/gerbSitys/' + element +'.png'

        let nameSity = document.createElement('div')
        nameSity.className = 'nameSity'
        nameSity.innerText = element

        //let favoriteSity = document.createElement('div')
        //favoriteSity.className = 'favoriteSity'
        //favoriteSity.setAttribute('data-tooltip', 'Добавить в избранное.')

        let removeSity = document.createElement('div')
        removeSity.className = 'removeSity'
        //removeSity.style.background = 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' viewBox=\'0 0 12 12\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M7.41401 6.00001L11.707 1.70701C12.098 1.31601 12.098 0.684006 11.707 0.293006C11.316 -0.0979941 10.684 -0.0979941 10.293 0.293006L6.00001 4.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L4.58601 6.00001L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.41401L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00001Z\' fill=\'%23F04F2B\'/%3E%3C/svg%3E%0A");'
        
        
        let Sity = document.querySelector('.sity')
        Sity.append(oneSity)
        oneSity.prepend(removeSity)
        //oneSity.prepend(favoriteSity)
        oneSity.prepend(nameSity)
        oneSity.prepend(image)

        removeSity.addEventListener('click', function(e) {
            const name = e.target.parentNode.querySelector('.nameSity').innerHTML
            //const deleted = localStorage.getItem('Deleted')
            /*let array = []
            if (localStorage.getItem('Deleted')!=null)
            {
                const del = localStorage.getItem('Deleted')
                array = JSON.parse(del)
                console.log(array)
            }
            array.push(name)
            localStorage.setItem('Deleted',JSON.stringify(array))*/
            const del = JSON.parse(localStorage.getItem('Deleted'))
            const array = []
            del.forEach(element => {
                if(name !== element) array.push(element)
            });
            localStorage.setItem('Deleted', JSON.stringify(array))
            e.target.parentNode.remove()
        })

        
    });
}

function outFavoutiteElements()
{
    let a = localStorage.getItem('Favourite');
    JSON.parse(a).forEach(element => {

        let oneSity = document.createElement('div')
        oneSity.className = 'oneSity'

        let image = document.createElement('img')
        image.className = 'img'
        image.src = 'images/gerbSitys/' + element +'.png'

        let nameSity = document.createElement('div')
        nameSity.className = 'nameSity'
        nameSity.innerText = element

        let removeSity = document.createElement('div')
        removeSity.className = 'removeSity'  
        
        let Sity = document.querySelector('.sity')
        Sity.append(oneSity)
        oneSity.prepend(removeSity)
        oneSity.prepend(nameSity)
        oneSity.prepend(image)

        removeSity.addEventListener('click', function(e) {
            const name = e.target.parentNode.querySelector('.nameSity').innerHTML
            const fav = JSON.parse(localStorage.getItem('Favourite'))
            const array = []
            fav.forEach(element => {
                if(name !== element) array.push(element)
            });
            localStorage.setItem('Favourite', JSON.stringify(array))
            e.target.parentNode.remove()
        })

        
    });
}