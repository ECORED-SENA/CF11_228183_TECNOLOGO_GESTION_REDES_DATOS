<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.pb-0.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Software</em> Pbx VoIP: Asterisk

    
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 Asterisk es tanto una plataforma de telefonía como una central de 
            em software 
            | (PBX) de código abierto. Como cualquier central PBX ,permite interconectar teléfonos y conectar dichos teléfonos a la red telefónica pública. Su nombre viene del símbolo asterisco (*) en inglés. El creador original de esta centralita es Mark Spencer de la compañía Digium, que sigue siendo el principal desarrollador de las versiones estables. Al ser de código libre, existen multitud de desarrolladores que han aportado funciones y nuevas aplicaciones. Originalmente fue creada para sistemas Linux pero hoy en día funciona también en sistemas OpenBSD, FreeBSD, Mac OSX, Solaris Sun y Windows, aunque Linux sigue siendo la que más soporte presenta. El paquete básico de Asterisk incluye muchas características que antes solo estaban disponibles en caros sistemas propietarios como creación de extensiones, envío de mensajes de voz a email, llamadas en conferencia, menús de voz interactivos y distribución automática de llamadas.
      .col-lg-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img.png", alt="")


    Separador 

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.1  ¿Qué es Asterisk?
      

    .row
      .col-lg-9(data-aos="fade-right")
        p Es un marco creado por desarrolladores para desarrolladores, que permite la innovación en el área de comunicaciones para manejo de voz y video sobre IP, en tiempo real, crear aplicaciones nuevas o utilizar soluciones pre construidas por los miembros de la comunidad, soluciones abiertas y listas para descargar.
        .row.align-items-center.mb-3.mb-lg-0
          .col-md-3.mb-3.mb-md-0
            img(src="@/assets/curso/temas/t1/img3.png", alt="")
          .col-md-9
            .bg-1.p-3
              p.mb-0 Estas características de Asterisk la han vuelto seductora para muchas empresas que quieren efectuar su infraestructura telefónica, al mismo tiempo que las empresas comercializadoras de servicios y productos telefónicos, aprovechan esta preferencia por Asterisk para desarrollar 
                em hardware 
                | compatible con esta central telefónica.
      .col-lg-3(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img2.png", alt="")



    Separador 

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.2  Arquitectura de Asterisk

    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La arquitectura de Asterisk se basa en un sistema modular dependiente de un núcleo central, en el cual se encuentran varios componentes como el cargador de módulos, el temporizador del sistema, el núcleo de la central PBX, y las interfaces del sistema. Este diseño modular le aporta flexibilidad y le permite utilizar cualquier 
          em software 
          | y tecnología conveniente que se encuentre disponible, independiente si son actuales o futuras.
        p En la siguiente figura se muestra el esquema general de los subsistemas que forman Asterisk.
      .col-lg-5(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img4.svg", alt="")

    .row.fondo1-tema1.align-items-center.py-4.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-8.mb-5(data-aos="fade-down") 
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 1.] Esquema subsistemas Asterisk
            figure
              img.bx-sh3(src="@/assets/curso/temas/t1/fig1.svg", alt="La imagen presenta el esquema general de los subsistemas que forman Asterisk.")

          p.mb-4(data-aos="fade") Y los componentes principales de la arquitectura del esquema anterior, se detallan a continuación:

          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
            img(src="@/assets/curso/temas/t1/img5.png", alt="")
          .col-lg-8.mb-4(data-aos="fade-left")
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
              .row(titulo="Cargador de módulos")
                .col-md-11.mb-4.mb-md-0
                  p #[em Dynamic module loader], cada vez que inicia Asterisk, su función es la carga e inicialización de los drivers que se requieren, por medio del archivo modules.conf que hace parte de los archivos de configuración en texto plano que gobiernan las operaciones de Asterisk.
              .row(titulo="Núcleo de la central")
                .col-md-11.mb-4.mb-md-0
                  p #[em PBX Switching], se encarga de conectar y conmutar las llamadas entrantes de diferentes hardware y software, de manera transparente, según lo definido en el plan de marcación, este núcleo es la esencia de Asterisk.
              .row(titulo="Lanzador de aplicaciones")
                .col-md-11.mb-4.mb-md-0
                  p #[em Application Launcher], subsistema empleado por el núcleo PBX para ejecutar aplicaciones o servicios necesarios, como activar el buzón de voz o listar directorios o activar el mensaje de bienvenida.
              .row(titulo="Traductores de <em>codecs</em>")
                .col-md-11.mb-4.mb-md-0
                  p #[em Codec Translator], este componente realiza la codificación y decodificación de los diferentes formatos de audio y video, de manera que se entiendan, y en el caso de los #[em codecs], que fluyan entre los canales, así sean de formatos diferentes.
              .row(titulo="Temporizador y gestor de entradas y salidas")
                .col-md-11.mb-4.mb-md-0
                  p #[em Schedule and IO Manager], sin importar las condiciones de carga, este componente maneja las tareas de bajo nivel, de manera que el sistema funcione de manera óptima.

          p.mb-4(data-aos="fade") Respecto a las Interfaces de Programación de Aplicaciones o API’s, Asterisk emplea cuatro estructuras básicas definidas:

          .row.align-items-center
            .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
              TabsA.color-acento-botones
                .tarjeta.bg-3.p-4(titulo="Asterisk <em>Channel</em> API")
                  h4 Asterisk #[em Channel] API
                  p Esta API controla las llamadas del sistema y permite que el núcleo se conecte con las fuentes, independientemente de la tecnología; paquetes de voz o fuentes TDM (fuentes de Divisores por Multiplexión de Tiempo, uno de los tipos más comunes de infraestructura de voz), de manera que se cargan diferentes módulos que permitan manejar las capas de bajo nivel de cada componente.
                .tarjeta.bg-3.p-4(titulo="Asterisk <em>Application</em> API")
                  h4 Asterisk #[em Application] API
                  p Interfaz para la ejecución de aplicaciones que desarrollan diferentes funciones dentro del sistema, como por ejemplo: buzón, conferencias y demás aplicaciones inherentes al sistema, también permite el desarrollo de nuevas aplicaciones que interactúen con el núcleo PBX.
                .tarjeta.bg-3.p-4(titulo="<em>Codec Translator</em> API")
                  h4 #[em Codec Translator] API
                  p O API de traducción de #[em codecs], en esta API se cargan los módulos que contienen los #[em codecs] necesarios para la codificación y decodificación de los diferentes formatos de #[em codecs].
                .tarjeta.bg-3.p-4(titulo="Asterisk <em>File Format</em> API")
                  h4 Asterisk #[em File Format] API
                  p API para el formato de ficheros, permite que Asterisk pueda leer y escribir en diferentes formatos MP3, WAV, AU, etc.
            .col-lg-2(data-aos="fade-left")
              img(src="@/assets/curso/temas/t1/img6.png", alt="")

    .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Concepto de canales de Asterisk

    p.mb-4(data-aos="fade") Un canal es un tipo de conexión a través del cual Asterisk recibe todas las llamadas, incluidas las internas. El canal se activa al momento en que un usuario descuelga un teléfono y el plan de marcado o DIALPLAN determina qué hacer con la llamada que se enruta a través del canal activo.

    .row.align-items-center.mb-4
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/img7.svg", alt="")
      .col-lg-7(data-aos="fade-left")
        .cajon-b.color-acento-contenido.p-3.ps-0
          p.mb-0 Cada tipo de canal disponible posee un 
            em driver 
            | específico, algunos de los canales que se pueden identificar son el canal H.323 es un canal de protocolo VoIP para las comunicaciones que emplean el protocolo H.323, así como el canal IAX2 a su vez para protocolos IAX2 protocolo de intercambio de Asterisk, el canal DAHDI para líneas de la RTB (red telefónica básica) analógicas y digitales, el canal 
            em bluetooth 
            | que le permite el uso de dispositivo 
            em bluetooth 
            | o los Canales SIP que son canales utilizados para enrutar llamadas tanto hacia adentro como hacia afuera, utilizan el protocolo SIP a través de IP, es el más comúnmente utilizado.
        p El DIALPLAN o plan de marcación, es fundamental por ser el que define el comportamiento lógico que tomará la PBX, determina qué acciones tomar tanto para llamadas entrantes como salientes, en Asterisk este DIALPLAN es configurable completamente, por lo que es importante entenderlo bien; a su efecto sobre la llamada se le conoce como el flujo o secuencia de la llamada.

    .row.fondo2-tema1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-12
            .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
              h3.text-white.mb-0 Ejemplo de llamada
          
          p.mb-4(data-aos="fade") En una llamada y como se observa en la imagen a continuación, la invitación del cliente a través del canal SIP se gestiona por el monitor thread (monitor de concurrencia), generando un nuevo hilo para ser procesado por el PBX Core, quien determina encaminar la petición al canal Dahdi, quien es el encargado de comunicar con las líneas RTB (Red Telefónica Básica); para definir la estructura de la llamada se utiliza struct ast_chan. De manera gráfica, se representa el proceso del funcionamiento básico de una llamada en Asterisk:

          .col-lg-8(data-aos="fade-down") 
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 2.] Ejemplo
            figure.bx-sh1
              img(src="@/assets/curso/temas/t1/fig2.svg", alt="Imagen que presenta un ejemplo del proceso del funcionamiento básico de una llamada en Asterisk.")


    .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Aplicaciones

    p.mb-4(data-aos="fade") Son muchas las aplicaciones posibles para esta plataforma, debido a que la esencia de Asterisk se basa en su funcionamiento. Como una PBX, ofrece múltiples acciones aplicables en el plan de marcado, por lo cual hacen parte integral del formato de construcción del DIALPLAN; para el manejo de las llamadas, poseen características comunes como el estar enfocadas por y para los canales, son cargadas dinámicamente y ejecutadas de manera sincrónica, su formato clásico es app_&#60;nombre&#62;.so; dentro de las principales se pueden identificar:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/img8.png", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="<em>Dial</em>") Para realizar una llamada saliente, aplicación clásica realizada las PBX, recibir la llamada y pasarla a otro dispositivo, su sintaxis tiene múltiples combinaciones y su uso dependerá de lo que se desee parametrizar en el DIALPLAN.
          p(numero="2" titulo="<em>Hangup</em>") Para colgar la llamada, es muy conveniente ubicarla siempre al final de un proceso para colgar nuestra llamada en caso de que el usuario cuelgue en su extensión, pues no se cuelga automáticamente la nuestra.
          p(numero="3" titulo="<em>Playback</em>") Reproduce un fichero de sonido; la aplicación ocupará el canal durante su funcionamiento por lo que no se permitirá disparar otras funciones mientras esto sucede; permite parametrizar opciones además de recibir el archivo para ser reproducido.
          p(numero="4" titulo="<em>Goto</em>") Salta a otra extensión o a otro contexto dentro del plan de marcación, en un momento determinado, es decir, según la prioridad definida. Puede emplearse a su vez, la aplicación #[em Gotoif], en la cual se incluye una expresión regular condicional para el redireccionamiento.
          p(numero="5" titulo="AGI") Llama a una aplicación externa.
          p(numero="6" titulo="<em>Answer</em>") Aplicación responder; es importante analizar el momento de usarla por la importancia de “responder”, porque equivale a descolgar, por lo que conviene saber si las aplicaciones siguientes requieren realmente que el canal esté “contestado” para su funcionamiento o aún no es necesario.

    p.mb-4(data-aos="fade") A nivel general, las aplicaciones en Asterisk hacen posible la implementación de funcionalidades como buzón de voz automático personalizado por usuario, e integrado con el sistema de directorio y con el email con características de protección por contraseña, múltiples carpetas por defecto, así como saludos personalizados, reenvío del buzón de voz, mensaje de tono de marcado en espera e indicador visual de mensaje en espera.

    .row.fondo3-tema1.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.align-items-center.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .bg-7.p-3.px-4.mb-4
                p.mb-0 También la utilización de sistema de conferencias para reuniones virtuales de diferentes usuarios con control de usuarios y gestión de conferencia sin temporizadores, o de un sistema automático de distribución de llamadas entrantes con posibilidades de enrutamiento, priorización de colas, contemporización de la programación diaria.
              .row.align-items-center.mb-3.mb-lg-0
                .col-md-3.mb-3.mb-md-0
                  img(src="@/assets/curso/temas/t1/img10.svg", alt="")
                .col-md-9
                  p.mb-0 En la página oficial de Asterisk ,puede encontrarse actualizada la totalidad de aplicaciones disponibles para el #[em dial plan].
            .col-lg-5(data-aos="fade-left")
              img(src="@/assets/curso/temas/t1/img9.png", alt="")


          p.mb-4(data-aos="fade") Para ampliar la información sobre la Gestión de VoIP, lo invitamos a ver el siguiente video.

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/aowupxB2gtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Arquitectura Asterisk




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
