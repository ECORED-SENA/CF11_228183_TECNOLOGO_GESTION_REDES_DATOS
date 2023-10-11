<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de fallos

    .row.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.ps-0
          p.mb-0 La gestión de fallos se basa fundamentalmente en detectar y subsanar todos aquellos malfuncionamientos que puedan surgir durante el desarrollo de las funciones de cualquier sistema, y puede desarrollarse bien sea de manera proactiva, si sus especificaciones se dirigen a la anticipación de fallos, o de manera reactiva, en caso que su gestión se desarrolle posteriormente a la ocurrencia de estos.
        p Así las cosas, al aplicarse gestión de fallos proactiva, las herramientas utilizadas se basarán en tareas de monitoreo a los parámetros del sistema identificados como críticos y determinantes, para la probabilidad de ocurrencia que pueden ser las pérdidas en la red, las llamadas simultáneas o el retardo.
        .row.align-items-center.mb-3.mb-lg-0
          .col-md-3.mb-3.mb-md-0
            img(src="@/assets/curso/temas/t3/img2.png", alt="")
          .col-md-9
            .bg-1.p-3
              p.mb-0 Si se trata de gestión reactiva por su parte, será fundamental la respuesta rápida a la identificación y ocurrencia del fallo, siendo la minimización en los tiempos de respuesta su foco principal.
      .col-lg-3(data-aos="fade-left")
        img(src="@/assets/curso/temas/t3/img.svg", alt="")


    Separador 

    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.1  Gestión de fallos en Asterisk

    .row.align-items-center
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img3.svg", alt="")
      .col-lg-8(data-aos="fade-left")
        p Asterisk genera archivos #[em logfiles], que registran lo que sucede en un periodo de tiempo, estos archivos son la herramienta para obtener los datos sobre los errores por medio de cat/var/log/asterisk/full.
        p Para la depuración, existen también aplicaciones como NoOp() que significa sin operación, la cual facilita la depuración en tiempo real; Verbose que funciona igual que NoOp pero a diferencia de esta, Verbose permite especificar el nivel de detalle, o DumpChan, que arroja la información del canal en curso.
        .bg-3.p-3
          p.mb-0 La estructura Tail también escribe la última parte de un archivo tail [opción..][archivo…], se utiliza para monitoreo de archivos de registro crecientes.


    Separador 

    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.2  Gestión de fallos en FreeSwitch

    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p En el sistema de FreeSwitch, para la gestión de fallos, se centra en consultar los logs files del módulo 
          em.bg-2.fw-bold.text-white.px-1 mod_logfile.
        .bg-4.p-3.mb-3
          p.mb-0 Ingresando mediante la consola con la secuencia cat/usr/local/FreeSwitch/log/FreeSwitch.log se podrá observar en detalle lo que ha sucedido en el sistema en tiempo real, como errores, 
          em warnings, 
          | alertas, notificaciones, información, etc.
        p Para información reciente se debe usar la orden tail –f que proporciona información detallada de las últimas operaciones.
      .col-lg-5(data-aos="fade-left")
        img(src="@/assets/curso/temas/t3/img4.png", alt="")


    Separador 

    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.3  Gestión de la configuración

    .row.align-items-center.mb-4
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img5.png", alt="")
      .col-lg-8(data-aos="fade-left")
        p La gestión de la configuración hace referencia a las acciones permanentes y periódicas de la red, de manera que se posea control del estado actual de la misma por medio de las tareas propias del ciclo de gestión de la configuración, que consiste en labores de monitoreo, mediante las cuales se recolecta información valiosa, a partir de la cual se toman decisiones oportunas de modificación de la configuración actual como parte de la gestión de cambios, y se generen a su vez, los reportes pertinentes del proceso, así como todos los cambios que tengan lugar en la red de datos, llámense actualizaciones, sustituciones, instalación de 
          em hardware 
          | y 
          em software, 
          | etc.

    .row.fondo-tema3.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
            h3.text-white.mb-0 Gestión de la configuración en Asterisk

          p.mb-4(data-aos="fade")  El proceso de configuración de esta central puede realizarse en modo texto (intérprete de comandos), o modo gráfico, el cual se recomienda para más facilidad y puede realizarse mediante el uso de FreePBX u otra interfaz gráfica, finalmente cualquier operación de la PBX se gobierna desde un fichero .conf sin importar su nivel. Algunos de los ficheros más conocidos son:

          .row.align-items-center.mb-4
            .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t3/img6.png", alt="")
            .col-lg-8(data-aos="fade-left")
              .bg-6.b-r12.p-4.mb-3 
                h4 asterisk.conf
                p.mb-0 Para la localización de todos los componentes de Asterisk como de sonido, scripts.
              .bg-6.b-r12.p-4.mb-3 
                h4 modules.conf
                p.mb-0 Indica cuáles son los módulos a cargar al inicializarse.
              .bg-6.b-r12.p-4.mb-3 
                h4 logger.conf
                p.mb-0 Determina dónde guardar los .log o archivos de registro y el nivel de detalle deseado.
              .bg-6.b-r12.p-4.mb-3 
                h4 manager.conf
                p.mb-0 Mediante la herramienta Asterisk manager, configura las restricciones de seguridad de conexión.
              .bg-6.b-r12.p-4.mb-3 
                h4 sip.conf
                p.mb-0 Instrucciones de configuración para interactuar utilizando el protocolo SIP, al igual que el fichero iax.conf para interactuar con el protocolo IAX o el h323.conf en el caso de interactuar con otros dispositivos y utilizar el protocolo h323

    .bg-5.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Gestión de la configuración en FreeSwitch

    p(data-aos="fade") El sistema FreeSwitch puede configurar los módulos, aplicaciones, extensiones a través de interfaces gráficas como FusionPBX, diligenciando las casillas habilitando/deshabilitando según corresponda. También de la misma manera que con Asterisk, FreeSwitch puede configurar mediante comandos, modificando los distintos archivos de configuración. Al iniciar FreeSwitch en log/FreeSwitch.xml.fsxml se almacena todos los archivos de configuración.
    p.mb-4(data-aos="fade") Los archivos de configuración se encuentran ubicados en el directorio conf en formato XML:

    .row 
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 autoload_configs
          p.mb-0 Contienen información de configuración para los módulos.
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 Dialplan
          p.mb-0 Configuración del plan de mercado.
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 #[em Directory]
          p.mb-0 Contiene los usuarios registrados para el uso del FreeSwitch como PBX.
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 jingle_profiles
          p.mb-0 Uso del protocolo.
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 #[em Lang]
          p.mb-0 Manejo del idioma.
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 mrcp_profiles
          p.mb-0 Uso de reconocimiento de voz.
      .col-lg-3.col-md-6.mb-3
        .t-hover3.p-4.h-100
          h4 sip_profiles
          p.mb-0 Parámetros de comunicación con SIP.
      .col-lg-3.col-md-6.mb-3
        img(src="@/assets/curso/temas/t3/img7.svg", alt="")


    Separador 

    #t_3_4
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.4  Gestión de la contabilidad

    .row.align-items-center.mb-4
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img8.png", alt="")
      .col-lg-8(data-aos="fade-left")
        p En este aspecto, la gestión consiste en la posibilidad de medir la red, de manera que sea posible determinar quién se excede en el uso del servicio, generar informes contables de uso, estadísticas de consumo y demás reportes útiles para la contabilidad, midiendo los parámetros de utilización de red, tanto de manera individual como en grupo y que puedan regularse de manera adecuada. Identificándose para esta gestión como objetivos principales la obtención de datos estadísticos que permitan la aplicación de tarifas, la gestión de usuarios autorizados mediante usuario, contraseña, permiso y las labores de administración de la operación de equipos tales como backups y sincronización.

    .row.fondo1-tema3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down") 

          .col-lg-12
            img(src="@/assets/curso/temas/t3/tarj.png", alt="")
          .row
            .col-lg-6.px-lg-0
              .bg-white.p-md-5.p-3.h-100
                .bg-5.p-2.px-4.b-r4.w-fit.mb-4
                  h3.text-white.mb-0 Gestión de la contabilidad en Asterisk
                p Asterisk permite la gestión de la contabilidad al igual que la gestión de la configuración por medio de modo texto (intérprete de comandos) o modo gráfico, recomendado para más facilidad. En el caso de FreePBX permite posibilidades de consulta de información de la ocurrencia de eventos en periodos de tiempo determinados, como la generación de estadísticas, la información de las llamadas activas, internas o externas, niveles de cargas del sistema, velocidad, números de canales activos entre otras características con las ventajas de una interfaz gráfica.  
            .col-lg-6.px-lg-0.linea-div
              .bg-white.p-md-5.p-3.h-100
                .bg-5.p-2.px-4.b-r4.w-fit.mb-4
                  h3.text-white.mb-0 Gestión de la contabilidad en FreeSwitch
                p El sistema FreeSwitch realiza la gestión de las configuraciones de administración o contabilidad, tales como registro de llamadas, estadísticas, porcentajes, datos de la red, facturación, estados, duración, a través de interfaces gráficas como FusionPBX, diligenciando los parámetros a solicitar, ejemplo, solicitud de información en un rango de fechas. El registro y visualización de los datos de administración permiten analizar, medir y tomar decisiones.


    Separador 

    #t_3_5
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.5  Gestión de las prestaciones

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Se trata del proceso de alistamiento y la proyección de la red; esta labor se realiza conociendo el rendimiento de la red actual de manera que sea posible, por ejemplo, determinar la eficiencia de la red en relación a la inversión ejecutada al establecerla, buscando que el rendimiento se mantenga en niveles aceptables, bajo estos parámetros definidos. Se emplean para ello funciones que se encargan de medir valores asociados a la calidad del servicio (concepto de QoS), parámetros como retardo o latencia, 
          em jitter 
          | (variaciones en el retraso), pérdidas de paquetes, ráfagas de pérdida, etc.
      .col-lg-5(data-aos="fade-left")
        img(src="@/assets/curso/temas/t3/img9.png", alt="")

    .row
      .col-lg-6.px-lg-0
        .bg-3.p-md-5.p-3.h-100(data-aos="fade-right")
          .bg-5.p-2.px-4.b-r4.w-fit.mb-4 
            h3.text-white.mb-0 Gestión de las prestaciones en Asterisk
          p.mb-4 Las funciones o aplicaciones empleadas para esta gestión en Asterisk, son las que miden los parámetros asociados a niveles de calidad de servicio, algunas de las más reconocidas son:
          h4.mb-2 Wireshark
          p.mb-5 También es conocida como Ethereal, con interfaz gráfica y posibilidad de filtrado es un analizador de protocolos.
          h4.mb-2 AQUA VQM Asterisk 4
          p Permite pruebas sobre la voz en cuanto a percepción y calidad, como también control a la calidad del audio, a la par que como herramienta de código abierto, brinda posibilidades de pruebas con menús IVRS, informes, test de marcado, entre otras características.
      .col-lg-6.px-lg-0
        .bg-4.p-md-5.p-3.h-100(data-aos="fade-left")
          .bg-5.p-2.px-4.b-r4.w-fit.mb-4 
            h3.text-white.mb-0 Gestión de las prestaciones en FreeSwitch
          p.mb-4 En la telefonía IP es de gran importancia monitorear, analizar y evaluar las redes, se tienen herramientas que mediante la interfaz gráfica que posee se puede analizar el comportamiento de la misma:
          h4.mb-2 Wireshark
          p.mb-4 Esta herramienta es funcional para la mayoría de los sistemas operativos como Windows, Linux, macOS, es #[em software] libre, simple y eficiente, contiene complementos enfocados en VoIP y es de gran utilidad para detectar errores de señalización SIP y flujos de medios RTP.
          h4.mb-2 VoIPmonitor
          p Herramienta que permite rastrear los paquetes en la red, analiza la calidad de las llamadas, decodifica la voz. Es de código abierto y de fácil instalación. Analiza en tiempo real el comportamiento de los protocolos SIP y RTP.


    Separador 

    #t_3_6
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.6  Gestión de la seguridad

    .row.align-items-center
      .col-lg-1.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img10.svg", alt="")
      .col-lg-11.col-md-10(data-aos="fade-left")
        p Para garantizar la seguridad del sistema la gestión, se lleva a cabo de manera que se definan políticas de restricción de acceso y las buenas prácticas de seguridad en la información, esto es seguridad básica a través del uso de contraseñas seguras actualizables en periodos de tiempo, media a través del monitoreo continuo de los log, notificaciones o cambio de puertos y seguridad directamente en la aplicación utilizada.

    .row.fondo2-tema3.align-items-center.py-4.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down") 

          .col-lg-12
            img(src="@/assets/curso/temas/t3/tarj2.png", alt="")
          .row
            .col-lg-6.px-lg-0
              .bg-white.p-md-5.p-3.h-100
                .bg-5.p-2.px-4.b-r4.w-fit.mb-4
                  h3.text-white.mb-0 Gestión de la seguridad en Asterisk
                p En la aplicación como tal, pueden emplearse buenas prácticas como salas de conferencias con contraseña, asociar extensión por IP de ser posible, limitar el tiempo de llamadas según la extensión, cifrar comunicaciones y registros usando TLS (seguridad en la capa de transporte) y SRTP (
                  em Secure Real–Time Transport Protocol
                  | ). Asterisk a su vez, permite la autenticación de usuarios, verificación de privilegios, proporciona logs de registro de eventos, es importante siempre la implementación de antivirus compatibles y la utilización de las IPtables, en las que se definen políticas para el filtrado del tráfico, es decir como un firewall perfectamente configurable.
            .col-lg-6.px-lg-0.linea-div
              .bg-white.p-md-5.p-3.h-100
                .bg-5.p-2.px-4.b-r4.w-fit.mb-4
                  h3.text-white.mb-0 Gestión de la seguridad en FreeSwitch
                p Gestionar la seguridad en el sistema FreeSwitch permite mitigar riesgos que puedan afectar la red. Algunos parámetros a tener en cuenta, son:
                ol.lista-ol
                  li.mb-0 
                    span.text-bold a. 
                    | Manejo de contraseñas robustas.
                  li.mb-0 
                    span.text-bold b. 
                    | Actualización de parches en los SO.
                  li.mb-0 
                    span.text-bold c. 
                    | Antivirus actualizado.
                  li.mb-0 
                    span.text-bold d. 
                    | Configuración de IDS.
                  li.mb-0 
                    span.text-bold e. 
                    | Identificación de IPs.
                  li.mb-0 
                    span.text-bold f. 
                    | Configuración de reglas en el Firewall.
                  li.mb-0 
                    span.text-bold g. 
                    | Asignación de perfiles y permisos.
                  li.mb-0 
                    span.text-bold h. 
                    | Protocolo de encriptación.

    p.mb-4(data-aos="fade") A continuación, en el siguiente video, encontrará un resumen general de la gestión de: configuración, fallos, prestaciones, contabilidad, y seguridad de los sistemas Asterisk y FreeSwitch.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 





</template>

<script>
export default {
  name: 'Tema3',
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
