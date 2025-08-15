import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

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
      <header className={styles.header}>
        <Hero3D />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("description")}
        </motion.p>
        <nav>
          <button className={styles.navButton} onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button className={styles.navButton} onClick={() => i18n.changeLanguage("en")}>EN</button>
        </nav>
      </header>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("works")}
        </motion.h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i }}
            >
              <strong>{t(`work${i}_title`)}</strong>
              <p>{t(`work${i}_desc`)}</p>
              <Link
                href={
                  i === 1
                    ? "https://tienda.montgras.cl/"
                    : i === 2
                    ? "https://setai.edu/"
                    : i === 3
                    ? "https://www.interamericaonline.com/ltm/"
                    : i === 4
                    ? "https://setai-iats.org/"
                    : i === 5
                    ? "https://perezelizalde.com.ar/"
                    : "https://martinfavarel.com/"
                }
                target="_blank"
              >
                {t("seeMore")}
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("profile")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {profile.description[lang as 'es' | 'en']}
        </motion.p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href={profile.linkedin} target="_blank">
              {profile.linkedin}
            </a>
          </li>
        </ul>
      </section>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("skills")}
        </motion.h2>
        <ul className={styles.skills}>
          {profile.skills.map((skill) => (
            <motion.li
              key={skill}
              whileHover={{ scale: 1.1, color: "#00eaff" }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("experience")}
        </motion.h2>
        <ul>
          {profile.experience.map((exp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * idx }}
            >
              {exp[lang as 'es' | 'en']}
            </motion.li>
          ))}
        </ul>
      </section>
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("education")}
        </motion.h2>
        <ul>
          {profile.education.map((edu, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * idx }}
            >
              {edu[lang as 'es' | 'en']}
            </motion.li>
          ))}
        </ul>
      </section>
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("contact")}
        </motion.h2>
        <form
          className={styles.contact}
          action="mailto:jose@startmotifmedia.com"
          method="POST"
        >
          <label>
            {t("name")}
            <input type="text" name="name" required />
          </label>
          <label>
            {t("email")}
            <input type="email" name="email" required />
          </label>
          <label>
            {t("message")}
            <textarea name="message" required />
          </label>
          <button type="submit">{t("send")}</button>
        </form>
      </section>
    </main>
  );
}
