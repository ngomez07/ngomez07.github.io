// =====================================================================
// TRAYECTORIA Y FORMACIÓN — edita aquí cargos, cursos e idiomas.
// Todo texto va en dos idiomas: { es: "...", en: "..." }.
// El orden de cada lista es el orden en la página.
// =====================================================================

const TRAYECTORIA = [
  {
    fechas: "2022 – 2026",
    cargo: { es: "Coordinador de Arte y Tecnología", en: "Art & Technology Coordinator" },
    lugar: "Parque Explora · Medellín",
    resumen: {
      es: "Líder técnico de la Sala Nido del Centro Cultural Rainieri y diseño en equipo de la arquitectura tecnológica del Museo del Visitante del Canal de Panamá. Más de 40 productos y experiencias para instituciones culturales internacionales.",
      en: "Technical lead for the Sala Nido at the Rainieri Cultural Center and team design of the technology architecture for the Panama Canal Visitor Museum. 40+ products and experiences for international cultural institutions.",
    },
  },
  {
    fechas: "2023 – 2025",
    cargo: { es: "Líder de Producción, Facultad de Interacción Digital", en: "Production Lead, Faculty of Digital Interaction" },
    lugar: "Tecnológico de Artes Débora Arango · Envigado",
    resumen: {
      es: "Iniciativas tecnológicas de la facultad, diseño curricular de un programa aprobado por el Ministerio de Educación, el videojuego Notas & Colores y la exposición inmersiva Débora Transtemporal.",
      en: "Led the faculty's technology initiatives, contributed to the curriculum of a program approved by Colombia's Ministry of Education, and developed the Notas & Colores game and the Débora Transtemporal immersive exhibition.",
    },
  },
  {
    fechas: "2019 – 2021",
    cargo: { es: "Investigador Asociado", en: "Research Associate" },
    lugar: "Minciencias",
    resumen: {
      es: "Simulador de biomecánica respiratoria: diseño del pistón viscoelástico, pruebas con ventilador y modelo predictivo de salud pulmonar.",
      en: "Respiratory biomechanics simulator: designed the viscoelastic piston, ran ventilator tests and built a predictive model of lung health.",
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
    { nombre: { es: "Magíster en Ingeniería Biomédica", en: "MSc in Biomedical Engineering" }, lugar: "Universidad EIA", fecha: "2021" },
    { nombre: { es: "Doble titulación: Ingeniería Mecánica e Ingeniería Biomédica", en: "Dual degree: Mechanical and Biomedical Engineering" }, lugar: "Universidad de los Andes", fecha: "2019" },
  ],
  cursos: [
    { nombre: { es: "Diplomado en Docencia Universitaria con Énfasis en Creatividad e Innovación", en: "Diploma in University Teaching, Creativity and Innovation" }, lugar: "Tecnológico de Artes Débora Arango", fecha: "2024" },
    { nombre: { es: "Diplomado en Desarrollo de Aplicaciones Web", en: "Diploma in Web Application Development" }, lugar: "Universidad Nacional de Colombia", fecha: "2022" },
    { nombre: { es: "Data Science for All", en: "Data Science for All" }, lugar: "Correlation One", fecha: "2022" },
    { nombre: { es: "Machine Learning e IA: Hugging Face, Transfer Learning, Estadística Inferencial", en: "Machine Learning & AI: Hugging Face, Transfer Learning, Inferential Statistics" }, lugar: "Platzi", fecha: "2023 – 2025" },
    { nombre: { es: "Desarrollo Interactivo: Unity Scripting y Unity UI", en: "Interactive Development: Unity Scripting and Unity UI" }, lugar: "Platzi", fecha: "2024 – 2025" },
  ],
  idiomas: [
    { nombre: { es: "Español", en: "Spanish" }, nivel: { es: "Nativo", en: "Native" }, valor: 100 },
    { nombre: { es: "Inglés", en: "English" }, nivel: { es: "Avanzado (C1)", en: "Advanced (C1)" }, valor: 85 },
    { nombre: { es: "Alemán", en: "German" }, nivel: { es: "Básico", en: "Basic" }, valor: 25 },
  ],
};
