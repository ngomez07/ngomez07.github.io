// =====================================================================
// PROYECTOS DEL PORTAFOLIO — aquí vive TODO el contenido de las tarjetas.
// El sitio construye las tarjetas y galerías a partir de esta lista.
//
// Para agregar un proyecto: copia un bloque { ... }, cámbiale los datos
// y ponlo en la posición donde quieres que aparezca (el orden de la lista
// es el orden en la página).
//
// Campos:
//   id        identificador corto, sin espacios
//   categoria "interactiva" o "biomedica" (para los filtros)
//   portada   imagen de la tarjeta
//   meta      línea pequeña de arriba (institución, lugar, fechas)
//   titulo    título de la tarjeta
//   descripcion  párrafo principal
//   resultado (opcional) línea destacada al final; pon null si no hay
//   etiquetas lista de tecnologías/habilidades
//   galeria   fotos y videos (.mp4) en orden; cada uno con su texto
//             en español (es) y en inglés (en). Para videos, crea una
//             imagen con el mismo nombre terminada en -poster.jpg
// Todo texto va en dos idiomas: { es: "...", en: "..." }
// =====================================================================

const PROYECTOS = [
  {
    id: "sala-nido",
    categoria: "interactiva",
    portada: "assets/images/sala-nido/celebrar-proyeccion-telas.jpg",
    meta: { es: "Parque Explora · Punta Cana, República Dominicana", en: "Parque Explora · Punta Cana, Dominican Republic" },
    titulo: { es: "Sala Nido — Centro Cultural Rainieri", en: "Sala Nido — Rainieri Cultural Center" },
    descripcion: {
      es: "Líder técnico de 22 experiencias interactivas en 8 zonas, diseñadas con el equipo de Parque Explora. Integré el trabajo de 4 proveedores sobre 30 computadores y 11 proyectores, diseñé la arquitectura de automatización de la sala, programé su gestión remota por red con Bitfocus Companion y lideré 3 meses de montaje, pruebas y puesta en marcha en sitio. Antes de instalar, hicimos pruebas de usuario de cada experiencia con equipos alquilados.",
      en: "Technical lead for 22 interactive experiences across 8 zones, designed with the Parque Explora team. I integrated the work of 4 vendors on 30 computers and 11 projectors, designed the room's automation architecture, programmed its remote network management with Bitfocus Companion, and led 3 months of on-site installation, testing and commissioning. Before installing, we user-tested every experience on rented equipment.",
    },
    resultado: {
      es: "Apertura al público: 23 de octubre de 2026.",
      en: "Opens to the public on October 23, 2026.",
    },
    etiquetas: ["Technical Lead", "Vendor Integration", "Unity", "Bitfocus Companion", "VXT", "DMX"],
    galeria: [
      { src: "assets/images/sala-nido/sala-nido-recorrido.mp4",
        es: "Video — recorrido por la Sala Nido funcionando: Llegar, el interior de Nido con sus proyecciones, Descubrir, pantallas interactivas y Celebrar.",
        en: "Video — a walkthrough of the Sala Nido up and running: Llegar, the inside of Nido with its projections, Descubrir, interactive screens and Celebrar." },
      { src: "assets/images/sala-nido/celebrar-proyeccion-telas.jpg",
        es: "Celebrar — proyección sobre telas sincronizada con control DMX, inspirada en el carnaval de Punta Cana. Al fondo, los vestidos de las musas.",
        en: "Celebrar — projection on fabric synchronized with DMX control, inspired by the Punta Cana carnival. In the background, the muses' dresses." },
      { src: "assets/images/sala-nido/celebrar-detalle-telas.jpg",
        es: "Celebrar — detalle de la proyección sobre las telas.",
        en: "Celebrar — detail of the projection on fabric." },
      { src: "assets/images/sala-nido/sonar-recetario-calle.jpg",
        es: "Sonar — entrada al hito. Recetario de la calle: dos estaciones de comida callejera dominicana (el visitante elige un plato y la pantalla vertical lo prepara y cuenta su historia) y una radio simulada con bachata y merengue de otras épocas.",
        en: "Sonar — exhibit entrance. Street Recipe Book: two Dominican street-food stations (visitors pick a dish; the vertical screen prepares it and tells its story) and a simulated radio playing bachata and merengue from past eras." },
      { src: "assets/images/sala-nido/sonar-tirando-pasitos.jpg",
        es: "Sonar · Tirando pasitos — una clase de baile simulada de merengue, bachata y dembow.",
        en: "Sonar · Tirando pasitos — a simulated dance class in merengue, bachata and dembow." },
      { src: "assets/images/sala-nido/sonar-secuenciador.mp4",
        es: "Sonar · Video (con audio) — prueba de concepto del secuenciador de pasos, que después llegó a producción. Lideré su desarrollo electrónico y de software (Qt, con Ableton para los filtros).",
        en: "Sonar · Video (with sound) — proof of concept for the step sequencer, which later went into production. I led its electronics and software development (Qt, with Ableton for the filters)." },
      { src: "assets/images/sala-nido/sonar-pruebas-usuario.mp4",
        es: "Sonar · Video — pruebas de usuario antes de instalar: alquilamos equipos y probamos cada experiencia para validar que las instrucciones fueran claras y ver cómo reaccionaban las personas.",
        en: "Sonar · Video — user testing before installation: we rented equipment and tested each experience to check that the instructions were clear and to see how people reacted." },
      { src: "assets/images/sala-nido/deporte-vitilla-virtual.jpg",
        es: "Deporte — vitrina multiformato, pantalla con momentos históricos del béisbol y vitilla virtual: un juego de béisbol en la pantalla vertical que se juega con un control de movimiento, al estilo Wii.",
        en: "Deporte (Sports) — multi-format showcase, a screen with historic baseball moments, and virtual vitilla: a baseball game on the vertical screen played with a motion controller, Wii-style." },
      { src: "assets/images/sala-nido/nido-cigua-palmera.jpg",
        es: "Nido — instalación inmersiva con 3 espacios de proyección que cuenta la historia de la cigua palmera, ave nacional de República Dominicana, y su importancia.",
        en: "Nido (Nest) — immersive installation with 3 projection spaces telling the story of the palmchat, the Dominican Republic's national bird, and why it matters." },
      { src: "assets/images/sala-nido/llegar-canoa.jpg",
        es: "Llegar — canoa central con objetos que llegaron a República Dominicana, tótems interactivos que explican los más importantes y pantallas verticales con inmigrantes contando su llegada. Calibré el audio dirigido para que, al acercarse a cada pantalla, se escuche al testimonio sobre un fondo de olas.",
        en: "Llegar (Arriving) — a central canoe holding objects that arrived in the Dominican Republic, interactive totems explaining the key ones, and vertical screens with immigrants telling how they arrived. I calibrated directional audio so that, as visitors approach each screen, they hear the testimony over the sound of waves." },
      { src: "assets/images/sala-nido/suplir-entre-sillas.jpg",
        es: "Suplir · Entre sillas — instalación con las historias que se escuchan en el colmado; audio con botones para cambiar entre español e inglés. Al fondo, Deporte y el Recetario de la calle.",
        en: "Suplir · Entre sillas (Among Chairs) — an installation with the stories heard at the colmado, the neighborhood corner store; button-controlled audio switches between Spanish and English. In the background, Deporte and the Street Recipe Book." },
    ],
  },

  {
    id: "cvm-panama",
    categoria: "interactiva",
    portada: "assets/images/cvm-panama/app-ar-secretos.jpg",
    meta: { es: "Parque Explora · Panamá · en producción", en: "Parque Explora · Panama · in production" },
    titulo: { es: "CVM — Museo del Visitante del Canal de Panamá", en: "CVM — Panama Canal Visitor Museum" },
    descripcion: {
      es: "En equipo, diseñé la arquitectura tecnológica completa del museo y planeé su desarrollo. Para presentar el proyecto a las directivas del CVM, lideré con un proveedor el desarrollo de una app de realidad aumentada que permite recorrer y visualizar los espacios. También acompañamos al fabricante durante la producción. En la Máquina de agua diseñé desde la arquitectura tecnológica hasta la jugabilidad.",
      en: "As part of a team, I designed the museum's full technology architecture and planned its development. To present the project to the CVM's leadership, I led the development, with a vendor, of an augmented-reality app for walking through and visualizing the spaces. We also supported the manufacturer during production. For the Water Machine, I designed everything from the technology architecture to the gameplay.",
    },
    resultado: null,
    etiquetas: ["Tech Architecture", "Development Planning", "AR", "Vendor Support"],
    galeria: [
      { src: "assets/images/cvm-panama/app-ar-secretos.jpg",
        es: "Herramienta de visualización en realidad aumentada: una app para recorrer y visualizar los espacios del CVM, como la sala Secretos, moviendo el dispositivo gracias a su giroscopio.",
        en: "Augmented-reality visualization tool: an app for walking through and visualizing the CVM spaces, such as the Secretos gallery, by moving the device thanks to its gyroscope." },
      { src: "assets/images/cvm-panama/app-ar-directivas.mp4",
        es: "Video — herramienta de visualización entregada al CVM para presentar el proyecto a las directivas de forma dinámica. Lideré su desarrollo con un proveedor y programé parte de la interacción.",
        en: "Video — visualization tool delivered to the CVM to present the project dynamically to its leadership. I led its development with a vendor and programmed part of the interaction." },
      { src: "assets/images/cvm-panama/memorias-totem-fabricacion.jpg",
        es: "Memorias — tótem en fabricación en la planta del proveedor, con acompañamiento de nuestro equipo.",
        en: "Memorias (Memories) — totem being manufactured at the vendor's plant, with our team's support." },
      { src: "assets/images/cvm-panama/ritmos-secuenciador-fabricacion.jpg",
        es: "Ritmos — secuenciador en fabricación en la planta del proveedor. Participé en el diseño de esta experiencia.",
        en: "Ritmos (Rhythms) — sequencer being manufactured at the vendor's plant. I took part in designing this experience." },
      { src: "assets/images/cvm-panama/ritmos-interfaz.jpg",
        es: "Ritmos — interfaz desarrollada para el secuenciador, probada en el mueble.",
        en: "Ritmos — interface developed for the sequencer, tested on the unit." },
      { src: "assets/images/cvm-panama/maquina-de-agua.jpg",
        es: "Mecanismos · Máquina de agua — juego sobre el funcionamiento del Canal de Panamá en una mesa con proyección. Diseñé la experiencia desde la arquitectura tecnológica hasta la jugabilidad y las pantallas. A la izquierda, un tótem informativo de la sala Usted está aquí.",
        en: "Mecanismos · Máquina de agua (Water Machine) — a game about how the Panama Canal works, on a projection table. I designed the experience from its technology architecture to its gameplay and screens. On the left, an information totem from the You Are Here gallery." },
    ],
  },

  {
    id: "debora-arango",
    categoria: "interactiva",
    portada: "assets/images/debora-arango/bestiario-kinect-ia.jpg",
    meta: { es: "Tecnológico de Artes Débora Arango · 2023 – 2025", en: "Tecnológico de Artes Débora Arango · 2023 – 2025" },
    titulo: { es: "Débora Arango — Facultad de Interacción Digital", en: "Débora Arango — Faculty of Digital Interaction" },
    descripcion: {
      es: "Programé y lideré el desarrollo de Notas & Colores, un videojuego de ritmo con música de la Facultad de Producción Sonora cuyos niveles se generan analizando el audio en Python. Para la exposición inmersiva PPI · Débora Transtemporal, desarrollé toda la electrónica, la programación y la arquitectura de Débora Íntima, un tocador interactivo modular. Con estudiantes, lideré y programé el Bestiario (Kinect e IA generativa en tiempo real) y un museo virtual en realidad virtual, y desarrollamos una app de realidad aumentada para un libro ilustrado.",
      en: "I programmed and led the development of Notas & Colores, a rhythm game built on music from the Sound Production faculty, whose levels are generated by analyzing the audio in Python. For the PPI · Débora Transtemporal immersive exhibition, I built all the electronics, programming and architecture for Débora Íntima, a modular interactive vanity. With students, I led and programmed the Bestiary (Kinect and real-time generative AI) and a virtual-reality museum, and we built an augmented-reality app for an illustrated book.",
    },
    resultado: {
      es: "Programa académico aprobado por el Ministerio de Educación, con mi participación en su diseño curricular. Notas & Colores sigue en desarrollo y se ha presentado a varias entidades.",
      en: "Academic program approved by Colombia's Ministry of Education, with my participation in its curriculum design. Notas & Colores remains in active development and has been presented to several organizations.",
    },
    etiquetas: ["TouchDesigner", "Kinect", "StreamDiffusion", "Unity", "Python", "VR / AR", "Electronics"],
    galeria: [
      { src: "assets/images/debora-arango/bestiario-kinect-ia.jpg",
        es: "Bestiario de Débora — con Kinect, el visitante juega a ser una de las bestias de Débora Arango: su silueta se transforma en tiempo real con StreamDiffusion y prompts basados en sus obras. Lideré el desarrollo con estudiantes en TouchDesigner y programé el cambio entre bestias. Exposición inmersiva PPI · Débora Transtemporal.",
        en: "Débora's Bestiary — using Kinect, visitors become one of Débora Arango's beasts: their silhouette is transformed in real time with StreamDiffusion and prompts based on her artworks. I led development with students in TouchDesigner and programmed the switching between beasts. PPI immersive exhibition · Débora Transtemporal." },
      { src: "assets/images/debora-arango/bestiario-variante.jpg",
        es: "Bestiario de Débora — otra variante: visuales generados en tiempo real a partir de las siluetas de los visitantes.",
        en: "Débora's Bestiary — another variant: visuals generated in real time from visitors' silhouettes." },
      { src: "assets/images/debora-arango/intima-prototipo-prueba.jpg",
        es: "Débora Íntima — conceptualización y prueba de usuario con el prototipo.",
        en: "Débora Íntima — concept development and user testing with the prototype." },
      { src: "assets/images/debora-arango/intima-tocador.jpg",
        es: "Débora Íntima — tocador interactivo 100 % modular: al abrir los cajones, el espejo revela exploraciones de la intimidad femenina. Desarrollé toda la electrónica, la programación y la arquitectura tecnológica. PPI · Débora Transtemporal.",
        en: "Débora Íntima — a fully modular interactive vanity: opening the drawers reveals explorations of female intimacy in the mirror. I developed all the electronics, programming and technology architecture. PPI · Débora Transtemporal." },
      { src: "assets/images/debora-arango/intima-con-publico.mp4",
        es: "Débora Íntima en funcionamiento con público durante la exposición.",
        en: "Débora Íntima running with visitors during the exhibition." },
      { src: "assets/images/debora-arango/intima-ensamble-electronica.jpg",
        es: "Débora Íntima — proceso: ensamble de la electrónica del tocador en el laboratorio.",
        en: "Débora Íntima — process: assembling the vanity's electronics in the lab." },
      { src: "assets/images/debora-arango/museo-virtual-vr.jpg",
        es: "Museo virtual — recorrido guiado en realidad virtual por los procesos detrás de la exposición final: espacios y personajes de las distintas experiencias. Lideré y programé con estudiantes toda la experiencia: conceptualización, recorrido, interfaz de usuario y la captura de espacios 360° de la exposición y de la institución. Aquí, un estudiante probándolo.",
        en: "Virtual museum — a guided virtual-reality tour of the processes behind the final exhibition, with spaces and characters from the different experiences. With students, I led and programmed the whole experience: concept, tour, user interface, and 360° capture of the exhibition and campus spaces. Here, a student testing it." },
      { src: "assets/images/debora-arango/museo-virtual-360.jpg",
        es: "Museo virtual — escenario 360° en formato equirectangular; al cerrarse en esfera se vuelve un espacio inmersivo donde se descubre el origen de la historia de Cordelia, otra experiencia de la exposición.",
        en: "Virtual museum — a 360° scene in equirectangular format; wrapped into a sphere, it becomes an immersive space revealing where the story of Cordelia, another experience in the exhibition, came from." },
      { src: "assets/images/debora-arango/cordelia-app-ar.jpg",
        es: "Cordelia — app de realidad aumentada desarrollada en Unity para un libro ilustrado: mientras el libro cuenta cómo una niña llega a estudiar artes, la app muestra lo que Cordelia ve en la historia. PPI · Débora Transtemporal.",
        en: "Cordelia — an augmented-reality app built in Unity for an illustrated book: while the book tells how a girl comes to study the arts, the app shows what Cordelia sees in the story. PPI · Débora Transtemporal." },
      { src: "assets/images/debora-arango/notas-colores.mp4",
        es: "Notas & Colores · Video (con audio) — videojuego de ritmo tipo Guitar Hero con las producciones propias de la Facultad de Producción Sonora. Programé y lideré su desarrollo en Unity.",
        en: "Notas & Colores · Video (with sound) — a Guitar Hero-style rhythm game built on original music from the Sound Production faculty. I programmed and led its development in Unity." },
      { src: "assets/images/debora-arango/notas-colores-codigo.jpg",
        es: "Notas & Colores — script en Python con librosa que detecta los beats y el tono de cada canción y genera automáticamente las notas de cada nivel.",
        en: "Notas & Colores — a Python script using librosa that detects each song's beats and pitch and automatically generates the notes for every level." },
    ],
  },

  {
    id: "ia-flujo",
    categoria: "interactiva",
    portada: "assets/images/ia-teatro/cuarto-bahareque.jpg",
    meta: { es: "Proyectos propios · en progreso", en: "Personal projects · in progress" },
    titulo: { es: "IA en mi flujo de trabajo", en: "AI in my workflow" },
    descripcion: {
      es: "Uso la IA como parte de mi proceso creativo y técnico: diseño agentes que trabajan conmigo en distintas aplicaciones, prototipo con desarrollo asistido por IA y genero imágenes para piezas escénicas. Este espacio crece con cada proyecto nuevo.",
      en: "I use AI as part of my creative and technical process: I design agents that work alongside me across different apps, prototype with AI-assisted development and generate imagery for stage pieces. This space grows with every new project.",
    },
    resultado: {
      es: "En progreso: escenografía para la obra «Amo a mi perro pero no a mi madre», estreno el 13 de noviembre de 2026.",
      en: "In progress: set imagery for the play “Amo a mi perro pero no a mi madre”, premiering November 13, 2026.",
    },
    etiquetas: ["Generative AI", "AI Agents", "AI-assisted Development", "Set Design"],
    galeria: [
      { src: "assets/images/ia-teatro/cuarto-bahareque.jpg",
        es: "«Amo a mi perro pero no a mi madre» — cuarto de bahareque con el cuadro del Sagrado Corazón, generado con IA para la escenografía. Trabajo en progreso.",
        en: "“Amo a mi perro pero no a mi madre” — a wattle-and-daub room with a Sacred Heart painting, generated with AI for the set. Work in progress." },
      { src: "assets/images/ia-teatro/ventana-pueblo.jpg",
        es: "Ventana con rejas hacia un pueblo de montaña, una de varias iteraciones de la escenografía.",
        en: "A barred window onto a mountain village, one of several set iterations." },
      { src: "assets/images/ia-teatro/muro-ladrillo.jpg",
        es: "Muro de ladrillo y techo de madera: base del espacio escénico.",
        en: "Brick wall and wooden ceiling: the base of the stage space." },
      { src: "assets/images/ia-teatro/cuadro-sagrado-corazon.jpg",
        es: "Cuadro del Sagrado Corazón con marco dorado, elemento de utilería generado con IA.",
        en: "Sacred Heart painting with a gilded frame, an AI-generated prop element." },
    ],
  },

  {
    id: "investigacion-propia",
    categoria: "interactiva",
    portada: "assets/images/investigacion/osmosys-fotogrametria.jpg",
    meta: { es: "Proyectos propios · Colectivo Osmosys", en: "Personal projects · Osmosys collective" },
    titulo: { es: "Investigación y experimentación", en: "Research and experimentation" },
    descripcion: {
      es: "Exploraciones propias en visuales generativas y proyección: videomapping con fotogrametría y nube de puntos con el colectivo Osmosys (en desarrollo), visuales que reaccionan en tiempo real al clima de la ciudad mediante una API y mapping audiorreactivo.",
      en: "Self-driven explorations in generative visuals and projection: videomapping with photogrammetry and point clouds with the Osmosys collective (in development), visuals that react in real time to the city's weather through an API, and audio-reactive mapping.",
    },
    resultado: null,
    etiquetas: ["TouchDesigner", "Photogrammetry", "Point Clouds", "APIs", "Audio-reactive"],
    galeria: [
      { src: "assets/images/investigacion/osmosys-fotogrametria.jpg",
        es: "Colectivo Osmosys — videomapping con fotogrametría: la pieza se enlaza a una nube de puntos, lo que da proyecciones más precisas y permite formatos granulares. Técnica en desarrollo.",
        en: "Osmosys collective — videomapping with photogrammetry: the piece is linked to a point cloud, giving more precise projections and enabling granular formats. Technique in development." },
      { src: "assets/images/investigacion/visual-fractal-clima.jpg",
        es: "Visual fractal en TouchDesigner conectada por API al clima de la ciudad donde se proyecta.",
        en: "A fractal visual in TouchDesigner connected via API to the weather of the city where it is projected." },
      { src: "assets/images/investigacion/visual-clima.jpg",
        es: "Otra exploración de la misma línea: una visual que reacciona al clima del lugar de proyección.",
        en: "Another exploration in the same line: a visual that reacts to the weather at the projection site." },
      { src: "assets/images/investigacion/mapping-moto.jpg",
        es: "Mapping de mi moto con visuales audiorreactivas.",
        en: "Projection mapping on my motorcycle with audio-reactive visuals." },
    ],
  },

  {
    id: "biomedico",
    categoria: "biomedica",
    portada: "assets/images/biomedica/simulador-respiratorio.jpg",
    meta: { es: "Minciencias · Universidad de los Andes · Universidad de la Sabana · 2015 – 2021", en: "Minciencias · Universidad de los Andes · Universidad de la Sabana · 2015 – 2021" },
    titulo: { es: "Investigación biomédica", en: "Biomedical research" },
    descripcion: {
      es: "Componente viscoelástico para un simulador respiratorio y modelo predictivo para evaluar la salud pulmonar (Minciencias). Dispositivos de asistencia para personas con discapacidad visual y simulación de impactos balísticos (Uniandes). Prótesis transfemoral con control basado en análisis dinámico inverso (La Sabana).",
      en: "A viscoelastic component for a respiratory simulator and a predictive model for lung health assessment (Minciencias). Assistive devices for people with visual impairments and ballistic impact simulation (Universidad de los Andes). A transfemoral prosthesis controlled through inverse dynamic analysis (Universidad de la Sabana).",
    },
    resultado: null,
    etiquetas: ["Medical Devices", "Predictive Modeling", "Simulation", "MATLAB", "ANSYS"],
    galeria: [
      { src: "assets/images/biomedica/simulador-respiratorio.jpg",
        es: "Simulador de biomecánica respiratoria (Minciencias). Participé en su conceptualización y fabricación, en las pruebas de resistencia ventilatoria con un ventilador y en la modelación matemática de su respuesta mecánica.",
        en: "Respiratory biomechanics simulator (Minciencias). I took part in its concept and fabrication, in ventilatory resistance tests with a ventilator, and in the mathematical modeling of its mechanical response." },
      { src: "assets/images/biomedica/fuelle-piston-viscoelastico.jpg",
        es: "Fuelle del simulador con el pistón viscoelástico que diseñé. Con el ventilador probé sus curvas de relajación y fluencia para reproducir el comportamiento de una unidad alveolar.",
        en: "The simulator's bellows with the viscoelastic piston I designed. Using the ventilator, I tested its relaxation and creep curves to reproduce the behavior of an alveolar unit." },
    ],
  },

];
