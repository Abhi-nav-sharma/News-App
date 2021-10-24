import Navbar from "./navbar.js"

const handleLoad= async ()=>{
    const response= await fetchNews()
    showHeadlines(response)
}

const fetchNews= ()=>{
    return fetch(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=4823b9ff42b3433aafc1cd7745850fd2`)
    .then((res)=>res.json())
}

const showHeadlines=(items)=>{
    const container= document.getElementById('container')
    for (let item of items.articles){
        container.append(createCard(item))
    }
}

const createCard= (item)=>{
    const div= document.createElement('div')
    const imgDiv= document.createElement('div')
    const img= document.createElement('img')
    img.src= item.urlToImage
    imgDiv.append(img)
    imgDiv.style.margin='20px'
    imgDiv.style.width='200px'
    img.style.width='200px'
    img.style.height='200px'
    img.style.objectFit='fill'
    imgDiv.style.float='left'
    const textDiv= document.createElement('div')
    const title= document.createElement('h2')
    title.style.marginBottom= '8px'
    const author= document.createElement('p')
    author.style.marginTop='5px'
    author.style.marginBottom='5px'
    author.style.color='grey'
    author.style.fontWeight='500'
    author.textContent= item.author
    if(author===null){
        author.style.display='none'
    }
    title.textContent= item.title
    const desc= document.createElement('p')
    desc.textContent= item.description
    const link= document.createElement('a')
    link.href= item.url
    link.textContent= `Read more`
    textDiv.append(title,author,desc,link)
    textDiv.style.float='left'
    textDiv.style.width='80%'
    textDiv.style.textAlign='left'
    const clear= document.createElement('div')
    clear.style.clear= 'both'
    div.append(imgDiv,textDiv,clear)
    div.style.border= `1px solid black`
    div.style.marginBottom='10px'
    return div
}

window.addEventListener('load',function(){
    const cont= document.getElementById('nav-bar')
    cont.innerHTML= Navbar()
    handleLoad()
})
