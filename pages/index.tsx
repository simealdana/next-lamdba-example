import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useResize } from "../hooks/useResize";
import { Footer } from "../sections/Footer";
import { GridAlternateSection } from "../sections/GridAlternateSection";
import { HeroSection } from "../sections/HeroSection";
import { SocialMediaSection } from "../sections/SocialMediaSection";
import styles from "../styles/Home.module.css";
import { DEFAULT_THEME } from "../themes";
import { applyTheme } from "../themes/utils";

const Home: NextPage = () => {
  const [theme] = useState(DEFAULT_THEME);
  const size = useResize();
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Capybara Swamp Club</title>
        <meta name="description" content="Capybara's NFT" />
        <link rel="icon" href="img/capybaraSwampClubLogo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <HeroSection breackPoint={size} />
      </main>
      <GridAlternateSection breackPoint={size}/>
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Home;
