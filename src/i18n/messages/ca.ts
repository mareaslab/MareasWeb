import type { Messages } from "./es";

// Traducción al catalán. Debe tener exactamente la misma forma que `es.ts`.
// Los nombres propios (Mareas, Radix, Fondo Calala, Youth Empowerment...) se mantienen.
export const ca: Messages = {
  meta: {
    ogLocale: "ca_ES",
    site: {
      name: "Mareas, Lab d'innovació social i digital",
      title: "Mareas, Lab d'innovació social i digital",
      description:
        "Organització de base juvenil i intercultural que treballa pels Drets Humans des del feminisme interseccional. Investigació-acció, incidència política i acompanyament estratègic.",
      keywords: ["Mareas", "Justícia Social", "Drets Humans", "Feminisme", "Interculturalitat", "ONG", "Tercer Sector", "Economia Social"],
      ogDescription: "Nou corrents de canvi que conflueixen en un mateix oceà de justícia social.",
      twitterDescription: "Transformació estructural cap a la justícia social i l'equitat",
    },
    pages: {
      quienesSomos: {
        title: "Qui Som | Mareas Lab",
        description: "Coneix l'Associació Mareas: organització de base juvenil i intercultural dedicada a la innovació social i digital.",
      },
      servicios: {
        title: "Serveis de Consultoria i Formació | Mareas Lab",
        description: "Descobreix els nostres serveis de consultoria estratègica, innovació digital i formació amb perspectiva interseccional.",
      },
      proyectos: {
        title: "Els Nostres Projectes | Mareas Lab",
        description: "Explora els nostres projectes actuals com Prenem la Paraula i Veus a contracorrent, centrats en drets humans i tecnologia.",
      },
      incidencia: {
        title: "Incidència i Recursos | Mareas Lab",
        description: "Recursos, investigacions i campanyes d'incidència política per a la transformació social i digital.",
      },
      contacto: {
        title: "Contacte | Mareas Lab",
        description: "Posa't en contacte amb Mareas Lab. Uneix-te a la nostra xarxa o sol·licita informació sobre les nostres col·laboracions i serveis.",
      },
      contranarrativas: {
        title: "Repositori de Contranarratives | Mareas Lab",
        description: "Desmuntant discursos d'odi amb dades, Drets Humans i perspectives feministes i interculturals.",
      },
      avisoLegal: {
        title: "Avís Legal | Mareas Lab",
        description: "Avís legal i informació identificativa de Mareas, Lab d'innovació social i digital.",
      },
      privacidad: {
        title: "Política de Privacitat | Mareas Lab",
        description: "Com tracta Mareas, Lab d'innovació social i digital les teves dades personals i com exercir els teus drets.",
      },
      cookies: {
        title: "Política de Cookies | Mareas Lab",
        description: "Informació sobre l'ús de cookies i tecnologies similars al lloc web de Mareas.",
      },
    },
  },

  common: {
    themeToggle: "Canviar de tema",
    languageLabel: "Idioma",
    languageNames: { es: "Castellano", ca: "Català" },
    languageSwitchTo: { es: "Canviar a castellà", ca: "Canviar a català" },
    legalUpdated: "Darrera actualització",
  },

  header: {
    nav: {
      home: "Inici",
      mareas: "Les 9 Mareas",
      about: "Qui Som",
      services: "Serveis",
      projects: "Projectes",
      advocacy: "Incidència",
      counternarratives: "Contranarratives",
      contact: "Contacte",
    },
    join: "Uneix-te a Mareas",
    openMenu: "Obrir el menú",
  },

  hero: {
    badge: "Think-and-Do Tank per a la justícia social",
    titleStart: "Mareas, Lab d'innovació",
    titleHighlight: "social i digital",
    subtitle:
      "Transformació estructural cap a la justícia social i l'equitat. Som una organització de base juvenil i intercultural que treballa pels Drets Humans des del feminisme interseccional. Investiguem, incidim i acompanyem comunitats i administracions en la construcció d'una societat més justa.",
    ctaMareas: "Coneix les nostres 9 Mareas",
    ctaConsulting: "Sol·licita consultoria",
    stats: [
      { value: "9", label: "Àrees d'especialització" },
      { value: "100%", label: "Reinversió social" },
      { value: "ODS", label: "Agenda 2030" },
    ],
  },

  mareas: {
    badge: "Nou corrents de canvi",
    title: "Les 9 Mareas",
    intro:
      "Nou corrents de canvi que conflueixen en un mateix oceà de justícia social. Cada Marea és una àrea d'especialització que treballa de manera interconnectada, generant sinergies i multiplicant l'impacte de les nostres accions.",
    learnMore: "Saber-ne més",
    modal: {
      focus: "Enfocament",
      activities: "Activitats principals",
      projects: "Projectes destacats",
      howToParticipate: "Com pots participar?",
      join: "Vull participar",
      close: "Tanca",
    },
    items: [
      {
        name: "Mareas Juvenil",
        tagline: "Empoderem les noves generacions com a agents de canvi",
        description:
          "Investiguem les realitats de les joventuts i promovem la participació ciutadana, amb especial èmfasi en joventuts migrades, exiliades i refugiades.",
        focus:
          "Empoderem les noves generacions com a agents de canvi social, amb èmfasi en joventuts migrades, exiliades i refugiades.",
        activities: ["Investigació sobre realitats juvenils", "Participació ciutadana", "Projectes d'empoderament", "Formacions específiques", "Treball amb joventut en risc", "Diagnòstics territorials"],
        projects: ["Joves en Xarxa", "Veus Joves", "Participació Jove BCN", "Youth Empowerment"],
        howToParticipate:
          "Pots associar-te com a membre jove, col·laborar en projectes de recerca, participar en les nostres formacions o sumar-te com a voluntari/ària en activitats amb joventut.",
      },
      {
        name: "Mareas Feministes",
        tagline: "Transversalitzem els feminismes interseccionals",
        description:
          "Promovem l'equitat de gènere real mitjançant investigacions, formacions i projectes orientats a eradicar totes les violències masclistes.",
        focus:
          "Transversalitzem el feminisme interseccional en tots els nostres projectes, lluitant contra les desigualtats de gènere des d'una perspectiva estructural.",
        activities: ["Formacions en perspectiva de gènere", "Protocols contra la violència masclista", "Investigació feminista", "Acompanyament a víctimes", "Incidència legislativa", "Tallers de desconstrucció"],
        projects: ["Marea Violeta", "Sense Violència", "Feminisme Interseccional", "Escola Feminista"],
        howToParticipate:
          "Uneix-te com a sòcia feminista, col·labora en els nostres grups de treball, assisteix a les nostres formacions especialitzades o proposa projectes de recerca amb perspectiva de gènere.",
      },
      {
        name: "Mareas Migrants",
        tagline: "Construïm ponts cap a la inclusió plena",
        description:
          "Desenvolupem estratègies i narratives transformadores que combaten la discriminació estructural i garanteixen la inclusió de les persones migrades.",
        focus:
          "Construïm ponts cap a la inclusió plena de les persones migrades, combatent el racisme estructural i promovent narratives transformadores.",
        activities: ["Assessorament jurídic", "Narratives antiracistes", "Acompanyament en processos de regularització", "Formació intercultural", "Mediació comunitària", "Incidència política"],
        projects: ["Veus Migrants", "Narratives Lliures", "Ponts Interculturals", "Documentació Sense Fronteres"],
        howToParticipate:
          "Participa com a mediador/a intercultural, col·labora en projectes de narratives transformadores, o sol·licita assessorament per a la teva organització sobre inclusió de persones migrades.",
      },
      {
        name: "Mareas en Moviment i Pau",
        tagline: "Defensem el dret a moure's amb dignitat",
        description:
          "Acompanyem en mobilitat humana, asil i refugi, i impulsem la cultura de pau i la memòria democràtica.",
        focus:
          "Defensem el dret a moure's amb dignitat, acompanyant processos d'asil i refugi, i impulsant la cultura de pau i la memòria democràtica.",
        activities: ["Acompanyament en sol·licituds d'asil", "Cultura de pau", "Memòria democràtica", "Orientació a refugiats/ades", "Xarxes d'acollida", "Mobilitat estudiantil"],
        projects: ["Refugi Segur", "Memòria Viva", "Mobilitat Digna", "Acollida i Pau"],
        howToParticipate:
          "Pots ser família d'acollida, col·laborar en l'orientació i l'acompanyament a persones refugiades, o sumar-te a les nostres activitats de memòria democràtica i cultura de pau.",
      },
      {
        name: "Mareas Diverses",
        tagline: "Visibilitzem i acompanyem les dissidències",
        description:
          "Abordem les realitats LGTBIQA+ des d'una perspectiva interseccional, amb èmfasi en persones migrants del col·lectiu.",
        focus:
          "Visibilitzem i acompanyem les dissidències sexuals i de gènere des d'una perspectiva interseccional, amb especial atenció a les persones LGTBIQA+ en context migratori.",
        activities: ["Espai segur LGTBIQA+", "Assessorament específic", "Visibilització i incidència", "Formació en diversitat", "Xarxa de suport mutu", "Projectes artístics"],
        projects: ["Arc de Sant Martí Sense Fronteres", "Diversitat Visible", "Espai Segur", "Orgull Migrant"],
        howToParticipate:
          "Uneix-te als nostres espais segurs, participa en activitats de visibilització, col·labora com a aliat/ada en formacions sobre diversitat o dona suport als nostres projectes d'acompanyament.",
      },
      {
        name: "Mareas Incidència",
        tagline: "Transformem lleis, polítiques i societats",
        description:
          "Dissenyem estratègies d'incidència política, jurídica i ciutadana per promoure canvis estructurals.",
        focus:
          "Transformem lleis, polítiques i societats a través d'estratègies d'incidència política, jurídica i ciutadana fonamentades en la recerca.",
        activities: ["Lobbying legislatiu", "Litigi estratègic", "Campanyes de sensibilització", "Formació en incidència", "Aliances estratègiques", "Informes de polítiques públiques"],
        projects: ["Llei Migració Digna", "Incidència ONU", "Xarxa Parlamentària", "Ciutadania Activa"],
        howToParticipate:
          "Col·labora en les nostres campanyes d'incidència, forma part del nostre equip jurídic voluntari, o participa en les formacions sobre eines de pressió democràtica.",
      },
      {
        name: "Mareas Cooperació",
        tagline: "Teixim xarxes per a la democràcia participativa",
        description:
          "Impulsem la cooperació internacional i la participació comunitària amb metodologies innovadores.",
        focus:
          "Teixim xarxes de cooperació internacional i participació comunitària per generar democràcia participativa i transformació col·lectiva.",
        activities: ["Projectes de cooperació internacional", "Participació comunitària", "Metodologies innovadores", "Aliances internacionals", "Intercanvis culturals", "Finançament solidari"],
        projects: ["Xarxa Iberoamericana", "Coopera Local", "Democràcia Participativa", "Fons Solidaris"],
        howToParticipate:
          "Participa en projectes de cooperació internacional, suma la teva organització a la nostra xarxa, o col·labora en el disseny de metodologies participatives.",
      },
      {
        name: "Mareas Lab",
        tagline: "Laboratori d'innovació social i digital",
        description:
          "Investiguem i dissenyem serveis de transformació i auditoria digital ètica per a la sobirania tecnològica.",
        focus:
          "Laboratori d'innovació social i digital que investiga i dissenya solucions tecnològiques ètiques per a la sobirania digital del tercer sector.",
        activities: ["Auditories digitals ètiques", "Formació en sobirania tecnològica", "Eines lliures i obertes", "Data lab social", "Anàlisi d'algoritmes", "Consultoria ètica d'IA"],
        projects: ["Mareas Data Lab", "Tech Ètica", "Programari Lliure Social", "IA Justa"],
        howToParticipate:
          "Suma't com a desenvolupador/a voluntari/ària, col·labora en investigacions d'ètica digital, o sol·licita una auditoria digital per a la teva organització.",
      },
      {
        name: "Mareas Consulting",
        tagline: "Consultoria amb impacte social real",
        description:
          "Prestem serveis de consultoria estratègica i comunicació amb perspectiva de drets humans.",
        focus:
          "Consultoria estratègica amb impacte social real, combinant la perspectiva de drets humans amb metodologies innovadores de gestió i comunicació.",
        activities: ["Planificació estratègica", "Comunicació amb impacte", "Avaluació de projectes", "Desenvolupament organitzacional", "Formació directiva", "Gestió d'aliances"],
        projects: ["Estratègia 2030", "Comunicació Transformadora", "Impacte Social", "Consultoria Pro Bono"],
        howToParticipate:
          "Sol·licita una consultoria per a la teva organització, col·labora com a expert/a en alguna de les nostres àrees, o uneix-te al nostre equip de consultors/es amb compromís social.",
      },
    ],
  },

  about: {
    badge: "La nostra identitat",
    title: "Qui som?",
    p1: "L'**ASSOCIACIÓ MAREAS, LAB D'INNOVACIÓ SOCIAL I DIGITAL** és una organització de base majoritàriament juvenil i intercultural, constituïda com a associació sense ànim de lucre regulada per la **Llei 4/2008 de Catalunya**.",
    p2: "El nostre model de treball es fonamenta en la **investigació-acció**: investiguem les realitats socials per dissenyar intervencions efectives que generin transformació estructural. Perseguim finalitats orientades a la promoció dels Drets Humans, la justícia social, el feminisme interseccional i la inclusió plena de les persones migrades i refugiades, acompanyant comunitats en la construcció d'una societat més equitativa i democràtica.",
    commitments: ["Compromís ODS", "Agenda 2030", "Transparència"],
    missionTitle: "La nostra Missió",
    mission:
      "La transformació estructural de la societat cap a la justícia social, l'equitat i la garantia dels Drets Humans, impulsant la sobirania tecnològica i l'empoderament de col·lectius en risc d'exclusió social, amb especial focus en la joventut i les dones migrants.",
    valuesTitle: "Els nostres Valors",
    values: [
      { title: "Justícia Social", description: "Treballem per una distribució equitativa de recursos, oportunitats i drets per a totes les persones." },
      { title: "Feminisme Interseccional", description: "Reconeixem com el gènere es creua amb altres identitats per crear experiències úniques de discriminació." },
      { title: "Interculturalitat", description: "Promovem el diàleg i la convivència entre cultures, construint ponts de comprensió mútua." },
      { title: "Drets Humans", description: "Defensem la dignitat inherent de totes les persones, sense distinció de cap mena." },
      { title: "Innovació Social", description: "Desenvolupem metodologies creatives per abordar els reptes socials complexos." },
      { title: "Participació", description: "Fomentem la ciutadania activa i l'empoderament de les comunitats." },
    ],
    transparency: {
      badge: "Compromís",
      title: "Transparència Institucional",
      text: "Com a entitat regulada per la Llei 4/2008 de Catalunya, retem comptes de cada euro invertit i de cada impacte generat. Els ingressos dels nostres serveis de consultoria es reinverteixen íntegrament en finalitats socials.",
      button: "Veure memòries anuals",
      stats: [
        { value: "100%", label: "Reinversió social" },
        { value: "Llei 4/2008", label: "Règim jurídic" },
        { value: "ESS", label: "Economia Social" },
        { value: "5 anys", label: "Mandat Junta" },
      ],
    },
  },

  services: {
    badge: "Mareas Consulting & Lab",
    title: "Serveis amb Impacte Social",
    intro:
      "Oferim serveis especialitzats de consultoria, auditoria digital ètica i formació per a institucions i empreses de l'Economia Social i Solidària. **Tots els ingressos es reinverteixen en finalitats socials.**",
    requestInfo: "Sol·licitar informació",
    items: [
      {
        title: "Consultoria Estratègica",
        description: "Avaluació de polítiques públiques, disseny de projectes socials i acompanyament institucional amb perspectiva de drets humans.",
        features: ["Avaluació d'impacte", "Disseny de projectes", "Acompanyament institucional", "Anàlisi de contextos"],
      },
      {
        title: "Auditoria Digital Ètica",
        description: "Serveis de transformació i auditoria digital per reduir la bretxa digital i fomentar la sobirania tecnològica.",
        features: ["Sobirania tecnològica", "Ètica de dades", "Eines lliures", "Auditories digitals"],
      },
      {
        title: "Formació i Capacitació",
        description: "Catàleg de formacions especialitzades en justícia social, feminisme interseccional, migracions i sobirania tecnològica.",
        features: ["Formació a mida", "Recursos educatius", "Tallers pràctics", "Acompanyament continu"],
      },
      {
        title: "Comunicació Estratègica",
        description: "Disseny de campanyes d'incidència, narratives transformadores i estratègia digital per a organitzacions socials.",
        features: ["Campanyes d'incidència", "Narratives transformadores", "Estratègia digital", "Consultoria en comunicació"],
      },
    ],
    processTitle: "El nostre Procés de Treball",
    process: [
      { title: "Contacte inicial", desc: "Escoltem les teves necessitats i objectius" },
      { title: "Diagnòstic", desc: "Analitzem el context i dissenyem l'estratègia" },
      { title: "Proposta", desc: "Presentem un pla detallat i pressupost" },
      { title: "Execució", desc: "Implementem i avaluem l'impacte" },
    ],
    experience: {
      title: "Experiència en Projectes Reals",
      text: "La nostra metodologia de recerca i acció no es queda en la teoria. Comptem amb el suport i el finançament d'entitats clau per a l'impacte social.",
      partners: [
        {
          initial: "C",
          name: "Fondo Calala",
          role: "Finançador",
          text: "Desenvolupem projectes recolzats i finançats pel Fondo de Mujeres Calala, enfortint xarxes, fomentant l'equitat i donant suport a l'acció directa de base comunitària.",
        },
        {
          initial: "R",
          name: "Projecte Radix",
          role: "Intervenció",
          text: "Participem activament en iniciatives transformadores com Radix, aplicant eines digitals i recerca per impulsar la sobirania tecnològica i el canvi social.",
        },
      ],
    },
  },

  projects: {
    badge: "La nostra acció al territori",
    title: "Projectes i Activitats",
    intro:
      "Des de la recerca fins a l'acció directa, impulsem iniciatives amb impacte real per promoure els drets humans i la inclusió plena.",
    statusLabel: "Estat",
    supportLabel: "Suport",
    whatLabel: "Què és i per a què?",
    howLabel: "Com i amb qui?",
    impactLabel: "Impacte esperat",
    items: [
      {
        title: "«Veus a contracorrent: Escola de Comunicació Feminista i Contranarrativa per a la pau»",
        category: "Comunicació Formativa i Incidència",
        status: "En execució",
        budget: "10.000€",
        description:
          "Iniciativa de comunicació formativa i d'incidència adreçada principalment a dones joves migrants a Catalunya (i a escala estatal). Parteix d'una premissa política clara: les dones migrants joves no necessiten que algú parli per elles; necessiten eines, espais segurs i comunitat per parlar per si mateixes. Contribueix a la participació social davant el risc d'exclusió.",
        details:
          "L'escola s'articula en tres fases: (I) disseny metodològic participatiu amb una xarxa de formadores expertes en comunicació comunitària, activisme i feminismes; (II) cicle de formació híbrida sobre narratives de gènere, anàlisi de discursos d'odi, ciberfeminisme i sobirania tecnològica; (III) trobada presencial a Barcelona amb producció col·laborativa de continguts i diàleg intergeneracional.",
        impact:
          "Emmarcat en la Línia A5 (sensibilització, comunicació i recerca). El seu objectiu és produir materials digitals de lliure accés i crear una xarxa activa de creadores de contingut feministes joves migrants, actuant com a intervenció política davant els discursos d'odi antimigració.",
      },
      {
        title: "«Prenem la Paraula: Escola política i digital de dones i dissidències juvenils migrants»",
        category: "Escola de Formació i Lideratge",
        status: "Projecte a 24 mesos",
        budget: "Radix",
        description:
          "Iniciativa per enfortir el lideratge polític i comunicatiu de joves dones i dissidències sexuals migrants, exiliades i refugiades del Sud Global (18-35 anys, amb flexibilitat d'edat per contextos de precarietat). El seu objectiu és brindar eines per defensar drets, combatre discursos d'odi i ocupar espais en l'activisme feminista i LGTBIQA+.",
        details:
          "Escola de dos anys de modalitat híbrida (Catalunya presencial i resta d'Espanya virtual) mitjançant metodologia IAP. Inclou mòduls de política interseccional i competències digitals, producció d'un pòdcast propi, escola d'estiu, suport tecnològic a organitzacions i diàlegs intergeneracionals amb activistes històriques.",
        impact:
          "Contribueix directament a la protecció dels drets fonamentals de dones i persones LGTBIAQ+ migrants, incloses les que es troben en situació irregular. A través de contranarratives pròpies, promou la dignitat humana, la igualtat i la democràcia, afrontant el juvenicidi moral i l'exclusió estructural.",
      },
    ],
  },

  advocacy: {
    badge: "Mareas Lab",
    title: "Incidència i Recursos",
    intro:
      "Espai per a publicacions de recerca, guies sobre sobirania tecnològica i campanyes d'incidència política.",
    publicationsTitle: "Publicacions Recents",
    publications: [{ title: "Guia de Sobirania Tecnològica per a Organitzacions Socials (en castellà)", type: "Guia", year: "2026" }],
    campaignsTitle: "Campanyes Actives",
    activeBadge: "Activa",
    campaigns: [
      { title: "Veus a contracorrent", desc: "Escola de Comunicació Feminista i Contranarrativa per a la pau" },
      { title: "Prenem la Paraula", desc: "Escola política i digital de dones i dissidències juvenils migrants" },
    ],
    newsletter: {
      title: "Subscriu-te al nostre butlletí",
      text: "Rep mensualment novetats, recursos i convocatòries.",
      emailPlaceholder: "El teu correu electrònic",
      subscribeAria: "Subscriure'm al butlletí",
      success: "Gràcies! T'hem subscrit correctament.",
      error: "Hi ha hagut un error en subscriure't. Torna-ho a provar.",
      connectionError: "Error de connexió en subscriure's. Si us plau, revisa la teva connexió a internet.",
      consentPurpose: "enviar-te el butlletí",
    },
  },

  contact: {
    badge: "Uneix-te al canvi",
    title: "El canvi comença quan decideixes ser-ne part",
    intro:
      "Sigui quin sigui el teu origen, la teva edat o la teva història, hi ha un lloc per a tu a Mareas. Associa't, col·labora, sol·licita els nostres serveis o simplement mantén-te informat/da.",
    formTitle: "Contacta amb nosaltres",
    formDescription: "Explica'ns com t'agradaria participar o quins serveis necessites.",
    tabs: { join: "Associar-me", services: "Serveis", collaborate: "Col·laborar" },
    sendAnother: "Enviar-ne una altra",
    sendError: "Hi ha hagut un error en enviar. Si us plau, torna-ho a provar.",
    formspreeError: "🚨 Error de Formspree: ",
    networkError: "🚨 Error de xarxa o del navegador. Si us plau, torna-ho a provar o contacta directament per correu electrònic: info@mareas.org",
    join: {
      name: "Nom complet *",
      namePlaceholder: "El teu nom",
      email: "Correu electrònic *",
      emailPlaceholder: "tu@email.com",
      interest: "Quina Marea t'interessa més?",
      interestPlaceholder: "Selecciona una Marea (Opcional)",
      message: "Missatge",
      messagePlaceholder: "Explica'ns alguna cosa sobre tu i per què vols unir-t'hi (opcional)",
      submit: "Vull associar-me",
      successTitle: "Sol·licitud rebuda!",
      successText: "Ens posarem en contacte amb tu en els propers dies. Gràcies per voler unir-te a Mareas!",
      consentPurpose: "gestionar la teva sol·licitud d'associació",
    },
    services: {
      name: "Organització *",
      namePlaceholder: "Nom de la teva organització",
      email: "Correu electrònic professional *",
      emailPlaceholder: "contacte@organitzacio.org",
      interest: "Àrea de Consultoria / Marea",
      interestPlaceholder: "Selecciona una àrea d'interès",
      message: "Missatge *",
      messagePlaceholder: "Explica'ns més sobre el teu projecte o necessitats...",
      submit: "Sol·licitar informació",
      successTitle: "Sol·licitud rebuda!",
      successText: "Ens posarem en contacte amb la teva organització en breu. Gràcies per confiar en Mareas!",
      consentPurpose: "respondre a la teva sol·licitud de serveis",
    },
    collaborate: {
      name: "Nom complet *",
      namePlaceholder: "El teu nom",
      email: "Correu electrònic *",
      emailPlaceholder: "tu@email.com",
      interest: "Amb quina Marea t'agradaria col·laborar?",
      interestPlaceholder: "Selecciona una Marea (Opcional)",
      type: "Forma de col·laboració",
      typePlaceholder: "Donació, Aliança, Voluntariat...",
      message: "Missatge",
      messagePlaceholder: "Explica'ns com t'agradaria col·laborar (opcional)",
      submit: "Vull col·laborar",
      successTitle: "Gràcies pel teu interès!",
      successText: "Ens posarem en contacte amb tu aviat per explorar com col·laborar junts.",
      consentPurpose: "respondre a la teva proposta de col·laboració",
    },
    consent: {
      label: "He llegit i accepto la",
      link: "Política de Privacitat",
      info: "Responsable: Mareas, Lab d'innovació social i digital. Finalitat: {purpose}. Base legal: el teu consentiment. Destinataris: no se cedeixen dades; l'enviament es gestiona amb Formspree (EUA). Drets: accés, rectificació, supressió i altres a info@mareas.org.",
    },
    info: {
      title: "Informació de contacte",
      email: "Correu electrònic",
      phone: "Telèfon",
      nif: "NIF",
      followTitle: "Segueix-nos",
      instagramAria: "Visitar el nostre perfil a Instagram",
      legalTitle: "Règim Jurídic",
      legalName: "Mareas, Lab d'innovació social i digital",
      legalNif: "NIF",
      legalText:
        "Associació regulada per la Llei 4/2008, de 24 d'abril, del llibre tercer del Codi civil de Catalunya, relatiu a les persones jurídiques, i la Llei orgànica 1/2002, de 22 de març, reguladora del dret d'associació. Inscrita al Registre d'Associacions de la Generalitat de Catalunya (secció 1a, resolució 23/7/26) amb número d'inscripció: 80169.",
      legalNotice: "Avís Legal",
      privacy: "Privacitat",
      cookies: "Cookies",
    },
  },

  footer: {
    tagline: "Transformació estructural cap a la justícia social i l'equitat. Think-and-do tank pels Drets Humans.",
    instagramAria: "Visitar el nostre perfil a Instagram",
    quickLinksTitle: "Enllaços ràpids",
    mareasTitle: "Les 9 Mareas",
    mareasPrefix: "Mareas",
    mareasLinks: ["Juvenil", "Feministes", "Migrants", "Pau", "Diverses", "Incidència", "Cooperació", "Lab", "Consulting"],
    contactTitle: "Contacte",
    nif: "NIF",
    copyright: "© 2026 Mareas, Lab d'innovació social i digital (NIF: G26956961). Tots els drets reservats.",
    legalNotice: "Avís Legal",
    privacy: "Privacitat",
    cookies: "Cookies",
  },

  counternarratives: {
    back: "Tornar a l'inici",
    badge: "Laboratori d'Idees",
    title: "Repositori de Contranarratives",
    intro:
      "Davant dels discursos d'odi, la desinformació i els prejudicis, des de Mareas oposem dades, Drets Humans i perspectiva interseccional. Fes clic a les targetes per descobrir la realitat darrere del mite.",
    filters: { all: "Totes", migration: "Migració", gender: "Gènere", technology: "Tecnologia" },
    mythLabel: "El Mite",
    realityLabel: "La Realitat",
    reveal: "Fes clic per revelar",
    sourceLabel: "Font",
    items: [
      {
        category: "migration",
        myth: "Les persones migrants col·lapsen els serveis públics i la sanitat.",
        fact: "Diversos estudis demostren que la població migrant aporta més a les arques públiques via impostos i cotitzacions socials del que rep en serveis. A més, el seu ús de la sanitat és menor perquè, de mitjana, és una població més jove.",
        source: "Informes del Banc d'Espanya i Amnistia Internacional.",
      },
      {
        category: "gender",
        myth: "El feminisme ja no és necessari perquè hi ha igualtat legal.",
        fact: "La igualtat legal no es tradueix automàticament en igualtat real. Persisteixen la bretxa salarial, la violència masclista, els sostres de vidre i la feminització de la pobresa i les cures.",
        source: "Dades de l'INE i l'OIT.",
      },
      {
        category: "technology",
        myth: "Els algoritmes i la Intel·ligència Artificial són neutrals i objectius.",
        fact: "La IA aprèn de dades històriques generades per humans, reproduint i fins i tot amplificant biaixos racistes, masclistes i classistes si no es dissenya amb una ètica de la sobirania digital.",
        source: "AlgorithmWatch i Observatori d'Algoritmes.",
      },
      {
        category: "migration",
        myth: "Les vies legals i segures provoquen un 'efecte crida'.",
        fact: "El veritable 'efecte crida' és la desigualtat global i els conflictes. Les vies legals redueixen el tràfic de persones, eviten morts al mar i permeten una gestió migratòria ordenada i garantista.",
        source: "ACNUR i Comissió Espanyola d'Ajuda al Refugiat (CEAR).",
      },
    ],
  },
};
