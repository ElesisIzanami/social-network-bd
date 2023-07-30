import "../styles/login .css";
import { LoginWithGoogle,deleteUser,onGetUserData,loginEmailPassword,userDataGoogle } from "../firebase/firebase";
function login(navegando){

    //**CONTENEDORES PRINCIPALES
    const containerLogin = document.createElement('section');
    const containerNav=document.createElement('nav'); 
    const backgroundContainer=document.createElement('div');
    const containerFooter =document.createElement('footer'); 
    
    //**NAV
      
    const navUp=document.createElement('div');
    const navDown=document.createElement('div');
    const iconsContainer=document.createElement('div');
    const logoPearlA=document.createElement('img');
    const logoBlackD=document.createElement('img');
    const userIcon=document.createElement('img');
    const networkIcon=document.createElement('img');
    const navInfoContainer=document.createElement('div');
    const userIconContainer=document.createElement('div');


    const ulNav = document.createElement('ul');
    const liNav1 = document.createElement('li'); 
    const liNav2 = document.createElement('li'); 
    const liNav3 = document.createElement('li'); 
    const liNav4 = document.createElement('li'); 
    const liNav5 = document.createElement('li'); 
    const aliNav1 = document.createElement('a');
    const aliNav2 = document.createElement('a');
    const aliNav3 = document.createElement('a');
    const aliNav4 = document.createElement('a');
    const aliNav5 = document.createElement('a');
    const aSpan1 = document.createElement('span');
    const aSpan2 = document.createElement('span');
    const aSpan3 = document.createElement('span');
    const aSpan4 = document.createElement('span');
    const aSpan5 = document.createElement('span');
    
    aSpan1.textContent = "Noticias"
    aSpan2.textContent = "Campamento Aventurero"
    aSpan3.textContent = "Informacion del Juego"
    aSpan4.textContent = "Tienda"
    aSpan5.textContent = "Descarga"

    //agregando clases -nav
    containerNav.classList.add('nav-container');
    navUp.classList.add('navUp');
    navDown.classList.add('navDown');
    ulNav.classList.add('ulNav')
    iconsContainer.classList.add('iconsContainer')
    userIconContainer.classList.add('userIconContainer')
    logoPearlA.classList.add('logoPearlA');
    logoBlackD.classList.add('logoBlackD');
    userIcon.classList.add('userIcon');
    networkIcon.classList.add('networkIcon');
    navInfoContainer.classList.add('navInfoContainer');
    liNav1.classList.add('liNav1')
    liNav2.classList.add('liNav2')
    liNav3.classList.add('liNav3')
    liNav4.classList.add('liNav4')
    liNav5.classList.add('liNav5')
    

    //subMenus////////////////////

    const modalNoticias = document.createElement('div')
    const ulModal = document.createElement('ul');
    const liModal1 = document.createElement('li'); 
    const liModal2 = document.createElement('li'); 
    const liModal3 = document.createElement('li'); 
    const liModal4 = document.createElement('li'); 
    const liModal5 = document.createElement('li'); 
    const aliModal1 = document.createElement('a');
    const aliModal2 = document.createElement('a');
    const aliModal3 = document.createElement('a');
    const aliModal4 = document.createElement('a');
    const aliModal5 = document.createElement('a');

    modalNoticias.classList.add('modalNoticias');
    

    aliModal1.textContent = "Avisos";
    aliModal2.textContent = "Actualizaciones";
    aliModal3.textContent = "Eventos"
    aliModal4.textContent = "Notas de GM"
    aliModal5.textContent = "Bazar Perla"

    liModal1.append(aliModal1);
    liModal2.append(aliModal2);
    liModal3.append(aliModal3);
    liModal4.append(aliModal4);
    liModal5.append(aliModal5);

    ulModal.append(liModal1,liModal2,liModal3,liModal4,liModal5)
    modalNoticias.append(ulModal)


    const modalCampamento = document.createElement('div')
    const ulModalCamp = document.createElement('ul');
    const liModalCamp1 = document.createElement('li'); 
    const liModalCamp2 = document.createElement('li'); 
    const liModalCamp3 = document.createElement('li'); 
    const liModalCamp4 = document.createElement('li'); 
    const liModalCamp5 = document.createElement('li'); 
    const aliModalCamp1 = document.createElement('a');
    const aliModalCamp2 = document.createElement('a');
    const aliModalCamp3 = document.createElement('a');
    const aliModalCamp4 = document.createElement('a');
    const aliModalCamp5 = document.createElement('a');

    modalCampamento.classList.add('modalCampamento');
    

    aliModalCamp1.textContent = "Aventurero";
    aliModalCamp2.textContent = "hermandad";
    aliModalCamp3.textContent = "Historial de Actualizaciones"
    aliModalCamp4.textContent = "Personalizaciones"
    aliModalCamp5.textContent = "Galeria de Fotos"

    liModalCamp1.append(aliModalCamp1);
    liModalCamp2.append(aliModalCamp2);
    liModalCamp3.append(aliModalCamp3);
    liModalCamp4.append(aliModalCamp4);
    liModalCamp5.append(aliModalCamp5);

    ulModalCamp.append(liModalCamp1,liModalCamp2,liModalCamp3,liModalCamp4,liModalCamp5)
    modalCampamento.append(ulModalCamp)


    const modalInfoJuego = document.createElement('div')
    const ulModalInfoJuego = document.createElement('ul');
    const liModalInfoJuego1 = document.createElement('li'); 
    const liModalInfoJuego2 = document.createElement('li'); 
    const liModalInfoJuego3 = document.createElement('li'); 
    const liModalInfoJuego4 = document.createElement('li'); 
    const liModalInfoJuego5 = document.createElement('li'); 
    const aliModalInfoJuego1 = document.createElement('a');
    const aliModalInfoJuego2 = document.createElement('a');
    const aliModalInfoJuego3 = document.createElement('a');
    const aliModalInfoJuego4 = document.createElement('a');
    const aliModalInfoJuego5 = document.createElement('a');

    modalInfoJuego.classList.add('modalInfoJuego');
    

    aliModalInfoJuego1.textContent = "Caracteristicas";
    aliModalInfoJuego2.textContent = "Clases";
    aliModalInfoJuego3.textContent = "Guia de Juego"
    aliModalInfoJuego4.textContent = "Personajes"
    aliModalInfoJuego5.textContent = "Multimedia"

    liModalInfoJuego1.append(aliModalInfoJuego1);
    liModalInfoJuego2.append(aliModalInfoJuego2);
    liModalInfoJuego3.append(aliModalInfoJuego3);
    liModalInfoJuego4.append(aliModalInfoJuego4);
    liModalInfoJuego5.append(aliModalInfoJuego5);

    ulModalInfoJuego.append(liModalInfoJuego1,liModalInfoJuego2,liModalInfoJuego3,liModalInfoJuego4,liModalInfoJuego5)
    modalInfoJuego.append(ulModalInfoJuego)


    const modalTienda = document.createElement('div')
    const ulModalTienda = document.createElement('ul');
    const liModalTienda1 = document.createElement('li'); 
    const liModalTienda2 = document.createElement('li'); 
    const liModalTienda3 = document.createElement('li'); 
    const liModalTienda4 = document.createElement('li'); 
    const liModalTienda5 = document.createElement('li'); 
    const aliModalTienda1 = document.createElement('a');
    const aliModalTienda2 = document.createElement('a');
    const aliModalTienda3 = document.createElement('a');
    const aliModalTienda4 = document.createElement('a');
    const aliModalTienda5 = document.createElement('a');

    modalTienda.classList.add('modalTienda');
    

    aliModalTienda1.textContent = "Paquete";
    aliModalTienda2.textContent = "Lote";
    aliModalTienda3.textContent = "Acoin"
    aliModalTienda4.textContent = "Premium"
    aliModalTienda5.textContent = "Usar Cupón"

    liModalTienda1.append(aliModalTienda1);
    liModalTienda2.append(aliModalTienda2);
    liModalTienda3.append(aliModalTienda3);
    liModalTienda4.append(aliModalTienda4);
    liModalTienda5.append(aliModalTienda5);

    ulModalTienda.append(liModalTienda1,liModalTienda2,liModalTienda3,liModalTienda4,liModalTienda5)
    modalTienda.append(ulModalTienda)


    const modalDescarga = document.createElement('div')
    const ulModalDescarga = document.createElement('ul');
    const liModalDescarga1 = document.createElement('li'); 
    const liModalDescarga2 = document.createElement('li'); 
    const liModalDescarga3 = document.createElement('li'); 
    const liModalDescarga4 = document.createElement('li'); 
    const liModalDescarga5 = document.createElement('li'); 
    const aliModalDescarga1 = document.createElement('a');
    const aliModalDescarga2 = document.createElement('a');
    const aliModalDescarga3 = document.createElement('a');
    const aliModalDescarga4 = document.createElement('a');
    const aliModalDescarga5 = document.createElement('a');

    modalDescarga.classList.add('modalDescarga');
    

    aliModalDescarga1.textContent = "Cliente";
    aliModalDescarga2.textContent = "Video";
    aliModalDescarga3.textContent = "Fondos de Pantalla"
    aliModalDescarga4.textContent = "Banda Sonora"
    aliModalDescarga5.textContent = "Cards"

    liModalDescarga1.append(aliModalDescarga1);
    liModalDescarga2.append(aliModalDescarga2);
    liModalDescarga3.append(aliModalDescarga3);
    liModalDescarga4.append(aliModalDescarga4);
    liModalDescarga5.append(aliModalDescarga5);

    ulModalDescarga.append(liModalDescarga1,liModalDescarga2,liModalDescarga3,liModalDescarga4,liModalDescarga5)
    modalDescarga.append(ulModalDescarga)


    //Imagenes Logos -Iconos -Header

    logoPearlA.setAttribute('src','/assets/loginAssets/img_network_bi.svg');
    logoBlackD.setAttribute('src', '/assets/loginAssets/logo_bdo_global.svg');
    userIcon.setAttribute('src', '/assets/loginAssets/user.png');
    networkIcon.setAttribute('src', '/assets/loginAssets/icn_globe.svg');

    //menu-Login

    const menuLogin= document.createElement('div')
    const loginButton= document.createElement('button')
    const createUserContainer = document.createElement('div')
    const iconCreateUser = document.createElement('img')
    const pCreateuser = document.createElement('p')

    iconCreateUser.setAttribute('src','../assets/loginAssets/agregar-usuario.png')
    pCreateuser.innerText ="Crear Cuenta"
    loginButton.textContent = "Iniciar Sesión"

    menuLogin.classList.add('menuLogin')
    createUserContainer.classList.add('createUserContainer')
    iconCreateUser.classList.add('iconCreateUser');
    loginButton.classList.add('loginButton');

    createUserContainer.append(iconCreateUser,pCreateuser)
    menuLogin.append(loginButton,createUserContainer)

    //modal-Login

    const modalLogin = document.createElement('div')

    const modalLoginForm = document.createElement('form')
    const titleLogin =document.createElement('h2')

    const userLoginContainer = document.createElement('div')
    const spanIconUser = document.createElement('span')
    const iconUserLogin = document.createElement('img')
    const inputUserLogin= document.createElement('input')

    const passwordLoginContainer = document.createElement('div')
    const spanIconPassword = document.createElement('span')
    const iconPasswordLogin = document.createElement('img')
    const inputPasswordLogin= document.createElement('input')
    inputPasswordLogin.setAttribute('type','password')

    const backgroundModalLogin = document.createElement('img')
    const buttonSignIn = document.createElement('button')

    const ForgoutPassContainer= document.createElement('div')
    const linkForgoutPass= document.createElement('a')

    const appsContainer= document.createElement('div')
    const titleIconContainer=document.createElement('p')
    const appsIconContainer= document.createElement('div')
    const facebookIcon = document.createElement('img')
    const googleIcon = document.createElement('img')
    const twitterIcon = document.createElement('img')

    titleLogin.innerText = "Login"
    buttonSignIn.innerText = "Sign In"
    linkForgoutPass.innerText="Forgot your password?"
    titleIconContainer.innerText="Or connect with"


    modalLogin.classList.add('modalLogin');
    modalLoginForm.classList.add('modalLoginForm');
    userLoginContainer.classList.add('userLoginContainer');
    passwordLoginContainer.classList.add('passwordLoginContainer');
    buttonSignIn.classList.add('buttonSignIn');
    backgroundModalLogin.classList.add('backgroundModalLogin');
    ForgoutPassContainer.classList.add('ForgoutPassContainer');
    appsIconContainer.classList.add('appsIconContainer');
    appsContainer.classList.add('appsContainer');

    iconUserLogin.setAttribute('src', '../assets/loginAssets/user.png');
    iconPasswordLogin.setAttribute('src', '../assets/loginAssets/candado-abierto.png');
    backgroundModalLogin.setAttribute('src', '../assets/loginAssets/DarkKnight.png');
    facebookIcon.setAttribute('src', '../assets/loginAssets/facebook.png');
    googleIcon.setAttribute('src', '../assets/loginAssets/googleIcon.png');
    twitterIcon.setAttribute('src', '../assets/loginAssets/twiterIcon.png');
    inputUserLogin.setAttribute('placeholder', 'email');
    inputPasswordLogin.setAttribute('placeholder', 'password');


    spanIconUser.append(iconUserLogin);
    spanIconPassword.append(iconPasswordLogin);
    userLoginContainer.append(spanIconUser,inputUserLogin);
    passwordLoginContainer.append(spanIconPassword,inputPasswordLogin);
    modalLoginForm.append(titleLogin,userLoginContainer,passwordLoginContainer,buttonSignIn,ForgoutPassContainer);
    ForgoutPassContainer.append(linkForgoutPass)
    appsIconContainer.append(facebookIcon,googleIcon,twitterIcon)
    appsContainer.append(titleIconContainer,appsIconContainer)
    modalLogin.append(modalLoginForm,backgroundModalLogin,appsContainer)


    
    //Append Elementos
    aliNav1.append(aSpan1);
    aliNav2.append(aSpan2);
    aliNav3.append(aSpan3);
    aliNav4.append(aSpan4);
    aliNav5.append(aSpan5);
    liNav1.append(aliNav1, modalNoticias);
    liNav2.append(aliNav2,modalCampamento);
    liNav3.append(aliNav3,modalInfoJuego);
    liNav4.append(aliNav4,modalTienda);
    liNav5.append(aliNav5,modalDescarga);
    ulNav.append(liNav1,liNav2,liNav3,liNav4,liNav5)
    userIconContainer.append(userIcon,menuLogin)
    navInfoContainer.append(logoBlackD,ulNav)
    iconsContainer.append(networkIcon,userIconContainer)
    navUp.append(logoPearlA)
    navDown.append(navInfoContainer,iconsContainer)
    containerNav.append(navUp,navDown)

    //**BACKGROUND

    const backgroundDragan =document.createElement('img');
    const backgroundVillage =document.createElement('img');
    const backgroundOcean =document.createElement('img'); 


    // Agregando clases backkground
    backgroundContainer.classList.add('background_container');
    backgroundDragan.classList.add('background_dragan');
    backgroundVillage.classList.add('background_village');
    backgroundOcean.classList.add('background_ocean');
    backgroundDragan.classList.add('background');
    backgroundVillage.classList.add('background');
    backgroundOcean.classList.add('background');
    
    //Append Elementos
    backgroundContainer.append(backgroundDragan,backgroundVillage,backgroundOcean);



    //////////////**FOOTER *////////////////////

    const textFooter =document.createElement('p');
    const aFooter = document.createElement('a');

    textFooter.innerText="Copyright© 2022 | Created by ";
    aFooter.innerText="Franz Cristhians Minaya";

    aFooter.setAttribute('href', 'https://github.com/ElesisIzanami');

    textFooter.append(aFooter)
    containerFooter.append(textFooter)

    containerFooter.classList.add('footer-container');




    //**CONTAINER LOGIN
    containerLogin.classList.add('containerLogin');
    containerLogin.append(containerNav,backgroundContainer,containerFooter,modalLogin);
    

    ///open Modal Login

        //trayendo datos del Usuario anterior
    let userIdLogin=""
    let user=""
    onGetUserData((responseUserData)=>{
        responseUserData.forEach(element=>{  
            user=element
            userIdLogin=element.id     
        })
     })

     //evento del boton Iniciar Sesion
    loginButton.addEventListener('click',()=>{
        console.log("Abriendo Modal de Inicio")
        modalLogin.classList.add('active');
        if (user){
            console.log("borrando usuario anterior")
            deleteUser(userIdLogin)
        }
    })

     //evento del boton crearusuario
    createUserContainer.addEventListener('click',()=>{
        console.log("Creando Usuario")
       navegando('/createAccount')
    })

    //evento para desaparecer el modalLogin 
     document.addEventListener('click', (event) => {
        const targetElement = event.target;
    
        // Si el clic ocurre fuera del modal, ocultarlo
        if (!modalLogin.contains(targetElement) && !loginButton.contains(targetElement)) {
            modalLogin.classList.remove('active');
        }
    });

    //evento del boton SignIn para entrar con correo y contraseña
    buttonSignIn.addEventListener('click',(e)=>{
        e.preventDefault()

        console.log("RUMBO A WALL ...")
        loginEmailPassword(navegando,inputUserLogin.value,inputPasswordLogin.value);

        userDataGoogle(inputUserLogin.value.split('@')[0],"","","")
        console.log("NOMBRE CORTADO",inputUserLogin.value.split('@')[0])
    })


    //evento del boton Google para entrar con cuenta Google
    googleIcon.addEventListener('click',()=>{
            LoginWithGoogle(navegando)      
    })



    return containerLogin;
}

export default login;