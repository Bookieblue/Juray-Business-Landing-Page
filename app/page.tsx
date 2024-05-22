import Benefit from "@/components/Benefit";
import DownloadApp from "@/components/DownloadApp";
import Faq from "@/components/Faq";
import Feature from "@/components/Features";
import Footer, { Copyright } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
     <section>
      <Navbar />
      <Hero/>
      <Feature />
      <Benefit />
      <DownloadApp />
      <Testimonial />
      <Faq />
      <DownloadApp />
      <Newsletter />
      <Footer />
      <Copyright />
     </section>
  );
}
