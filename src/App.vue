<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img class="rounded-full border border-gray-100 shadow-sm"
            src=".\assets\micara.png"
            alt="user image" />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>Mi Trabajo</a></li>
            </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans">
          👋 Hola,
        </h3>
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700">
          Soy
          <a href="https://www.linkedin.com/" target="_blank" class="text-black hover:underline">
            Aaron Cristaldo</a><br />Desarrollador de Aplicaciones Multiplataforma
        </h1>

        <div class="md:flex gap-1 md:gap-10">
          <button class="text-white bg-gray-800 submit-button hidden md:block">
            <a href="#work" v-smooth-scroll>Mi trabajo</a>
          </button>
          <!-- <button class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0" @click="openEmailClient">
            Contactame
          </button> -->
          <ContactButton />
        </div>
      </div>

      <div class="w-8/12 flex justify-end">
        <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/about22.png" alt="user image" />
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5" style="color: white;">Mi Trabajo</h3>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Todo List</h4>
        <p class="font-work_sans pr-12">
            Una aplicacion sencilla para guardar tus tareas del dia a dia.
        </p>
        <a href="https://www.amazon.es/Aaron-TodoList/dp/B0DW568SR6?dib=eyJ2IjoiMSJ9.YhgRWGgOH5L1tzAS0Q5BTd-PrAaSjT8DQ8qLfpSBPjhmtnsbrheH_rNUZWKov-dYkHHRjySvdiOgQOS2QIkie5VgaCp8EcmKifgB0JWp3YtGwyz4_A3qDeat09sT3w4ntcQ3F2FDktuxIJlEConNpO7laHR6YYI68hUS_8QvJNx9YjRjKgRGrDPB2uQWVZq7.WY4uEZyHIaipm34XZmxxfrSeIA8MRSp3Dz5hOnlhvhs&dib_tag=se&qid=1739156102&refinements=p_4%3AAaron&s=mobile-apps&search-type=ss&sr=1-5" target="_blank">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Link Descarga
          </button>
        </a>
      </div>
      <div class="bg-green-100">
        <img class="object-cover  h-72 md:h-96" src="./assets/Screenshot_4.png" />
      </div>
      <div class="card-image bg-green-100">
        <video class="object-cover w-full h-72 md:h-96" autoplay loop muted>
          <source src="./assets/todoList.mp4" type="video/mp4" />
        </video>
      </div>
      
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Shoping List</h4>  
        <p class="font-work_sans pr-12">
          Una aplicacio per simular compres les e indicar si s'han comprat
        </p>
        <a href="https://www.amazon.com/gp/product/B0DWMYXRKG" target="_blank">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Link Descarga
          </button>
        </a>
      </div>
      <div class="bg-green-100">
        <img class="object-cover w-full h-48 md:h-96" src="./assets/carrito.png" />
      </div>
      <div class="card-image bg-green-100">
        <!-- <video class="object-cover w-full h-72 md:h-96" autoplay loop muted>
          <source src="./assets/todoList.mp4" type="video/mp4" />
        </video> -->
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Weather App</h4>
        <p class="font-work_sans pr-12">
          Una app que en base a la teva ubicacio et diu el temps.
        </p>
        <a href="https://apkpure.com/p/aaroncristaldo.weatherapp2" target="_blank">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Link Descarga
          </button>
        </a>
      </div>
      <div class=" bg-green-100">
        <img class="object-cover w-full h-72 md:h-96" src="./assets/nube.png" />
      </div>
      <div class="card-image bg-green-100">
        <!-- <video class="object-cover w-full h-72 md:h-96" autoplay loop muted>
          <source src="./assets/todoList.mp4" type="video/mp4" />
        </video> -->
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Food Scanner</h4>
        <p class="font-work_sans pr-12">
          Una app que al escanajar un producte et diu les seves carectaristicas
        </p>
        <a href="https://www.amazon.com/gp/product/B0DWM97BSS" target="_blank">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Link Descarga
          </button>
        </a>
      </div>
      <div class="bg-green-100">  
        <img class="object-cover w-full h-72 md:h-96" src="./assets/sandia.png" />
      </div>
      <div class="e bg-green-100">
        <video class="object-cover  h-72 md:h-96" autoplay loop muted>
          <source src="./assets/foodScanner.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="bg-green-100">
        <img class="object-cover w-full h-72 md:h-96" src="./assets/historial.png" />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Roll</h4>
        <p class="font-work_sans pr-12">
          Una app que se encarga de simular una partida de D&D(Dragones y mazmorras) con todo lo que incluye una partida convencional.
        </p>
        <a href="https://www.amazon.com/gp/product/B0DWM97BSS" target="_blank">
          <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Link Descarga
          </button> -->
        </a>
      </div>
      <div class="bg-green-100">  
        <img class="object-cover w-full h-72 md:h-96" src="./assets/ic_launcher.webp" />
      </div>
      <!-- <div class="e bg-green-100">
        <video class="object-cover  h-72 md:h-96" autoplay loop muted>
          <source src="./assets/foodScanner.mp4" type="video/mp4" />
        </video>
      </div> -->
      <!-- <div class="bg-green-100">
        <img class="object-cover w-full h-72 md:h-96" src="./assets/historial.png" />
      </div> -->
    </div>
  </div>

  


  
  

  <div class="banner-2 md:flex items-center md:justify-evenly" id="about">
    <img class="md:h-[500px] h-[400px]" src="./assets/profile.png" alt="user image" />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2 " style="color: white;">
      <h4 class="project-title item text-white-800">Sobre Mí</h4>
      <p class="font-work_sans">
        Soy Aarón Cristaldo ,vivo en Reus, España. Ahora mismo trabajo en una empresa de desarrollo de software.
        <br />
        He estudiado en el Baix Camp y también he trabajado en varias empresas como gestor.
        Además Mis hobbies principales son jugar a vidiojuegos y ver series y peliculas.
      </p>
      <button class="text-sky-800 font-bold text-2xl tracking-wider">
        <a href="https://drive.google.com/file/d/1H5rAgwFTkfcnsIoX9jKp2NBcSFg7xiwP/view?usp=sharing" target="_blank">Curriculum</a>
      </button>
    </div>
  </div>

  <div class="banner-1 flex h-full items-center">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-6xl text-2xl font-Eczar mb-5 font-bold">
        Trabajemos juntos e innovemos.
      </h2>
      <a class="underline text-2xl text-blue-600 font-work_sans">📧 aaroncristaldo@gmail.com</a>
    </div>
    <div class="w-5/12 pr-28">
      <div class="flex flex-wrap justify-end gap-2">
      </div>
    </div>
  </div>
</template>
<script>
import ContactButton from './components/ContactButton.vue';  // Ajusta la ruta según la ubicación de tu componente

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  components: {
    ContactButton  // Registra el componente
  }
}
</script>
