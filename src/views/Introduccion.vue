<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .bg-1.p-4
      .row.align-items-center.bg-white.bx-sh1.p-3(data-aos="fade")
        .col-lg-1.col-md-2.col-3.mb-3.mb-md-0
          img.px-lg-2(src="@/assets/curso/temas/intro/ico.svg", alt="")
        .col-lg-11.col-md-10
          p.mb-0 Para comenzar con el estudio del componente formativo, lo invitamos a ver el siguiente video.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6x0AjWjF3WM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Servicios de voz sobre IP


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
