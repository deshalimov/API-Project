document.addEventListener('DOMContentLoaded', function () {

     

const urlSity = "https://devrel.rndtech.pro/api/cities";
const Get = 'GET';
const Post = 'POST'
//console.log(urlSity)
const a = Fetch(Get, urlSity);
console.log(a)

})

  
function Fetch (Method, Url)
{
  fetch(Url, {
        method : Method
    })
    .then((response) => { response.json()})
    .then((data)=>{return data})
}