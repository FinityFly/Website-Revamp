"use client";

import Image from "next/image";
import styles from "./page.module.css";

import HeaderSection from "@/sections/Header";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import HeroSection from "@/sections/Hero";
import ProjectSection from "@/sections/Projects";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <HeaderSection />
        <HeroSection />

        <main className={styles.main}>
          <AboutSection />
          <SkillsSection />

          <ExperienceSection />
          <ProjectSection />
          <ContactSection />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
