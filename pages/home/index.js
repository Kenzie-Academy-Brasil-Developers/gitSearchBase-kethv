/* Desenvolva sua lógica aqui...*/


const userData = JSON.parse(localStorage.getItem("userData"))
const repoData = JSON.parse(localStorage.getItem("repoData"))
console.log(repoData)

async function loadDashboard(){
    // const data = await getUser(nameUser)
//    console.log(data) 
    renderHeader()
    getRenderRepository()
}


const changeUser = document.querySelector('.change-user')
async function renderHeader(){
    const header = document.querySelector('.header-profile')
    const nav = document.querySelector('.nav-bar')
   
    const boxProfile   = document.createElement('div')
    const imgProfile   = document.createElement('img')
    const boxUser      = document.createElement('div')
    const userName     = document.createElement('h2')
    const bio          = document.createElement('span')

    const email        = document.createElement('a')


    boxProfile.classList.add('box-profile')
    boxUser.classList.add('box-user')
    userName.classList.add('user-name')
    userName.classList.add('fonts')
    bio.classList.add('bio')


    email.classList.add('email')

    imgProfile.src = userData.avatar_url

    userName.innerText = userData.name
    bio.innerText = userData.bio

 
    email.innerText = "Email"
    changeUser.innerText= "Trocar de usuário"

    email.href = userData.email
    email.target = "_blank"

    boxProfile.append(imgProfile, boxUser)
    boxUser.append(userName, bio)
    header.appendChild(boxProfile)

    nav.appendChild(email)
    header.appendChild(nav)


    changeUser.addEventListener('click', () =>{
        window.location.assign("../profile/index.html")
    })

}

 renderHeader(userData)


 function getRenderRepository(){
    const ul = document.querySelector('.box-cards')
    ul.innerHTML = ""
    repoData.forEach((element) => {
        const li           = document.createElement('li')
        const projectTitle = document.createElement('h3')
        const description  = document.createElement('p')
        const boxLinks     = document.createElement('div')
        const repository   = document.createElement('a')
        const demo         = document.createElement('a')

        
        li.classList.add('cards')
        projectTitle.classList.add('project-title')
        description.classList.add('description')
        boxLinks.classList.add('box-links')
      

        projectTitle.innerText = element.name
        description.innerText  = element.description
        repository.href        = element.html_url
        repository.target      = "_blank"
        demo.href              = element.events_url
        demo.target            = "_blank"
        repository.innerText   = "Repositório"
        demo.innerText         = "Demo"
    

        li.append(projectTitle,description,boxLinks)
        boxLinks.append(repository, demo)
        ul.appendChild(li)


       
      
    });


}

getRenderRepository(repoData)  

