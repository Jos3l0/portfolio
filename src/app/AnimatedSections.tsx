"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.css";

type Experience = { es: string; en: string };
type Education = { es: string; en: string };
type Profile = {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  description: { es: string; en: string };
  skills: string[];
  experience: Experience[];
  education: Education[];
};

type AnimatedSectionsProps = {
  t: (key: string) => string;
  lang: 'es' | 'en';
  profile: Profile;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
};

export default function AnimatedSections({ t, lang, profile, i18n }: AnimatedSectionsProps) {
  return (
    <>
      <header className={styles.header}>
        {/* Hero3D debe importarse en el archivo principal */}
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
        <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>{t('works')}</motion.h2>
        <ul className={styles.ul}>
          {[1,2,3,4,5,6].map(i => (
            <motion.li key={i} className={styles.li} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2*i }}>
              <strong>{t(`work${i}_title`)}</strong>
              <p>{t(`work${i}_desc`)}</p>
              <Link href={
                i === 1 ? 'https://tienda.montgras.cl/' :
                i === 2 ? 'https://setai.edu/' :
                i === 3 ? 'https://www.interamericaonline.com/ltm/' :
                i === 4 ? 'https://setai-iats.org/' :
                i === 5 ? 'https://perezelizalde.com.ar/' :
                'https://martinfavarel.com/'
              } target="_blank">{t('seeMore')}</Link>
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
          {profile.description[lang]}
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
          {profile.skills.map((skill: string) => (
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
          {profile.experience.map((exp: { es: string; en: string }, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * idx }}
            >
              {exp[lang]}
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
          {profile.education.map((edu: { es: string; en: string }, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * idx }}
            >
              {edu[lang]}
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
    </>
  );
}
