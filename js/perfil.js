// =====================================================================
// TRAYECTORIA Y FORMACIÓN — edita aquí cargos, cursos e idiomas.
// Todo texto va en dos idiomas: { es: "...", en: "..." }.
// El orden de cada lista es el orden en la página.
// =====================================================================

const TRAYECTORIA = [
  {
    fechas: "2022 – 2023 · 2024 · 2025 – 2026",
    cargo: { es: "Líder Desarrollador Interactivo → Profesional Desarrollador Sr → Coordinador de Artes y Tecnología Jr", en: "Lead Interactive Developer → Senior Developer → Junior Arts & Technology Coordinator" },
    lugar: "Parque Explora · Medellín",
    resumen: {
      es: "Líder técnico de la Sala Nido del Centro Cultural Rainieri y diseño en equipo de la arquitectura tecnológica del Museo del Visitante del Canal de Panamá.",
      en: "Technical lead for the Sala Nido at the Rainieri Cultural Center and team design of the technology architecture for the Panama Canal Visitor Museum.",
    },
  },
  {
    fechas: "2023 – 2025",
    cargo: { es: "Docente de Cátedra, Facultad de Interacción Digital", en: "Adjunct Lecturer, Faculty of Digital Interaction" },
    lugar: "Tecnológico de Artes Débora Arango · Envigado",
    resumen: {
      es: "Seis periodos académicos de docencia (2.984 horas certificadas) en programación y proyectos. Participé en el diseño curricular de un programa aprobado por el Ministerio de Educación, lideré con estudiantes proyectos de investigación-creación para la exposición inmersiva Débora Transtemporal y desarrollé el videojuego Notas & Colores.",
      en: "Six academic terms of teaching (2,984 certified hours) in programming and project courses. I took part in the curriculum design of a program approved by Colombia's Ministry of Education, led research-creation projects with students for the Débora Transtemporal immersive exhibition, and developed the Notas & Colores game.",
    },
  },
  {
    fechas: "2021",
    cargo: { es: "Coordinador del semillero de Simuladores biomédicos", en: "Coordinator, Biomedical Simulators Research Group" },
    lugar: "Universidad EIA · Envigado",
    resumen: {
      es: "Coordiné el semillero y dirigí y codirigí trabajos de grado de pregrado de diseño de dispositivos médicos.",
      en: "Coordinated the student research group and directed and co-directed undergraduate theses on medical device design.",
    },
  },
  {
    fechas: "2019 – 2021",
    cargo: { es: "Becario de maestría — Proyecto de investigación", en: "Master's research fellow" },
    lugar: "Universidad EIA · proyecto financiado por Minciencias",
    resumen: {
      es: "Simulador físico del sistema respiratorio: diseño del pistón viscoelástico, pruebas de resistencia con ventilador mecánico y modelación de su respuesta.",
      en: "Physical simulator of the respiratory system: designed the viscoelastic piston, ran resistance tests with a mechanical ventilator and modeled its response.",
    },
  },
  {
    fechas: "2018 – 2019",
    cargo: { es: "Investigador Asociado", en: "Research Associate" },
    lugar: "Universidad de los Andes",
    resumen: {
      es: "Simulación de impactos balísticos y dispositivos de asistencia para personas con discapacidad visual.",
      en: "Ballistic impact simulation and assistive devices for people with visual impairments.",
    },
  },
  {
    fechas: "2015 – 2016",
    cargo: { es: "Investigador Asociado", en: "Research Associate" },
    lugar: "Universidad de la Sabana",
    resumen: {
      es: "Diseño de una prótesis transfemoral con control basado en análisis dinámico inverso.",
      en: "Designed a transfemoral prosthesis with control based on inverse dynamic analysis.",
    },
  },
];

const FORMACION = {
  titulos: [
    { nombre: { es: "Máster in Project Management, énfasis en IA aplicada a proyectos (en curso)", en: "Master's in Project Management, focus on AI applied to projects (in progress)" }, lugar: "IEP – Instituto Europeo de Posgrado", fecha: "2026 – 2027" },
    { nombre: { es: "Magíster en Ingeniería Biomédica", en: "MSc in Biomedical Engineering" }, lugar: "Universidad EIA", fecha: "2021" },
    { nombre: { es: "Doble titulación: Ingeniería Mecánica e Ingeniería Biomédica", en: "Dual degree: Mechanical and Biomedical Engineering" }, lugar: "Universidad de los Andes", fecha: "2019" },
  ],
  cursos: [
    { nombre: { es: "Diplomado en Docencia Universitaria con Énfasis en Creatividad para la Innovación (120 h)", en: "Diploma in University Teaching with Emphasis on Creativity for Innovation (120 h)" }, lugar: "Tecnológico de Artes Débora Arango", fecha: "2024" },
    { nombre: { es: "Diplomado en Desarrollo de Aplicaciones Web", en: "Diploma in Web Application Development" }, lugar: "Universidad Nacional de Colombia", fecha: "2022" },
    { nombre: { es: "Data Science for All", en: "Data Science for All" }, lugar: "Correlation One", fecha: "2022" },
    { nombre: { es: "Machine Learning e IA: Hugging Face, Transfer Learning, Estadística Inferencial", en: "Machine Learning & AI: Hugging Face, Transfer Learning, Inferential Statistics" }, lugar: "Platzi", fecha: "2023 – 2025" },
    { nombre: { es: "Desarrollo Interactivo: Unity Scripting y Unity UI", en: "Interactive Development: Unity Scripting and Unity UI" }, lugar: "Platzi", fecha: "2024 – 2025" },
  ],
  idiomas: [
    { nombre: { es: "Español", en: "Spanish" }, nivel: { es: "Nativo", en: "Native" }, valor: 100 },
    { nombre: { es: "Inglés", en: "English" }, nivel: { es: "B2 (Linguaskill, Cambridge)", en: "B2 (Linguaskill, Cambridge)" }, valor: 70 },
    { nombre: { es: "Alemán", en: "German" }, nivel: { es: "Básico", en: "Basic" }, valor: 25 },
  ],
};
