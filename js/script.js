'use strict'



let modal = document.querySelector('.div-modal-mask'),
    imagemodal = document.getElementById('imagemodal');

let divModalVideo = document.querySelector('.div-resource-modal');


const pathImages = "../photoStudio/resources/images/";
const pathVideos = "../photoStudio/resources/images/videos/";
const pathImagesBoda = "boda/";
const pathImagesXV = "xv/"
const pathImagesBautizos = "bautizos/"
const pathImagesPresentacion = "presentacion/"





function openViewImage(imageSrc){
    modal.classList.add('show-modal');
    const imageElement = document.createElement('img');
    imageElement.controls = true; // Muestra los controles del video
    imageElement.style.width = '100%'; // Establece el ancho del video al 100%

    // Precargar el video
    imageElement.src = imageSrc;

    // Agregar el video al div modal
    divModalVideo.innerHTML = ''; // Limpiar cualquier contenido previo
    divModalVideo.appendChild(imageElement);
}

function openViewVideo(videoSrc){
    modal.classList.add('show-modal');
    const videoElement = document.createElement('video');
    videoElement.controls = true; // Muestra los controles del video
    videoElement.style.width = '100%'; // Establece el ancho del video al 100%

    // Precargar el video
    videoElement.src = videoSrc;
    videoElement.preload = 'auto';

    // Agregar el video al div modal
    divModalVideo.innerHTML = ''; // Limpiar cualquier contenido previo
    divModalVideo.appendChild(videoElement);
}

function closeModal(){
    modal.classList.remove('show-modal');
}

function preloadImages(images) {
    for (const imageSrc of images) {
        const img = new Image();
        img.src = imageSrc;
    }
}

function sendMessageWhatsApp(message){
    const url = `https://api.whatsapp.com/send?phone=7221200782&text=${message}`;
    window.open(url, '_blank');
}

// CArgando imagenes de la boda
preloadImages([pathImages + pathImagesBoda + 'boda1.webp',
               pathImages + pathImagesBoda + 'boda2.webp',
               pathImages + pathImagesBoda + 'boda3.webp',
               pathImages + pathImagesBoda + 'boda4.webp']);

preloadImages([pathImages + pathImagesXV + 'quince1.webp',
               pathImages + pathImagesXV + 'quince2.webp',
               pathImages + pathImagesXV + 'quince3.webp',
               pathImages + pathImagesXV + 'quince4.webp']);


preloadImages([pathImages + pathImagesBautizos + 'bau1.webp',
               pathImages + pathImagesBautizos + 'bau2.webp',
               pathImages + pathImagesBautizos + 'bau3.webp',
               pathImages + pathImagesBautizos + 'bau4.webp']);

preloadImages([pathImages + pathImagesPresentacion + 'present1.webp',
               pathImages + pathImagesPresentacion + 'present2.webp',
               pathImages + pathImagesPresentacion + 'present3.webp',
               pathImages + pathImagesPresentacion + 'present4.webp']);


function preloadVideo(videoSrc) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'auto'; // Indica al navegador que precargue el video completamente
    video.addEventListener('loadeddata', function() {
        // El video está completamente cargado, puedes usarlo como desees.
        console.log('Video precargado:', videoSrc);
    });
}

preloadVideo(pathVideos + 'video.mp4');


function detectarDispositivo() {
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;

    // Establecer umbrales para detectar laptops y tablets
    var umbralLaptop = 600; // Por ejemplo, 1024 píxeles de ancho
    var umbralTablet = 1100; // Por ejemplo, 600 píxeles de ancho

    if (anchoVentana >= umbralLaptop) {
        alert('Para una mejor experiencia, te recomendamos ver esta página en un dispositivo movil (celular)');
    } else if (anchoVentana >= umbralTablet) {
        alert('Para una mejor experiencia, te recomendamos ver esta página en un dispositivo movil (celular)');
    } 
}


detectarDispositivo();


function navigatedBlur(location){
    window.location.href = location;
}

function mostrarConfirmacion() {
  var respuesta = confirm("Pagina aún en confirmación | FALTA CONFIRMACIÓN");

  if (respuesta) {
      // El usuario hizo clic en "Aceptar"
      mostrarConfirmacion(); // Llamar a la función nuevamente
  } else {
      // El usuario hizo clic en "Cancelar" o cerró el cuadro de diálogo
      mostrarConfirmacion(); // Llamar a la función nuevamente
  }
}

//mostrarConfirmacion();