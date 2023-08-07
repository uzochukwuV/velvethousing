import Image from "next/image";
import styles from "./page.module.css";
import "uikit/dist/js/uikit-icons.js";
import NavBar from "@/components/nav";
import Hero from "@/components/hero";
import Cities from "@/components/city";
import LocalsSay from "@/components/locals";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />

      <Hero />
      <Cities />

      <LocalsSay />

      <Footer />
    </main>
  );
}
