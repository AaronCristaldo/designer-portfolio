<template>
    <button @click="openEmailClient" class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0">
      Contactame
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      openEmailClient() {
        const email = 'aaroncristaldo5@gmail.com';
        const subject = 'Contacto desde tu sitio web';
        const body = 'Hola, me interesa obtener más información.';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
      }
    }
  };
  </script>

  