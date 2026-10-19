// Diccionario en castellano. Es la fuente de verdad: `ca.ts` debe tener exactamente la misma forma
// (el tipo `Messages` lo comprueba y hay un test que vigila también la longitud de las listas).
// Los textos con **negrita** se pintan con el componente <Rich>.
export const es = {
  meta: {
    ogLocale: "es_ES",
    site: {
      name: "Mareas, Lab de innovación social y digital",
      title: "Mareas, Lab de innovación social y digital",
      description:
        "Organización de base juvenil e intercultural que trabaja por los Derechos Humanos desde el feminismo interseccional. Investigación-acción, incidencia política y acompañamiento estratégico.",
      keywords: ["Mareas", "Justicia Social", "Derechos Humanos", "Feminismo", "Interculturalidad", "ONG", "Tercer Sector", "Economía Social"],
      ogDescription: "Nueve corrientes de cambio que confluyen en un mismo océano de justicia social.",
      twitterDescription: "Transformación estructural hacia la justicia social y la equidad",
    },
    pages: {
      quienesSomos: {
        title: "Quiénes Somos | Mareas Lab",
        description: "Conoce la Asociación Mareas: organización base juvenil e intercultural dedicada a la innovación social y digital.",
      },
      servicios: {
        title: "Servicios de Consultoría y Formación | Mareas Lab",
        description: "Descubre nuestros servicios de consultoría estratégica, innovación digital y formación con perspectiva interseccional.",
      },
      proyectos: {
        title: "Nuestros Proyectos | Mareas Lab",
        description: "Explora nuestros proyectos actuales como Tomamos la Palabra y Voces en contracorriente, centrados en derechos humanos y tecnología.",
      },
      incidencia: {
        title: "Incidencia y Recursos | Mareas Lab",
        description: "Recursos, investigaciones y campañas de incidencia política para la transformación social y digital.",
      },
      contacto: {
        title: "Contacto | Mareas Lab",
        description: "Ponte en contacto con Mareas Lab. Únete a nuestra red o solicita información sobre nuestras colaboraciones y servicios.",
      },
      contranarrativas: {
        title: "Repositorio de Contranarrativas | Mareas Lab",
        description: "Desmontando discursos de odio con datos, Derechos Humanos y perspectivas feministas e interculturales.",
      },
      avisoLegal: {
        title: "Aviso Legal | Mareas Lab",
        description: "Aviso legal e información identificativa de Mareas, Lab de innovación social y digital.",
      },
      privacidad: {
        title: "Política de Privacidad | Mareas Lab",
        description: "Cómo trata Mareas, Lab de innovación social y digital tus datos personales y cómo ejercer tus derechos.",
      },
      cookies: {
        title: "Política de Cookies | Mareas Lab",
        description: "Información sobre el uso de cookies y tecnologías similares en el sitio web de Mareas.",
      },
    },
  },

  common: {
    themeToggle: "Cambiar tema",
    languageLabel: "Idioma",
    languageNames: { es: "Castellano", ca: "Català" },
    languageSwitchTo: { es: "Cambiar a castellano", ca: "Cambiar a catalán" },
    legalUpdated: "Última actualización",
  },

  header: {
    nav: {
      home: "Inicio",
      mareas: "Las 9 Mareas",
      about: "Quiénes Somos",
      services: "Servicios",
      projects: "Proyectos",
      advocacy: "Incidencia",
      counternarratives: "Contranarrativas",
      contact: "Contacto",
    },
    join: "Únete a Mareas",
    openMenu: "Abrir menú",
  },

  hero: {
    badge: "Think-and-Do Tank para la justicia social",
    titleStart: "Mareas, Lab de innovación",
    titleHighlight: "social y digital",
    subtitle:
      "Transformación estructural hacia la justicia social y la equidad. Somos una organización de base juvenil e intercultural que trabaja por los Derechos Humanos desde el feminismo interseccional. Investigamos, incidimos y acompañamos a comunidades y administraciones en la construcción de una sociedad más justa.",
    ctaMareas: "Conoce nuestras 9 Mareas",
    ctaConsulting: "Solicita consultoría",
    stats: [
      { value: "9", label: "Áreas de especialización" },
      { value: "100%", label: "Reinversión social" },
      { value: "ODS", label: "Agenda 2030" },
    ],
  },

  mareas: {
    badge: "Nueve corrientes de cambio",
    title: "Las 9 Mareas",
    intro:
      "Nueve corrientes de cambio que confluyen en un mismo océano de justicia social. Cada Marea es un área de especialización que trabaja de forma interconectada, generando sinergias y multiplicando el impacto de nuestras acciones.",
    learnMore: "Conocer más",
    modal: {
      focus: "Enfoque",
      activities: "Actividades principales",
      projects: "Proyectos destacados",
      howToParticipate: "¿Cómo puedes participar?",
      join: "Quiero participar",
      close: "Cerrar",
    },
    items: [
      {
        name: "Mareas Juvenil",
        tagline: "Empoderamos a las nuevas generaciones como agentes de cambio",
        description:
          "Investigamos las realidades de las juventudes y promovemos la participación ciudadana, con especial énfasis en juventudes migradas, exiliadas y refugiadas.",
        focus:
          "Empoderamos a las nuevas generaciones como agentes de cambio social, con énfasis en juventudes migradas, exiliadas y refugiadas.",
        activities: ["Investigación sobre realidades juveniles", "Participación ciudadana", "Proyectos de empoderamiento", "Formaciones específicas", "Trabajo con juventud en riesgo", "Diagnósticos territoriales"],
        projects: ["Jóvenes en Red", "Voces Jóvenes", "Participació Jove BCN", "Youth Empowerment"],
        howToParticipate:
          "Puedes asociarte como miembro joven, colaborar en proyectos de investigación, participar en nuestras formaciones o sumarte como voluntario/a en actividades con juventud.",
      },
      {
        name: "Mareas Feministas",
        tagline: "Transversalizamos los feminismos interseccionales",
        description:
          "Promovemos la equidad de género real mediante investigaciones, formaciones y proyectos orientados a erradicar todas las violencias machistas.",
        focus:
          "Transversalizamos el feminismo interseccional en todos nuestros proyectos, luchando contra las desigualdades de género desde una perspectiva estructural.",
        activities: ["Formaciones en perspectiva de género", "Protocolos contra violencia machista", "Investigación feminista", "Acompañamiento a víctimas", "Incidencia legislativa", "Talleres de deconstrucción"],
        projects: ["Marea Violeta", "Sin Violencia", "Feminismo Interseccional", "Escuela Feminista"],
        howToParticipate:
          "Únete como socia feminista, colabora en nuestros grupos de trabajo, asiste a nuestras formaciones especializadas o propón proyectos de investigación con perspectiva de género.",
      },
      {
        name: "Mareas Migrantes",
        tagline: "Construimos puentes hacia la inclusión plena",
        description:
          "Desarrollamos estrategias y narrativas transformadoras que combaten la discriminación estructural y garantizan la inclusión de las personas migradas.",
        focus:
          "Construimos puentes hacia la inclusión plena de personas migradas, combatiendo el racismo estructural y promoviendo narrativas transformadoras.",
        activities: ["Asesoramiento jurídico", "Narrativas antirracistas", "Acompañamiento en procesos de regularización", "Formación intercultural", "Mediación comunitaria", "Incidencia política"],
        projects: ["Voces Migrantes", "Narrativas Libres", "Puentes Interculturales", "Documentación Sin Fronteras"],
        howToParticipate:
          "Participa como mediador/a intercultural, colabora en proyectos de narrativas transformadoras, o solicita asesoramiento para tu organización sobre inclusión de personas migradas.",
      },
      {
        name: "Mareas en Movimiento y Pau",
        tagline: "Defendemos el derecho a moverse con dignidad",
        description:
          "Acompañamos en movilidad humana, asilo y refugio, e impulsamos la cultura de paz y la memoria democrática.",
        focus:
          "Defendemos el derecho a moverse con dignidad, acompañando procesos de asilo y refugio, e impulsando la cultura de paz y la memoria democrática.",
        activities: ["Acompañamiento en solicitudes de asilo", "Cultura de paz", "Memoria democrática", "Orientación a refugiados/as", "Redes de acogida", "Movilidad estudiantil"],
        projects: ["Refugio Seguro", "Memoria Viva", "Movilidad Digna", "Acogida y Paz"],
        howToParticipate:
          "Puedes ser familia de acogida, colaborar en orientación y acompañamiento a personas refugiadas, o sumarte a nuestras actividades de memoria democrática y cultura de paz.",
      },
      {
        name: "Mareas Diversas",
        tagline: "Visibilizamos y acompañamos las disidencias",
        description:
          "Abordamos las realidades LGTBIQA+ desde una perspectiva interseccional, con énfasis en personas migrantes del colectivo.",
        focus:
          "Visibilizamos y acompañamos las disidencias sexuales y de género desde una perspectiva interseccional, con especial atención a las personas LGTBIQA+ en contexto migratorio.",
        activities: ["Espacio seguro LGTBIQA+", "Asesoramiento específico", "Visibilización e incidencia", "Formación en diversidad", "Red de apoyo mutuo", "Proyectos artísticos"],
        projects: ["Arcoíris Sin Fronteras", "Diversidad Visible", "Espacio Seguro", "Orgullo Migrante"],
        howToParticipate:
          "Únete a nuestros espacios seguros, participa en actividades de visibilización, colabora como aliado/a en formaciones sobre diversidad o apoya nuestros proyectos de acompañamiento.",
      },
      {
        name: "Mareas Incidencia",
        tagline: "Transformamos leyes, políticas y sociedades",
        description:
          "Diseñamos estrategias de incidencia política, jurídica y ciudadana para promover cambios estructurales.",
        focus:
          "Transformamos leyes, políticas y sociedades a través de estrategias de incidencia política, jurídica y ciudadana fundamentadas en la investigación.",
        activities: ["Lobbying legislativo", "Litigio estratégico", "Campañas de sensibilización", "Formación en incidencia", "Alianzas estratégicas", "Informes de políticas públicas"],
        projects: ["Ley Migración Digna", "Incidencia ONU", "Red Parlamentaria", "Ciudadanía Activa"],
        howToParticipate:
          "Colabora en nuestras campañas de incidencia, forma parte de nuestro equipo jurídico voluntario, o participa en las formaciones sobre herramientas de presión democrática.",
      },
      {
        name: "Mareas Cooperación",
        tagline: "Tejemos redes para la democracia participativa",
        description:
          "Impulsamos la cooperación internacional y la participación comunitaria con metodologías innovadoras.",
        focus:
          "Tejemos redes de cooperación internacional y participación comunitaria para generar democracia participativa y transformación colectiva.",
        activities: ["Proyectos de cooperación internacional", "Participación comunitaria", "Metodologías innovadoras", "Alianzas internacionales", "Intercambios culturales", "Financiación solidaria"],
        projects: ["Red Iberoamericana", "Coopera Local", "Democracia Participativa", "Fondos Solidarios"],
        howToParticipate:
          "Participa en proyectos de cooperación internacional, suma tu organización a nuestra red, o colabora en el diseño de metodologías participativas.",
      },
      {
        name: "Mareas Lab",
        tagline: "Laboratorio de innovación social y digital",
        description:
          "Investigamos y diseñamos servicios de transformación y auditoría digital ética para la soberanía tecnológica.",
        focus:
          "Laboratorio de innovación social y digital que investiga y diseña soluciones tecnológicas éticas para la soberanía digital del tercer sector.",
        activities: ["Auditorías digitales éticas", "Formación en soberanía tecnológica", "Herramientas libres y abiertas", "Data lab social", "Análisis de algoritmos", "Consultoría ética de IA"],
        projects: ["Mareas Data Lab", "Tech Ética", "Software Libre Social", "IA Justa"],
        howToParticipate:
          "Súmate como desarrollador/a voluntario/a, colabora en investigaciones de ética digital, o solicita una auditoría digital para tu organización.",
      },
      {
        name: "Mareas Consulting",
        tagline: "Consultoría con impacto social real",
        description:
          "Prestamos servicios de consultoría estratégica y comunicación con perspectiva de derechos humanos.",
        focus:
          "Consultoría estratégica con impacto social real, combinando la perspectiva de derechos humanos con metodologías innovadoras de gestión y comunicación.",
        activities: ["Planificación estratégica", "Comunicación con impacto", "Evaluación de proyectos", "Desarrollo organizacional", "Formación directiva", "Gestión de alianzas"],
        projects: ["Estrategia 2030", "Comunicación Transformadora", "Impacto Social", "Consultoría Pro Bono"],
        howToParticipate:
          "Solicita una consultoría para tu organización, colabora como experto/a en alguna de nuestras áreas, o únete a nuestro equipo de consultores/as con compromiso social.",
      },
    ],
  },

  about: {
    badge: "Nuestra identidad",
    title: "¿Quiénes somos?",
    p1: "La **ASOCIACIÓN MAREAS, LAB DE INNOVACIÓN SOCIAL Y DIGITAL**, es una organización de base mayoritariamente juvenil e intercultural, constituida como asociación sin ánimo de lucro regulada por la **Ley 4/2008 de Cataluña**.",
    p2: "Nuestro modelo de trabajo se fundamenta en la **investigación-acción**: investigamos las realidades sociales para diseñar intervenciones efectivas que generen transformación estructural. Perseguimos fines orientados a la promoción de los Derechos Humanos, la justicia social, el feminismo interseccional y la inclusión plena de las personas migradas y refugiadas, acompañando a comunidades en la construcción de una sociedad más equitativa y democrática.",
    commitments: ["Compromiso ODS", "Agenda 2030", "Transparencia"],
    missionTitle: "Nuestra Misión",
    mission:
      "La transformación estructural de la sociedad hacia la justicia social, la equidad y la garantía de los Derechos Humanos, impulsando la soberanía tecnológica y el empoderamiento de colectivos en riesgo de exclusión social, con especial foco en la juventud y las mujeres migrantes.",
    valuesTitle: "Nuestros Valores",
    values: [
      { title: "Justicia Social", description: "Trabajamos por una distribución equitativa de recursos, oportunidades y derechos para todas las personas." },
      { title: "Feminismo Interseccional", description: "Reconocemos cómo el género se cruza con otras identidades para crear experiencias únicas de discriminación." },
      { title: "Interculturalidad", description: "Promovemos el diálogo y la convivencia entre culturas, construyendo puentes de comprensión mutua." },
      { title: "Derechos Humanos", description: "Defendemos la dignidad inherente de todas las personas, sin distinción de ningún tipo." },
      { title: "Innovación Social", description: "Desarrollamos metodologías creativas para abordar los desafíos sociales complejos." },
      { title: "Participación", description: "Fomentamos la ciudadanía activa y el empoderamiento de las comunidades." },
    ],
    transparency: {
      badge: "Compromiso",
      title: "Transparencia Institucional",
      text: "Como entidad regulada por la Ley 4/2008 de Cataluña, rendimos cuentas de cada euro invertido y cada impacto generado. Los ingresos de nuestros servicios de consultoría se reinvierten íntegramente en fines sociales.",
      button: "Ver memorias anuales",
      stats: [
        { value: "100%", label: "Reinversión social" },
        { value: "Ley 4/2008", label: "Régimen jurídico" },
        { value: "ESS", label: "Economía Social" },
        { value: "5 años", label: "Mandato Junta" },
      ],
    },
  },

  services: {
    badge: "Mareas Consulting & Lab",
    title: "Servicios con Impacto Social",
    intro:
      "Ofrecemos servicios especializados de consultoría, auditoría digital ética y formación para instituciones y empresas de la Economía Social y Solidaria. **Todos los ingresos se reinvierten en fines sociales.**",
    requestInfo: "Solicitar información",
    items: [
      {
        title: "Consultoría Estratégica",
        description: "Evaluación de políticas públicas, diseño de proyectos sociales y acompañamiento institucional con perspectiva de derechos humanos.",
        features: ["Evaluación de impacto", "Diseño de proyectos", "Acompañamiento institucional", "Análisis de contextos"],
      },
      {
        title: "Auditoría Digital Ética",
        description: "Servicios de transformación y auditoría digital para reducir la brecha digital y fomentar la soberanía tecnológica.",
        features: ["Soberanía tecnológica", "Ética de datos", "Herramientas libres", "Auditorías digitales"],
      },
      {
        title: "Formación y Capacitación",
        description: "Catálogo de formaciones especializadas en justicia social, feminismo interseccional, migraciones y soberanía tecnológica.",
        features: ["Formación a medida", "Recursos educativos", "Talleres prácticos", "Acompañamiento continuo"],
      },
      {
        title: "Comunicación Estratégica",
        description: "Diseño de campañas de incidencia, narrativas transformadoras y estrategia digital para organizaciones sociales.",
        features: ["Campañas de incidencia", "Narrativas transformadoras", "Estrategia digital", "Consultoría en comunicación"],
      },
    ],
    processTitle: "Nuestro Proceso de Trabajo",
    process: [
      { title: "Contacto inicial", desc: "Escuchamos tus necesidades y objetivos" },
      { title: "Diagnóstico", desc: "Analizamos el contexto y diseñamos la estrategia" },
      { title: "Propuesta", desc: "Presentamos un plan detallado y presupuesto" },
      { title: "Ejecución", desc: "Implementamos y evaluamos el impacto" },
    ],
    experience: {
      title: "Experiencia en Proyectos Reales",
      text: "Nuestra metodología de investigación y acción no se queda en la teoría. Contamos con el respaldo y la financiación de entidades clave para el impacto social.",
      partners: [
        {
          initial: "C",
          name: "Fondo Calala",
          role: "Financiador",
          text: "Desarrollamos proyectos respaldados y financiados por el Fondo de Mujeres Calala, fortaleciendo redes, fomentando la equidad y apoyando la acción directa de base comunitaria.",
        },
        {
          initial: "R",
          name: "Proyecto Radix",
          role: "Intervención",
          text: "Participamos activamente en iniciativas transformadoras como Radix, aplicando herramientas digitales e investigación para impulsar la soberanía tecnológica y el cambio social.",
        },
      ],
    },
  },

  projects: {
    badge: "Nuestra acción en el territorio",
    title: "Proyectos y Actividades",
    intro:
      "Desde la investigación hasta la acción directa, impulsamos iniciativas con impacto real para promover los derechos humanos y la inclusión plena.",
    statusLabel: "Estado",
    supportLabel: "Apoyo",
    whatLabel: "¿Qué es y para qué?",
    howLabel: "¿Cómo y con quién?",
    impactLabel: "Impacto esperado",
    items: [
      {
        title: "«Voces en contracorriente: Escuela de Comunicación Feminista y Contranarrativa para la paz»",
        category: "Comunicación Formativa e Incidencia",
        status: "En ejecución",
        budget: "10.000€",
        description:
          "Iniciativa de comunicación formativa y de incidencia dirigida principalmente a mujeres jóvenes migrantes en Cataluña (y nivel estatal). Parte de una premisa política clara: las mujeres migrantes jóvenes no necesitan que alguien hable por ellas; necesitan herramientas, espacios seguros y comunidad para hablar por sí mismas. Contribuye a la participación social frente al riesgo de exclusión.",
        details:
          "La escuela se articula en tres fases: (I) diseño metodológico participativo con una red de formadoras expertas en comunicación comunitaria, activismo y feminismos; (II) ciclo de formación híbrida sobre narrativas de género, análisis de discursos de odio, ciberfeminismo y soberanía tecnológica; (III) encuentro presencial en Barcelona con producción colaborativa de contenidos y diálogo intergeneracional.",
        impact:
          "Enmarcado en la Línea A5 (sensibilización, comunicación e investigación). Su objetivo es producir materiales digitales de libre acceso y crear una red activa de creadoras de contenido feministas jóvenes migrantes, actuando como intervención política frente a los discursos de odio antimigración.",
      },
      {
        title: "«Tomamos la Palabra: Escuela política y digital de mujeres y disidencias juveniles migrantes»",
        category: "Escuela de Formación y Liderazgo",
        status: "Proyecto a 24 meses",
        budget: "Radix",
        description:
          "Iniciativa para fortalecer el liderazgo político y comunicativo de jóvenes mujeres y disidencias sexuales migrantes, exiliadas y refugiadas del Sur Global (18-35 años, con flexibilidad etaria por contextos de precariedad). Su objetivo es brindar herramientas para defender derechos, combatir discursos de odio y ocupar espacios en el activismo feminista y LGTBIQA+.",
        details:
          "Escuela de dos años de modalidad híbrida (Cataluña presencial y resto de España virtual) mediante metodología IAP. Incluye módulos de política interseccional y competencias digitales, producción de un podcast propio, escuela de verano, apoyo tecnológico a organizaciones y diálogos intergeneracionales con activistas históricas.",
        impact:
          "Contribuye directamente a la protección de los derechos fundamentales de mujeres y personas LGTBIAQ+ migrantes, incluidas aquellas en situación irregular. A través de contranarrativas propias, promueve la dignidad humana, la igualdad y la democracia, enfrentando el juvenicidio moral y la exclusión estructural.",
      },
    ],
  },

  advocacy: {
    badge: "Mareas Lab",
    title: "Incidencia y Recursos",
    intro:
      "Espacio para publicaciones de investigación, guías sobre soberanía tecnológica y campañas de incidencia política.",
    publicationsTitle: "Publicaciones Recientes",
    publications: [{ title: "Guía de Soberanía Tecnológica para Organizaciones Sociales", type: "Guía", year: "2026" }],
    campaignsTitle: "Campañas Activas",
    activeBadge: "Activa",
    campaigns: [
      { title: "Voces en contracorriente", desc: "Escuela de Comunicación Feminista y Contranarrativa para la paz" },
      { title: "Tomamos la Palabra", desc: "Escuela política y digital de mujeres y disidencias juveniles migrantes" },
    ],
    newsletter: {
      title: "Suscríbete a nuestra newsletter",
      text: "Recibe mensualmente novedades, recursos y convocatorias.",
      emailPlaceholder: "Tu email",
      subscribeAria: "Suscribirme a la newsletter",
      success: "¡Gracias! Te hemos suscrito correctamente.",
      error: "Hubo un error al suscribirte. Inténtalo de nuevo.",
      connectionError: "Error de conexión al suscribirse. Por favor, revisa tu conexión a internet.",
      consentPurpose: "enviarte la newsletter",
    },
  },

  contact: {
    badge: "Únete al cambio",
    title: "El cambio empieza cuando decides ser parte de él",
    intro:
      "Sea cual sea tu origen, tu edad o tu historia, hay un lugar para ti en Mareas. Asóciate, colabora, solicita nuestros servicios o simplemente mantente informado/a.",
    formTitle: "Contacta con nosotras",
    formDescription: "Cuéntanos cómo te gustaría participar o qué servicios necesitas.",
    tabs: { join: "Asociarme", services: "Servicios", collaborate: "Colaborar" },
    sendAnother: "Enviar otra",
    sendError: "Hubo un error al enviar. Por favor, inténtalo de nuevo.",
    formspreeError: "🚨 Error de Formspree: ",
    networkError: "🚨 Error de red o del navegador. Por favor, inténtalo de nuevo o contacta directamente por email: info@mareas.org",
    join: {
      name: "Nombre completo *",
      namePlaceholder: "Tu nombre",
      email: "Email *",
      emailPlaceholder: "tu@email.com",
      interest: "¿Qué Marea te interesa más?",
      interestPlaceholder: "Selecciona una Marea (Opcional)",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos algo sobre ti y por qué quieres unirte (opcional)",
      submit: "Quiero asociarme",
      successTitle: "¡Solicitud recibida!",
      successText: "Nos pondremos en contacto contigo en los próximos días. ¡Gracias por querer unirte a Mareas!",
      consentPurpose: "gestionar tu solicitud de asociación",
    },
    services: {
      name: "Organización *",
      namePlaceholder: "Nombre de tu organización",
      email: "Email profesional *",
      emailPlaceholder: "contacto@organizacion.org",
      interest: "Área de Consultoría / Marea",
      interestPlaceholder: "Selecciona un área de interés",
      message: "Mensaje *",
      messagePlaceholder: "Cuéntanos más sobre tu proyecto o necesidades...",
      submit: "Solicitar información",
      successTitle: "¡Solicitud recibida!",
      successText: "Nos pondremos en contacto con tu organización en breve. ¡Gracias por confiar en Mareas!",
      consentPurpose: "responder a tu solicitud de servicios",
    },
    collaborate: {
      name: "Nombre completo *",
      namePlaceholder: "Tu nombre",
      email: "Email *",
      emailPlaceholder: "tu@email.com",
      interest: "¿Con qué Marea te gustaría colaborar?",
      interestPlaceholder: "Selecciona una Marea (Opcional)",
      type: "Forma de colaboración",
      typePlaceholder: "Donación, Alianza, Voluntariado...",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos cómo te gustaría colaborar (opcional)",
      submit: "Quiero colaborar",
      successTitle: "¡Gracias por tu interés!",
      successText: "Nos pondremos en contacto contigo pronto para explorar cómo colaborar juntos.",
      consentPurpose: "responder a tu propuesta de colaboración",
    },
    consent: {
      label: "He leído y acepto la",
      link: "Política de Privacidad",
      info: "Responsable: Mareas, Lab de innovación social y digital. Finalidad: {purpose}. Base legal: tu consentimiento. Destinatarios: no se ceden datos; el envío se gestiona con Formspree (EE. UU.). Derechos: acceso, rectificación, supresión y otros en info@mareas.org.",
    },
    info: {
      title: "Información de contacto",
      email: "Email",
      phone: "Teléfono",
      nif: "NIF",
      followTitle: "Síguenos",
      instagramAria: "Visitar nuestro perfil en Instagram",
      legalTitle: "Régimen Jurídico",
      legalName: "Mareas, Lab de innovación social y digital",
      legalNif: "NIF",
      legalText:
        "Asociación regulada por la Ley 4/2008, de 24 de abril, del libro tercero del Código civil de Cataluña, relativo a las personas jurídicas, y la Ley Orgánica 1/2002, de 22 de marzo, reguladora del derecho de asociación. Inscrita en el Registre d'Associacions de la Generalitat de Catalunya (secció 1ª, resolució 23/7/26) con número de inscripción: 80169.",
      legalNotice: "Aviso Legal",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
  },

  footer: {
    tagline: "Transformación estructural hacia la justicia social y la equidad. Think-and-do tank por los Derechos Humanos.",
    instagramAria: "Visitar nuestro perfil en Instagram",
    quickLinksTitle: "Enlaces rápidos",
    mareasTitle: "Las 9 Mareas",
    mareasPrefix: "Mareas",
    mareasLinks: ["Juvenil", "Feministas", "Migrantes", "Pau", "Diversas", "Incidencia", "Cooperación", "Lab", "Consulting"],
    contactTitle: "Contacto",
    nif: "NIF",
    copyright: "© 2026 Mareas, Lab de innovación social y digital (NIF: G26956961). Todos los derechos reservados.",
    legalNotice: "Aviso Legal",
    privacy: "Privacidad",
    cookies: "Cookies",
  },

  counternarratives: {
    back: "Volver al inicio",
    badge: "Laboratorio de Ideas",
    title: "Repositorio de Contranarrativas",
    intro:
      "Frente a los discursos de odio, desinformación y prejuicios, desde Mareas oponemos datos, Derechos Humanos y perspectiva interseccional. Haz clic en las tarjetas para descubrir la realidad detrás del mito.",
    filters: { all: "Todas", migration: "Migración", gender: "Género", technology: "Tecnología" },
    mythLabel: "El Mito",
    realityLabel: "La Realidad",
    reveal: "Haz clic para revelar",
    sourceLabel: "Fuente",
    items: [
      {
        category: "migration",
        myth: "Las personas migrantes colapsan los servicios públicos y la sanidad.",
        fact: "Diversos estudios demuestran que la población migrante aporta más a las arcas públicas vía impuestos y cotizaciones sociales de lo que recibe en servicios. Además, su uso de la sanidad es menor por ser, en promedio, una población más joven.",
        source: "Informes del Banco de España y Amnistía Internacional.",
      },
      {
        category: "gender",
        myth: "El feminismo ya no es necesario porque existe igualdad legal.",
        fact: "La igualdad legal no se traduce automáticamente en igualdad real. Persisten la brecha salarial, la violencia machista, los techos de cristal y la feminización de la pobreza y los cuidados.",
        source: "Datos del INE y la OIT.",
      },
      {
        category: "technology",
        myth: "Los algoritmos y la Inteligencia Artificial son neutrales y objetivos.",
        fact: "La IA aprende de datos históricos generados por humanos, reproduciendo e incluso amplificando sesgos racistas, machistas y clasistas si no se diseña con una ética de la soberanía digital.",
        source: "AlgorithmWatch y Observatorio de Algoritmos.",
      },
      {
        category: "migration",
        myth: "Las vías legales y seguras provocan un 'efecto llamada'.",
        fact: "El verdadero 'efecto llamada' es la desigualdad global y los conflictos. Las vías legales reducen el tráfico de personas, evitan muertes en el mar y permiten una gestión migratoria ordenada y garantista.",
        source: "ACNUR y Comisión Española de Ayuda al Refugiado (CEAR).",
      },
    ],
  },
};

export type Messages = typeof es;
