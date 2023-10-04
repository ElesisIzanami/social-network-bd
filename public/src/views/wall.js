import "../styles/wall.css";
import {onGetUserData,deleteUser,savePost,updatePost,getPost,deletePost,onGetPosts} from '../firebase/firebase'

 function wall(navegando){
    const wallContainer = document.createElement('div');
    wallContainer.classList.add('wallContainer');

    //////BACKGROUND/////
    const backgroundContainerWall=document.createElement('div')
    const background1 =document.createElement('img');
    const background2 =document.createElement('img');
    const background3 =document.createElement('img'); 

    // Agregando clases backkground
    backgroundContainerWall.classList.add('backgroundContainerWall');
    background1.classList.add('background_1');
    background2.classList.add('background_2');
    background3.classList.add('background_3');
    background1.classList.add('backgroundWall');
    background2.classList.add('backgroundWall');
    background3.classList.add('backgroundWall');
    
    //Append Elementos
    backgroundContainerWall.append(background1,background2,background3);

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

    //

    //MENULOGOUT
    const menuLogin= document.createElement('div')
    const logOutButton= document.createElement('button')
    const createUserContainer = document.createElement('div')
    const iconCreateUser = document.createElement('img')
    const pCreateuser = document.createElement('p')

    iconCreateUser.setAttribute('src','../assets/wallAssets/editar.png')

    pCreateuser.innerText ="Perfil Usuario"
    logOutButton.textContent = "Log Out"

    menuLogin.classList.add('menuLogOut')
    createUserContainer.classList.add('createUserContainer')
    iconCreateUser.classList.add('iconCreateUser');
    logOutButton.classList.add('logOutButton');

    createUserContainer.append(iconCreateUser,pCreateuser)
    menuLogin.append(logOutButton,createUserContainer)
    userIconContainer.append(userIcon,menuLogin)

    createUserContainer.addEventListener('click',()=>{
        navegando('/profile')
    })

    //PUBLIC CONTAINER

    const publicAllContainer =document.createElement('article')

    const createPostContainer = document.createElement('section')
    const postsContainer = document.createElement('section')

    const dataCreatePostContainer = document.createElement('div')
    const dataCreatePost = document.createElement('div')
    const userPhotoPublic = document.createElement('img')
    const userDataName = document.createElement('h2')
    const buttonWrite =document.createElement('button')

    const modalCreatePostContainer = document.createElement('form')
    const titleCreatePost = document.createElement('h2')
    const textAreaCreatePost = document.createElement('textarea')
    const buttonSave = document.createElement('button')

    publicAllContainer.classList.add('publicAllContainer');
    createPostContainer.classList.add('createPostContainer');
    postsContainer.classList.add('postsContainer');
    dataCreatePostContainer.classList.add('dataCreatePostContainer');
    dataCreatePost.classList.add('dataCreatePost');
    modalCreatePostContainer.classList.add('modalCreatePostContainer');
    buttonWrite.classList.add('buttonWrite');

    buttonWrite.textContent = "Write something..."
    titleCreatePost.textContent = "Create Post"
    buttonSave.textContent = "Save"

    textAreaCreatePost.setAttribute('placeholder','Write something . . .')

    dataCreatePost.append(userPhotoPublic,userDataName)
    dataCreatePostContainer.append(dataCreatePost,buttonWrite)
    modalCreatePostContainer.append(titleCreatePost,textAreaCreatePost,buttonSave)
    createPostContainer.append(dataCreatePostContainer,modalCreatePostContainer)
    publicAllContainer.append(createPostContainer,postsContainer)

    const postContainer = document.createElement('div')
    //FOOTER
    const containerFooter =document.createElement('footer'); 
    const textFooter =document.createElement('p');
    const aFooter = document.createElement('a');

    textFooter.innerText="Copyright© 2022 | Created by ";
    aFooter.innerText="Franz Cristhians Minaya";

    aFooter.setAttribute('href', 'https://github.com/ElesisIzanami');

    textFooter.append(aFooter)
    containerFooter.append(textFooter)

    containerFooter.classList.add('footerContainer');

////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let userName="";
    let userPhoto="";
    let likeContador = 0;
    let userId=""
    let editStatus=false 
    let id="" 

//trayendo datos del usuario Google de Firestore
    onGetUserData((responseUserData)=>{
    responseUserData.forEach(element=>{  
        userId=element.id     
        const data=element.data()
        userName=data.name;
        userPhoto=data.photo;
        
            if(userPhoto){
                userPhotoPublic.setAttribute('src', userPhoto);
                userIcon.setAttribute('src', userPhoto);
            }else{
                userPhotoPublic.setAttribute('src', '../assets/wallAssets/user-default.png');
                userIcon.setAttribute('src', '../assets/wallAssets/user-default.png');
            }
        
        userDataName.textContent=userName;
        })
    })

     //evento del boton logOut

logOutButton.addEventListener('click',()=>{
    console.log("ASASDASDASD")
    
    navegando("/")
})


     //eventos de los botones del CreatePost

buttonWrite.addEventListener('click', () => {
        modalCreatePostContainer.classList.toggle('modalHeight');
});

buttonSave.addEventListener('click',()=>{
    modalCreatePostContainer.classList.remove('modalHeight')
})

document.addEventListener('click', (event) => {
    const targetElement = event.target;

    // Si el clic ocurre fuera del modal, ocultarlo
    if (!modalCreatePostContainer.contains(targetElement) && !buttonWrite.contains(targetElement)) {
        modalCreatePostContainer.classList.remove('modalHeight');
    }
});


//OBTENIENDO POSTS
onGetPosts((responsePosts)=>{
    //let iLikeCounter=0
    let html = ""
  

    responsePosts.forEach(element =>{           
          const post=element.data()
          
          html += 
          `<div class="postContainer">
                <div class="divContainerUser" id="divContenedorxD">
                        <img class="imgProfile3" src="${post.imageUser}" alt="iconProfile">
                        <h2 class="nameUser">${post.nameUser}</h2>
                        <img class="postIconOptions"  src="../assets/wallAssets/icon-three-dots.png" alt="Ellipsis icon">
                        <div class="postMenuOptions">
                            <div class="buttonEdit" data-id="${element.id}">
                                <a data-id="${element.id}">Edit</a>
                                <img src="../assets/wallAssets/edit.png" data-id="${element.id}">
                            </div>
                            <div class="buttonDelete" data-id="${element.id}">
                                <a data-id="${element.id}">Delete</a>
                                <img src="../assets/wallAssets/delete.ico" data-id="${element.id}">
                            </div>    
                        </div>
                </div>
        
                <p class="postUser" id="idDescriptionPost">${post.description}</p>
                
                <div class="ContainerDetailsPadre">
                    <div class="containerDetails">
                        <span class="number" data-id="${element.id}">${post.likeCounter}</span>
                        <img class="iconHeart" src="../assets/wallAssets/icon-heart-white.png" alt="Heart icon">
                        <span class="iLike" data-id="${element.id}">I like</span>
                        <img class="iconComment" src="../assets/wallAssets/icon-comment.png" alt="Feedback icon">
                        <p class="comment">Comment</p>
                        <img class="iconShare" src="../assets/wallAssets/icon-share.png" alt="Share icon">
                        <p class="share">Share</p>
                    </div>
                </div>
                
           </div>`
        });

    postsContainer.innerHTML = html;

    const btnsOptions =postsContainer.querySelectorAll('.postIconOptions');
    const menusOptions =postsContainer.querySelectorAll('.postMenuOptions');
    const btnsEdit=postsContainer.querySelectorAll('.buttonEdit');
    const btnsDelete =postsContainer.querySelectorAll('.buttonDelete')
    const btnsIlike = postsContainer.querySelectorAll('.iLike')
    const numbersLike = postsContainer.querySelectorAll('.number')
    const iconsHeart = postsContainer.querySelectorAll('.iconHeart')


    btnsIlike.forEach((btnIlike,indexLike)=>{
        let index=indexLike
        
        btnIlike.addEventListener('click',(e)=>{
            numbersLike.forEach(async(number,i)=>{
                
                if(index===i){
                    const docLike=  await getPost(e.target.dataset.id);
                    const likeEdit = docLike.data()
                   likeContador=Number(likeEdit.likeCounter)+1 
                   
                    console.log("contadorLIKES")
                
                    updatePost(e.target.dataset.id,{likeCounter:likeContador})  
                }              
            })

            iconsHeart.forEach((icon,indexIcon)=>{
                if(index===indexIcon){
                    icon.removeAttribute("src");
                    icon.setAttribute('src', '/assets/wallAssets/icon-heart-red.png');
                }
            });
            
        })
    })
            
    btnsOptions.forEach((btn,i)=>{
        let index=i;
        btn.addEventListener("click",()=>{
            menusOptions.forEach((element,i) => {
                if(index===i){
                    element.classList.toggle('active');
                }  else{
                    element.classList.remove('active');
                }
            })
        })
            //editarPost
        btnsEdit.forEach((btnEdit,indexEdit)=>{            
            btnEdit.addEventListener("click",async(event)=>{       
                if(index===indexEdit){
                  const doc=  await getPost(event.target.dataset.id);
                  const postEdit=(doc.data());

                    textAreaCreatePost.value=postEdit.description
                    modalCreatePostContainer.classList.add('modalHeight')
        
                    titleCreatePost.textContent = 'EDIT POST'
                    buttonSave.textContent = 'Update'
                    editStatus=true 
                    id=doc.id                         
                }
                menusOptions.forEach(element2=>{
                    element2.classList.remove('active')
                })
            })    
        })
        
        //borrar Post
        btnsDelete.forEach((btnDelete,indexDelete)=>{
            btnDelete.addEventListener("click",(event)=>{
                if(index===indexDelete){
                    deletePost(event.target.dataset.id)
                }                       
            })
        })
    }) 
});    


//guardando datos en fireStore
modalCreatePostContainer.addEventListener('submit',(e)=>{   
    e.preventDefault();  
    if(editStatus){
        updatePost(id,{description:textAreaCreatePost.value})
        editStatus=false
    } else{
    savePost(textAreaCreatePost.value,userName,userPhoto,likeContador=0)
    }     
    modalCreatePostContainer.classList.remove('active');     
  }) 

    //append:
    userIconContainer.append(userIcon)
    navInfoContainer.append(logoBlackD)
    iconsContainer.append(networkIcon,userIconContainer)
    navUp.append(logoPearlA)
    navDown.append(navInfoContainer,iconsContainer)
    containerNav.append(navUp,navDown)

    wallContainer.append(containerNav,publicAllContainer,backgroundContainerWall,containerFooter)

    return wallContainer
}

export default wall