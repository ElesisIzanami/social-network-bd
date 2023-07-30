import "../styles/profile.css";
import {onGetUserData,deleteUser,updateUser} from'../firebase/firebase'


function profile(navegando){

    const profileContainer = document.createElement('section')

    profileContainer.classList.add('profileContainer')

    
    ////Header////
    const containerNav=document.createElement('nav');

    const navUp=document.createElement('div');
    const navDown=document.createElement('div');
    const iconsContainer=document.createElement('div');
    const logoPearlA=document.createElement('img');
    const logoBlackD=document.createElement('img');
    const userIcon=document.createElement('img');
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
    userIcon.classList.add('userPhoto');
    networkIcon.classList.add('networkIcon');
    navInfoContainer.classList.add('navInfoContainer');
    userIconContainer.classList.add('userIconContainer')

        //Imagenes Logos -Iconos -Header

    logoPearlA.setAttribute('src', '../assets/loginAssets/img_network_bi.svg');
    logoBlackD.setAttribute('src', '../assets/loginAssets/logo_bdo_global.svg');
    networkIcon.setAttribute('src', '../assets/loginAssets/icn_globe.svg');
    userIcon.setAttribute('src', '../assets/loginAssets/user.png');
    
    //MENULOGOUT
        const menuLogin= document.createElement('div')
        const logOutButton= document.createElement('button')
        const createUserContainer = document.createElement('div')
        const iconCreateUser = document.createElement('img')
        const pCreateuser = document.createElement('p')

        iconCreateUser.setAttribute('src','../assets/wallAssets/editar.png')

        pCreateuser.innerText ="Posts"
        logOutButton.textContent = "Log Out"

        menuLogin.classList.add('menuLogOut')
        createUserContainer.classList.add('createUserContainer')
        iconCreateUser.classList.add('iconCreateUser');
        logOutButton.classList.add('logOutButton');

        createUserContainer.append(iconCreateUser,pCreateuser)
        menuLogin.append(logOutButton,createUserContainer)
        userIconContainer.append(userIcon,menuLogin)

    //EDIT PROFILE CONTAINER

    const editProfileContainer =document.createElement('form');
    editProfileContainer.classList.add('editProfileContainer');

    const editTitle = document.createElement('h2');
    editTitle.textContent = 'Edit Profile';

    const imgEditForm = document.createElement('img')
    imgEditForm.setAttribute('src', '../assets/profileAssets/imgFormEdit.png');

    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    
    const photoUrlLabel = document.createElement('label');
    const photoUrlInput = document.createElement('input');
    
    const updateButton = document.createElement('button');

    const dateEditContainer = document.createElement('div');

    dateEditContainer.classList.add('dateEditContainer')
  

        // Establecer atributos y texto para los elementos

    nameLabel.textContent = 'Name:';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');

    emailLabel.textContent = 'Correo:';
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');

    photoUrlLabel.textContent = 'Url Photo:';
    photoUrlInput.setAttribute('type', 'text');
    photoUrlInput.setAttribute('name', 'photo');

    updateButton.textContent = 'Update';
    //updateButton.setAttribute('type', 'submit');


    // Agregar los elementos al formulario
    dateEditContainer.append(
    nameLabel,
    nameInput,
    document.createElement('br'),
    emailLabel,
    emailInput,
    document.createElement('br'),
    photoUrlLabel,
    photoUrlInput,
   
    );
    editProfileContainer.append(editTitle,imgEditForm,dateEditContainer,updateButton)


   


////////////////////////////////////////////////////////////////////////////////////////////////////////////

let userName="";
let userPhoto="";
let likeContador = 0;
let userId=""
let editStatus=false 
let id="" 
let userEmail=""

//trayendo datos del usuario Google de Firestore
onGetUserData((responseUserData)=>{
responseUserData.forEach(element=>{  
    userId=element.id     
    const data=element.data()
    userName=data.name;
    userPhoto=data.photo;
    userIcon.setAttribute('src', userPhoto);
    if(userPhoto){

        userIcon.setAttribute('src', userPhoto);
    }else{
 
        userIcon.setAttribute('src', '../assets/wallAssets/user-default.png');
    }
    
    
    userEmail=data.email
    //userPhotoPublic.setAttribute('src', userPhoto);
    nameInput.value =userName
    emailInput.value =userEmail
    photoUrlInput.value =userPhoto
})
})

 //eventos del Menu LogOut

logOutButton.addEventListener('click',()=>{

navegando("/")
})

createUserContainer.addEventListener('click',()=>{
    navegando('/wall')
})


//evento Update EditProfile


 updateButton.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('editando..')
    updateUser(userId,{
        name:nameInput.value,
        email:emailInput.value,
        photo:photoUrlInput.value
    })
 })


//APPEND

userIconContainer.append(userIcon)
iconsContainer.append(networkIcon,userIconContainer)
navInfoContainer.append(logoBlackD)  
navDown.append(navInfoContainer,iconsContainer)
navUp.append(logoPearlA)
containerNav.append(navUp,navDown)

profileContainer.append(containerNav,editProfileContainer)

    return profileContainer
}

export default profile