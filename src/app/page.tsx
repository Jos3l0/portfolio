"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AnimatedSections from "./AnimatedSections";

const profile = {
  name: "José Oliva",
  phone: "+549 2615129320",
  email: "jose@startmotifmedia.com",
  linkedin: "https://www.linkedin.com/in/jo30liva/",
  description: {
    es: "Con más de 10 años de experiencia como desarrollador full stack, especializado en tecnologías web y apasionado por la innovación. Experto en WordPress, Joomla, Magento y Moodle, desarrollo de plugins y seguridad avanzada. Actualmente administro el portal educativo del Gobierno de Mendoza.",
    en: "With over 10 years of experience as a full stack developer, specialized in web technologies and passionate about innovation. Expert in WordPress, Joomla, Magento, and Moodle, plugin development and advanced security. Currently managing the educational portal for the Government of Mendoza.",
  },
  skills: [
    "PHP",
    "Python",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Dart",
    "MySQL",
    "PostgreSQL",
    "Yii2",
    "Laravel",
    "jQuery",
    "Flutter",
    "Vue.js",
    "Bootstrap",
    "Linux",
    "MacOS",
    "Windows",
    "GIT",
    "WordPress",
    "Joomla",
    "Magento",
    "Moodle",
    "UI/UX",
    "Photoshop",
  ],
  experience: [
    {
      es: "Multiweb en Acción (España): Desarrollo de sitios web y gestión de bases de datos.",
      en: "Multiweb en Acción (Spain): Website development and database management.",
    },
    {
      es: "Herbert Fletcher University – SETAI (Puerto Rico): Desarrollo y gestión de portales institucionales y virtuales.",
      en: "Herbert Fletcher University – SETAI (Puerto Rico): Development and management of institutional and virtual portals.",
    },
    {
      es: "Gobierno de Mendoza: Administrador del portal educativo provincial.",
      en: "Government of Mendoza: Administrator of the provincial educational portal.",
    },
  ],
  education: [
    {
      es: "IT - 2008: Desarrollo Web Avanzado.",
      en: "IT - 2008: Advanced Web Development.",
    },
    {
      es: "Autodidacta: Actualización constante en tecnologías backend, frontend y CMS.",
      en: "Self-taught: Constant updating in backend, frontend and CMS technologies.",
    },
  ],
};

function Hero3D() {
  return (
    <Canvas style={{ height: '300px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color="#00eaff" metalness={0.7} roughness={0.2} />
      </mesh>
      <Stars radius={10} depth={50} count={2000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default function HomePage() {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.language === 'en' ? 'en' : 'es';

  return (
    <main className={styles.main}>
      <Hero3D />
      <AnimatedSections t={t} lang={lang} profile={profile} i18n={i18n} />
    </main>
  );
}
