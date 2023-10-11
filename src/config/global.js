export default {
  global: {
    componenteFormativo: 'Servicios de voz sobre IP (VoIP)',
    descripcionCurso:
      'A través de este componente formativo, el aprendiz debe apropiar los elementos y conceptos necesarios para la gestión de servicios de voz sobre el protocolo IP aplicando herramientas de <em>software</em> como Asterisk y FreeSwitch.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<em>Software</em> Pbx VoIP: Asterisk',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es Asterisk?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Arquitectura de Asterisk',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Software</em> Pbx VoIP: FreeSwitch',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es FreeSwitch?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arquitectura FreeSwitch',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ejemplo de llamada',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de fallos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Gestión de fallos en Asterisk',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gestión de fallos en FreeSwitch',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gestión de la configuración',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gestión de la contabilidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gestión de las prestaciones',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Gestión de la seguridad',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión VoIP',
      referencia:
        'Moya, F. (2010). Análisis de herramienta de gestión de VoIP. Departamento de Ingeniería de Sistemas y Automática.',
      tipo: 'Sitio web',
      link: 'http://bibing.us.es/proyectos/abreproy/11920',
    },
    {
      tema: 'Tutorial completo de Asterisk',
      referencia:
        'Redes Plus. (2019). Tutorial completo de asterisk [Vídeo]. YouTube.',
      tipo: 'Video',
      descarga: 'https://youtu.be/yCpPo6aeKU4',
    },
    {
      tema: 'Asterisk QoS',
      referencia: 'voip-info.org. (2005). Asterisk QoS',
      tipo: 'Sitio web',
      link: 'https://www.voip-info.org/asterisk-qos/',
    },
    {
      tema: 'Asterisk',
      referencia: 'voip-info.org. (2021). Asterisk.',
      tipo: 'Sitio web',
      descarga: 'https://www.voip-info.org/asterisk/',
    },
    {
      tema: 'FreeSwitch',
      referencia: 'FreeSwitch. (2020). FreeSwitch. FreeSwitch.org.',
      tipo: 'Sitio web',
      descarga: 'https://FreeSwitch.com/',
    },
  ],
  glosario: [
    {
      termino: 'ACD (<em>Average Call Duration</em>)',
      significado:
        'Duración media de llamada. Nos da la duración media de las llamadas en segundos.',
    },
    {
      termino: '<em>Billing Software</em>',
      significado:
        'Programa de facturación. Se suele denominar así al programa que tarifica las llamadas telefónicas.',
    },
    {
      termino: 'Cliente SIP',
      significado:
        'Software donde se configura la línea SIP para que pueda realizar y recibir llamadas y otras funcionalidades prestadas por el sistema.',
    },
    {
      termino: 'DTMF (<em>Dual-Tone Multi-Frequency</em>)',
      significado: 'Sistema de marcación numérica por tonos.',
    },
    {
      termino: '<em>Gateway VoIP</em>',
      significado:
        'Dispositivo que permite conectar varios dispositivos analógicos, de manera que estos puedan utilizar servicios VoIP.',
    },
    {
      termino: 'PBX (<em>Private Branch Exchange</em>)',
      significado: 'Es como denominan los ingleses a las centralitas.',
    },
    {
      termino: 'SIP (<em>Session Initiation Protocol</em>)',
      significado:
        'Es un protocolo que permite el establecimiento de sesiones multimedia entre dos o más usuarios.',
    },
    {
      termino: '<em>Softphone</em>',
      significado: 'Es un cliente SIP <em>software</em>.',
    },
    {
      termino: 'Teléfono IP',
      significado:
        'Cliente SIP con facilidades de, al menos, teclado numérico, micrófono y auricular.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beekman, G. (2005). <em>Introducción a la informática (traductor Díaz Martín, José Manuel)</em>. Pearson educación.',
    },
    {
      referencia:
        'Domínguez, O. G. (2016). <em>Fundamentos de Redes de Voz IP: 2ª Edición</em>. IT Campus Academy.',
    },
    {
      referencia:
        'Domínguez, O. G. (2016). Fundamentos de Redes de Voz IP: 2ª Edición. IT Campus Academy.',
    },
    {
      referencia:
        'Moya, F. (2010). Análisis de herramienta de gestión de VoIP. <em>Departamento de Ingeniería de Sistemas y Automática</em>.',
    },
    {
      referencia:
        'Pérez, B. (2014). <em>Asterisk PBX: Aprende a crear y diseñar soluciones de telefonía IP desde cero: Implementa, Aministra y Soluciona problema en Asterik</em>. Bernardo Perez.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro:
            'Centros de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro:
            'Centros de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Heidi Zuleima Gil Castañeda',
          cargo: 'Experta Temática',
          centro:
            'Centro de la Industria la Empresa y los Servicios – Regional Norte de Santander',
        },
        {
          nombre: 'Deivis Eduard Ramirez Martinez',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
