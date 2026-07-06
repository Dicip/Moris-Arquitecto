export interface Project {
  id: string
  title: string
  client: string
  img: string
  tagline: string
  description: string[]
  features: string[]
  year: string
  location: string
  area: string
  type: string
  status: string
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Concepto Residencia Red Rock',
    client: 'Estudio Conceptual',
    img: '/images/project-01.jpg',
    tagline: 'Un santuario en el desierto proyectado para integrarse en el paisaje de Utah.',
    description: [
      'Esta propuesta residencial unifamiliar explora la integración absoluta con la topografía árida. Diseñada teóricamente frente a las formaciones de arenisca roja del sur de Utah, la estructura sigue el contorno natural de la cresta con muros de tapial proyectados para mimetizarse con la geología local.',
      'El concepto organiza la planta en torno a un patio central para capturar brisas predominantes y propiciar enfriamiento pasivo. Grandes ventanales corredizos abren el espacio interior al panorama desértico, mientras que aleros profundos protegen las estancias del asoleamiento directo.'
    ],
    features: [
      'Diseño conceptual de muros de tapial (45 cm)',
      'Distribución de 4 dormitorios y 3.5 baños en 390 m²',
      'Patio central con propuesta de paisajismo nativo',
      'Integración teórica de paneles solares para huella cero neto',
      'Estudio de ventilación pasiva y confort térmico desértico'
    ],
    year: 'Concepto',
    location: 'St. George, Utah (Propuesto)',
    area: '390 m² (Proyectado)',
    type: 'Residencial',
    status: 'Concepto',
  },
  {
    id: '02',
    title: 'Centro Cultural Cedar Valley (Propuesta)',
    client: 'Concurso de Ideas',
    img: '/images/project-02.jpg',
    tagline: 'Una propuesta de espacio flexible para el encuentro comunitario y el arte contemporáneo.',
    description: [
      'Este ejercicio de diseño plantea un centro cultural de 2.600 m² con galerías, espacios de actuación y estudios abiertos. La volumetría angular de la cubierta evoca las cercanas Montañas Cedar, mientras que la fachada de ladrillo busca entablar un diálogo con la arquitectura histórica local.',
      'Un atrio central actúa como vestíbulo urbano y espacio de encuentro, iluminado por un muro de cortina acristalado de doble altura. Las áreas interiores se diseñaron bajo premisas de máxima flexibilidad espacial para acoger diversas disciplinas artísticas.'
    ],
    features: [
      'Propuesta de tres galerías flexibles de 740 m² en total',
      'Espacio multiuso proyectado para 200 personas',
      'Esquema de doce estudios con iluminación cenital controlada',
      'Estudio preliminar de soleamiento para el atrio central',
      'Criterios de diseño bajo estándares de sustentabilidad'
    ],
    year: 'Propuesta',
    location: 'Cedar City, Utah (Propuesto)',
    area: '2.600 m² (Proyectado)',
    type: 'Cívico',
    status: 'Propuesta',
  },
  {
    id: '03',
    title: 'Estudio de Refugio Pine Ridge',
    client: 'Exploración de Diseño',
    img: '/images/project-03.jpg',
    tagline: 'Estudio volumétrico de una cabaña en voladizo suspendida en la ladera forestal.',
    description: [
      'Este proyecto académico y de investigación personal indaga en soluciones estructurales complejas para terrenos de gran pendiente en la cordillera Wasatch. El refugio se plantea en dos volúmenes conectados por un puente de vidrio para minimizar la cimentación y el impacto en el terreno natural.',
      'El estudio material propone un revestimiento exterior metálico oscuro para mimetizarse con las sombras del bosque de pinos, en contraste con interiores de madera clara que aportan calidez. La disposición de vanos responde a un análisis de vistas y asoleamiento en alta montaña.'
    ],
    features: [
      'Estudio estructural de voladizo de 7,3 metros',
      'Esquema residencial mínimo de 2 dormitorios en 167 m²',
      'Diseño conceptual de puente de conexión transparente',
      'Análisis de cargas térmicas y acumulación de nieve',
      'Propuesta de climatización pasiva mediante orientación solar'
    ],
    year: 'Concepto',
    location: 'Park City, Utah (Propuesto)',
    area: '167 m² (Proyectado)',
    type: 'Residencial',
    status: 'Concepto',
  },
  {
    id: '04',
    title: 'Visión Wasatch Green Tower',
    client: 'Visión Urbana',
    img: '/images/project-04.jpg',
    tagline: 'Investigación sobre la integración de vegetación vertical en arquitectura comercial densa.',
    description: [
      'Un proyecto de investigación y visión urbana que reimagina la edificación en altura en Salt Lake City. La propuesta plantea una torre de uso mixto con terrazas ajardinadas cada tres niveles, creando un ecosistema vertical que contribuye a reducir el efecto de isla de calor urbana.',
      'El modelo conceptual integra áreas de oficinas, comercio en planta baja y un mirador público superior. El estudio profundiza en la viabilidad técnica de fachadas fotovoltaicas y sistemas de captación de agua pluvial para el mantenimiento del paisaje vertical.'
    ],
    features: [
      'Propuesta conceptual de torre mixta de 22 niveles',
      'Estudio de terrazas verdes y su impacto en microclimas',
      'Esquema de fachada activa con captación solar integrada',
      'Simulación teórica de eficiencia y flujo de vientos',
      'Integración de sistemas de biofiltración de agua'
    ],
    year: 'Concepto',
    location: 'Salt Lake City, Utah (Propuesto)',
    area: '35.300 m² (Proyectado)',
    type: 'Comercial',
    status: 'Concepto',
  },
  {
    id: '05',
    title: 'Propuesta Hacienda Sagebrush',
    client: 'Estudio de Paisaje',
    img: '/images/project-05.jpg',
    tagline: 'Exploración de pabellones residenciales de baja altura integrados al llano desértico.',
    description: [
      'Esta propuesta de diseño rural de gran escala explora la distribución horizontal y fragmentada de la vivienda en el desierto. La composición plantea una serie de pabellones independientes vinculados por pérgolas y recorridos exteriores, logrando una relación directa con el entorno indómito.',
      'El proyecto conceptual sitúa un espejo de agua central como regulador térmico y elemento reflectante del cielo. Se proponen materiales de procedencia local y texturas crudas como piedra y acero corten para asegurar una vejez armónica con el territorio.'
    ],
    features: [
      'Esquema conceptual de cinco pabellones interconectados',
      'Propuesta de áreas exteriores semi-cubiertas integradas',
      'Estudio de materiales locales y técnicas constructivas de bajo impacto',
      'Análisis de auto-sombreado volumétrico para climatización',
      'Propuesta de paisajismo xerófilo nativo'
    ],
    year: 'Concepto',
    location: 'Moab, Utah (Propuesto)',
    area: '604 m² (Proyectado)',
    type: 'Residencial',
    status: 'Concepto',
  },
  {
    id: '06',
    title: 'Revitalización Main Street (Concepto)',
    client: 'Estudio de Conservación',
    img: '/images/project-06.jpg',
    tagline: 'Ejercicio de puesta en valor y diálogo entre preexistencias históricas y adiciones contemporáneas.',
    description: [
      'Este ejercicio teórico propone la reconversión de una edificación comercial de fines del siglo XIX en un centro cultural y de oficinas. El concepto se basa en preservar la fachada patrimonial de ladrillo e insertar en su interior una estructura contemporánea de acero y vidrio que optimice el uso del espacio.',
      'El contraste busca visibilizar la historia original del inmueble mediante la conservación de sus muros y elementos portantes de madera, resolviendo la accesibilidad y los requerimientos actuales mediante una espina de servicios y circulaciones de lenguaje contemporáneo.'
    ],
    features: [
      'Estudio conceptual de restauración de fachada de 1892',
      'Propuesta de ampliación contemporánea posterior en vidrio',
      'Esquema de distribución flexible para usos mixtos',
      'Estrategia teórica de consolidación estructural reversible',
      'Estudio de iluminación natural en plantas profundas'
    ],
    year: 'Concepto',
    location: 'Cerritos, Utah (Propuesto)',
    area: '1.487 m² (Proyectado)',
    type: 'Patrimonio',
    status: 'Concepto',
  },
]
