/* Desenvolva sua lógica aqui...*/
// 1- fazer login -> pegar o nome e fazer uma requisição - ok
// 2- verificar -> se o usuario existir, armazenar o usuario no localStorage e trocar de pág - ok 
// 3- home -> pegar informações do usuário e renderizar na tela
import { getUser, repos } from "../../js/api.js"

const arrayUsuariosSalvos = new Set()

async function getData(){
  const form = document.getElementById('id_form')
  
  form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const loginID = document.getElementById('input_login')
    const name = loginID.value
    const userData =  await getUser(name) 
    const repoData =  await repos(name) 
    const arrayObj = {
     nome: userData.name,
     avatar:userData.avatar_url
    } 
    arrayUsuariosSalvos.add(arrayObj)
    const trasformarSetParaArr = Array.from(arrayUsuariosSalvos)
    //if(userData && repoData){
      localStorage.setItem("userData", JSON.stringify(userData))
      localStorage.setItem("repoData", JSON.stringify(repoData))

      btnSpinner.style.background = "#D6336C"


     window.location.assign("../home/index.html")
    
      localStorage.setItem("usuariosRecentes", JSON.stringify(trasformarSetParaArr))

      
    //}
    // console.log(name)
  })
}

getData()


const ulAvatar = document.querySelector('#saved_users')
 function renderSavedUsers(){
  const user = JSON.parse(localStorage.getItem("usuariosRecentes"))
  console.log(user)
  if(user.length > 0){
    user.forEach((element, i) => {
      if(i >= user.length -4){
        createUsersAvatar(element)
      }
    })
  }
 }
 
 renderSavedUsers()

 function createUsersAvatar(element){
  const liAvatar    = document.createElement('li')
  const imgAvatar   = document.createElement('img')

  // liAvatar.classList.add('')

  imgAvatar.src = element.avatar_url

  liAvatar.appendChild(imgAvatar)
  ulAvatar.appendChild(liAvatar)
 }


const btnSpinner = document.querySelector('.btn-form')
function animationBtn(){
  
  btnSpinner.addEventListener('click', () =>{
    btnSpinner.innerHTML= ""
    const imgSpinner = document.createElement("img")
    imgSpinner.src = "/assets/scr/spinner.svg"
    
    btnSpinner.style.cursor = "pointer"

    btnSpinner.appendChild(imgSpinner)
  })

}

animationBtn()