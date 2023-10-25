<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.pb-0.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Software</em> Pbx VoIP: FreeSwitch

    .fondo1-tema2.p-3
      .row.align-items-center
        .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/temas/t2/img.png", alt="")
        .col-lg-8(data-aos="fade-left")
          p Desarrollado a partir de la identificación de las limitaciones de Asterisk, realizada por Anthony Minessale, quien luego de añadir funcionalidades a este, decidió reescribir el 
            em software 
            | completamente, lo que lo llevó a desarrollar desde cero esta plataforma que inicialmente se conoció como Soft-Switch.


    Separador 

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.1 ¿Qué es FreeSwitch?

    .fondo2-tema2.p-3
      .row
        .col-lg-9(data-aos="fade-right")
          p Es un sistema de comunicaciones parametrizable, 
            em software 
            | de código abierto, que es posible implementar en 
            em hardware 
            | básico. Surge para tener una mejor plataforma para Asterisk, reutilizando componentes y bibliotecas ya existentes. Este sistema de comunicaciones parametrizable, maneja audio, voz y texto, permitiendo conectar computadoras, tabletas, telefonía móvil, fax.
        .col-lg-3(data-aos="fade-left")
          img(src="@/assets/curso/temas/t2/img2.svg", alt="")


    Separador 

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.2  Arquitectura FreeSwitch

    .row.fondo3-tema2.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.align-items-center.mb-5
            .col-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t2/img3.svg", alt="")
            .col-lg-10(data-aos="fade-left")
              p FreeSwitch es 
                em software 
                | libre, podría funcionar como PBX, operador de telefonía, 
                em softphone, 
                | servidor de registros, servidor de conferencias, servidor de fax, servidor de aplicaciones, en su configuración es importante tener en cuenta la seguridad y la calidad de voz. Se ejecuta en los diversos sistemas operativos tales como Windows, Mac, Linux, Solaris y soporta diversos lenguajes. A continuación, se presenta el esquema de la arquitectura de FreeSwitch:

          .col-lg-12(data-aos="fade-down") 
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 3.] Arquitectura FreeSwitch
            figure
              img(src="@/assets/curso/temas/t2/fig3.svg", alt="Imagen que presenta el esquema de la arquitectura de FreeSwitch.")

    p(data-aos="fade")  La arquitectura de FreeSwitch se basa en un sistema modular en el que se tiene un #[em core] o núcleo, donde registra el sistema base para todos los módulos, sin embargo, la mayoría de las funcionalidades están implementadas en cada uno de los módulos de manera independiente.
    p.mb-4(data-aos="fade")  Algunas de las características relevantes en los componentes de la arquitectura FreeSwitch, son:

    .fondo4-tema2
      .row.align-items-center
        .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/temas/t2/img4.png", alt="")
        .col-lg-8(data-aos="fade-left")
          SlyderF.p-3(columnas="col-md-6")
            .tarjeta.color-primario.p-4.text-white.text-center.d-flex.justify-content-center.flex-column
              h4 Núcleo
              p El #[em core] no depende de los módulos para ser iniciado.
            .tarjeta.color-primario.p-4.text-white.text-center.d-flex.justify-content-center.flex-column
              h4 Módulos
              p Cada módulo ofrece una funcionalidad específica. Son independientes entre sí lo cual conlleva a la escalabilidad del sistema.
            .tarjeta.color-primario.p-4.text-white.text-center.d-flex.justify-content-center.flex-column
              h4 Evento
              p Son las actividades que ocurre en el sistema Al registrarse un evento evita que todo el sistema se vea afectado.
            .tarjeta.color-primario.p-4.text-white.text-center.d-flex.justify-content-center.flex-column
              h4 #[em Codecs]
              p FreeSwitch soporta una amplia variedad de #[em codecs].
            .tarjeta.color-primario.p-4.text-white.text-center.d-flex.justify-content-center.flex-column
              h4 Sistema modular
              p Escalable, capacidad de extender el #[em core], implementar componentes sin romper la funcionalidad.

    Separador 

    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.3 Ejemplo de llamada

    .row.fondo5-tema2.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-7.mb-4
            p En la siguiente imagen se puede visualizar cómo es el proceso de llamada en un sistema FreeSwitch.
            p Se recibe la invitación del cliente y administrado por el 
              em.bg-2.fw-bold.text-white.px-1 monitor_thread
              |  será 
              em.bg-2.fw-bold.text-white.px-1 mod_sofia
              |  el encargado de llamar al 
              em.bg-2.fw-bold.text-white.px-1 switch_core_session_request
              | , establecer un perfil de llamada 
              em.bg-2.fw-bold.text-white.px-1 caller profile
              |  y que sea generado un nuevo hilo en la máquina de estado. Esta enrutará y ejecutará el estado colocando en funcionamiento las funciones necesarias que a través de 
              em.bg-2.fw-bold.text-white.px-1 mod_openzap
              |  permite establecer la comunicación con la red de telefonía básica. Es preciso indicar que la estructura de la llamada viene definida en 
              em.bg-2.fw-bold.text-white.px-1 switch_core_session
              | .
          .col-lg-5.mb-4
            img(src="@/assets/curso/temas/t2/img5.png", alt="")


          .col-lg-7.mb-4
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 4.] Ejemplo
            figure.bx-sh2
              img(src="@/assets/curso/temas/t2/fig4.svg", alt="Imagen que presenta el proceso de llamada en un sistema FreeSwitch.")




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
