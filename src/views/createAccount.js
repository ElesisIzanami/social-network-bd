import "../styles/createAccount.css";

import {registerUser} from'../firebase/firebase'

    function createAccount(navegando){
        const createAccountContainer=document.createElement('section')

        createAccountContainer.classList.add('createAccountContainer')

            ////Header////
    const containerNav=document.createElement('nav');

    const navUp=document.createElement('div');
    const navDown=document.createElement('div');
    const iconsContainer=document.createElement('div');
    const logoPearlA=document.createElement('img');
    const logoBlackD=document.createElement('img');
    const homeIcon=document.createElement('img');
    const networkIcon=document.createElement('img');
    const navInfoContainer=document.createElement('div');
    const userIconContainer=document.createElement('div');

        //clases:
    containerNav.classList.add('nav-container');

    navUp.classList.add('navUp');
    navDown.classList.add('navDown');
    iconsContainer.classList.add('iconsContainer')
    logoPearlA.classList.add('logoPearlA');
    logoBlackD.classList.add('logoBlackD');
    homeIcon.classList.add('homeIcon');
    networkIcon.classList.add('networkIcon');
    navInfoContainer.classList.add('navInfoContainer');
    userIconContainer.classList.add('userIconContainer')

        //Imagenes Logos -Iconos -Header

    logoPearlA.setAttribute('src', '../assets/loginAssets/img_network_bi.svg');
    logoBlackD.setAttribute('src', '../assets/loginAssets/logo_bdo_global.svg');
    networkIcon.setAttribute('src', '../assets/loginAssets/icn_globe.svg');
    homeIcon.setAttribute('src', '../assets/createAccountAssets/casa.png');
    

 //Create FORM CONTAINER

 const createContainer =document.createElement('form');
 createContainer.classList.add('createContainer');

 const editTitle = document.createElement('h2');
 editTitle.textContent = 'Create Account';

 const imgEditForm = document.createElement('img')
 imgEditForm.setAttribute('src', '../assets/createAccountAssets/imgCreateAccount.png');

/*  const nameLabel = document.createElement('label');
 const nameInput = document.createElement('input'); */
 
 const emailLabel = document.createElement('label');
 const emailInput = document.createElement('input');

 const passwordLabel = document.createElement('label');
 const passwordInput = document.createElement('input');

 const confirmPasswordLabel = document.createElement('label');
 const confirmPasswordInput = document.createElement('input');
 
 const photoUrlLabel = document.createElement('label');
 const photoUrlInput = document.createElement('input');
 
 const createButton = document.createElement('button');
 createButton.textContent = 'Create';

 const dataCreateContainer = document.createElement('div');

 dataCreateContainer.classList.add('dataCreateContainer')


     // Establecer atributos y texto para los elementos

/*  nameLabel.textContent = 'Name:';
 nameInput.setAttribute('type', 'text');
 nameInput.setAttribute('name', 'name'); */

 emailLabel.textContent = 'Email:';
 emailInput.setAttribute('type', 'email');
 emailInput.setAttribute('name', 'email');

 passwordLabel.textContent = 'Password:';
 passwordInput.setAttribute('type', 'password');

 confirmPasswordLabel.textContent = 'Confirm Password:';
 confirmPasswordInput.setAttribute('type', 'password');


 photoUrlLabel.textContent = 'Url Photo:';
 photoUrlInput.setAttribute('type', 'text');
 photoUrlInput.setAttribute('name', 'photo');

 
 //createButton.setAttribute('type', 'submit');


 // Agregar los elementos al formulario
 dataCreateContainer.append(
 editTitle,
/*  nameLabel,
 nameInput, */
 emailLabel,
 emailInput,
 document.createElement('br'),
 passwordLabel,
 passwordInput,
 document.createElement('br'),
 confirmPasswordLabel,
 confirmPasswordInput,
 document.createElement('br'),
 photoUrlLabel,
 photoUrlInput,

 );
 createContainer.append(imgEditForm,dataCreateContainer,createButton)

 //////////////////////////////////////////////////////
 userIconContainer.addEventListener('click',()=>{
    navegando('/')
 })

 createButton.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("Creando desde createAccount")
    registerUser(navegando,emailInput.value,passwordInput.value,confirmPasswordInput.value);
    if(emailInput.value || passwordInput.value || confirmPasswordInput.value){
        navegando('/')
    }
 })

//APPEND

userIconContainer.append(homeIcon)
iconsContainer.append(networkIcon,userIconContainer)
navInfoContainer.append(logoBlackD)  
navDown.append(navInfoContainer,iconsContainer)
navUp.append(logoPearlA)
containerNav.append(navUp,navDown)

createAccountContainer.append(containerNav,createContainer)

    return createAccountContainer
}

export default createAccount