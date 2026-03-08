import { images } from './images'

export const siteConfig = {
  name: 'Instituto Buckingham',
  shortName: 'Buckingham',
  tagline: 'Educación bilingüe con calidez, estructura y visión global',
  location: 'San Luis Potosí, México',
  phone: '+52 444 123 4567',
  whatsapp: '524441234567',
  email: 'admisiones@institutobuckingham.edu.mx',
  address: 'Lomas 1a Sección, San Luis Potosí, S.L.P.',
  hours: 'Lunes a viernes · 7:30 a 15:00',
  admissionsLabel: 'Admisiones abiertas 2026 - 2027',
}

export const navigation = [
  { name: 'Inicio', href: '/' },
  {
    name: 'Nosotros',
    href: '/nosotros',
    submenu: [
      { name: 'Historia', href: '/nosotros/historia' },
      { name: 'Misión y Visión', href: '/nosotros/mision-vision' },
      { name: 'Valores', href: '/nosotros/valores' },
      { name: 'Equipo Docente', href: '/nosotros/equipo' },
    ],
  },
  {
    name: 'Oferta Educativa',
    href: '/oferta-educativa',
    submenu: [
      { name: 'Maternal', href: '/maternal' },
      { name: 'Preescolar', href: '/preescolar' },
      { name: 'Primaria', href: '/primaria' },
    ],
  },
  {
    name: 'Admisiones',
    href: '/admisiones',
    submenu: [
      { name: 'Proceso de Admisión', href: '/admisiones' },
      { name: 'Solicitar informes', href: '/admisiones#formulario' },
      { name: 'Agendar visita', href: '/contacto' },
      { name: 'Preguntas Frecuentes', href: '/admisiones#formulario' },
    ],
  },
  { name: 'Vida Escolar', href: '/vida-escolar' },
  { name: 'Contacto', href: '/contacto' },
]

export const trustChips = [
  { label: 'Desde 1993', icon: 'calendar' },
  { label: 'Sistema bilingüe', icon: 'globe' },
  { label: 'Maternal, Preescolar y Primaria', icon: 'graduation' },
  { label: 'Atención personalizada', icon: 'heart' },
]

export const educationalLevels = [
  {
    title: 'Maternal',
    ages: '1 a 3 años',
    description:
      'Un entorno cercano y seguro para desarrollar rutinas, lenguaje, autonomía y confianza desde los primeros años.',
    image: images.home.maternal,
    href: '/maternal',
  },
  {
    title: 'Preescolar',
    ages: '3 a 6 años',
    description:
      'Aprendizaje activo, juego intencional e inmersión natural al inglés para construir bases sólidas en una etapa clave.',
    image: images.home.preescolar,
    href: '/preescolar',
  },
  {
    title: 'Primaria',
    ages: '6 a 12 años',
    description:
      'Formación académica con estructura, pensamiento crítico y acompañamiento cercano para avanzar con seguridad y propósito.',
    image: images.home.primaria,
    href: '/primaria',
  },
]

export const whyBuckingham = [
  {
    title: 'Ambiente Cálido y Seguro',
    description:
      'Un espacio donde cada niño se siente valorado, protegido y libre para explorar y aprender con confianza.',
    icon: 'heart',
  },
  {
    title: 'Desarrollo Bilingüe',
    description:
      'Exposición temprana al inglés con metodologías probadas que preparan a nuestros alumnos para un mundo globalizado.',
    icon: 'globe',
  },
  {
    title: 'Atención Personalizada',
    description:
      'Grupos reducidos que permiten conocer y atender las necesidades individuales de cada estudiante.',
    icon: 'users',
  },
  {
    title: 'Educación en Valores',
    description:
      'Formamos personas íntegras con valores sólidos: respeto, responsabilidad, honestidad y empatía.',
    icon: 'sparkles',
  },
  {
    title: 'Desarrollo integral',
    description:
      'Estimulamos todas las áreas del desarrollo: cognitiva, física, emocional, social y artística.',
    icon: 'brain',
  },
  {
    title: 'Equipo Docente Experimentado',
    description:
      'Maestros comprometidos, en constante actualización, que aman lo que hacen y lo transmiten a sus alumnos.',
    icon: 'graduation',
  },
]

export const bilingualFeatures = [
  'Inmersión progresiva al inglés desde los primeros años',
  'Vocabulario, comprensión y expresión oral integrados a la rutina',
  'Actividades significativas que conectan el idioma con la vida diaria',
  'Acompañamiento por etapa para que el aprendizaje se sienta natural',
  'Continuidad entre niveles para consolidar la confianza comunicativa',
]

export const timelineEvents = [
  {
    year: '1993',
    title: 'Comienza la historia',
    description:
      'Buckingham abre sus puertas con la idea de ofrecer una educación cálida, estructurada y bilingüe en San Luis Potosí.',
    icon: 'building',
  },
  {
    year: '1998',
    title: 'Se consolida la comunidad',
    description:
      'Las familias recomiendan el proyecto y la escuela crece sobre una cultura de cercanía, confianza y constancia.',
    icon: 'users',
  },
  {
    year: '2007',
    title: 'La propuesta se expande',
    description:
      'La oferta educativa se fortalece para acompañar el desarrollo continuo desde Maternal hasta Primaria.',
    icon: 'graduation',
  },
  {
    year: '2026',
    title: 'Una visión vigente',
    description:
      'La escuela sigue evolucionando con una identidad elegante, familiar y enfocada en el bienestar y el futuro de cada alumno.',
    icon: 'award',
  },
]

export const testimonials = [
  {
    quote:
      'Lo que más valoramos es la mezcla entre estructura y calidez. Nuestro hijo se siente seguro, acompañado y muy motivado para aprender.',
    author: 'María González',
    role: 'Mamá de familia · Preescolar',
  },
  {
    quote:
      'Buckingham tiene una atención muy cercana. Hay orden, buena comunicación y un ambiente donde los niños pueden crecer con confianza.',
    author: 'Carlos Martínez',
    role: 'Papá de familia · Primaria',
  },
  {
    quote:
      'Se nota que conocen a cada familia y que el proyecto está pensado con intención. No se siente masivo, se siente verdaderamente humano.',
    author: 'Ana Rodríguez',
    role: 'Mamá de familia · Comunidad Buckingham',
  },
]

export const admissionsSteps = [
  {
    step: 1,
    title: 'Conversemos',
    description:
      'Escríbenos por formulario, llamada o WhatsApp y cuéntanos qué etapa buscas para tu hijo.',
  },
  {
    step: 2,
    title: 'Visita el campus',
    description:
      'Conoce los espacios, la dinámica escolar y el tipo de acompañamiento que caracteriza a Buckingham.',
  },
  {
    step: 3,
    title: 'Revisamos tu proceso',
    description:
      'Te guiamos con claridad en requisitos, documentación y disponibilidad según el nivel.',
  },
  {
    step: 4,
    title: 'Integramos a tu familia',
    description:
      'Te acompañamos en la incorporación para que el inicio sea sereno, claro y bien acompañado.',
  },
]

export const homeFaq = [
  {
    question: '¿Desde qué edad pueden ingresar los niños?',
    answer:
      'Recibimos alumnos desde Maternal. La edad de ingreso y el proceso de incorporación dependen del nivel y del momento del ciclo escolar.',
  },
  {
    question: '¿Cómo se vive el programa bilingüe?',
    answer:
      'El inglés forma parte de la rutina diaria y se trabaja con intención pedagógica para cada etapa, de forma natural y progresiva.',
  },
  {
    question: '¿Cómo es la comunicación con las familias?',
    answer:
      'Priorizamos una comunicación cercana, clara y continua para que cada familia sepa cómo va el proceso de adaptación y aprendizaje.',
  },
  {
    question: '¿Cómo puedo agendar una visita?',
    answer:
      'Puedes llenar el formulario, escribir por WhatsApp o llamar directamente. El equipo te propondrá horarios para conocer el colegio.',
  },
]
