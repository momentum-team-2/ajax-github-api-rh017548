/* globals fetch */

let url = 'https://api.github.com/users/rh017548'

let list = document.querySelector(".main")

fetch(url)
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    console.log(data)
    let li = document.createElement('li')
    li.innerText = data.name
    list.appendChild(li)
    let userData = data
    
    let location = document.createElement('li')
    location.innerText = data.location
    list.appendChild(location)

    
    let site = document.createElement('li')
    site.innerText = data.html_url
    list.appendChild(site)

    
    let pic = document.createElement('li')
    pic.innerHTML = createImage(data.avatar_url)
    list.appendChild(pic)
    
  
})
  function createImage (url) {
    return `<img src=${url}>`
}
 
 
 
 
 
 
  