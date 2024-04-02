import About from "@/components/About";
import Navmenu from "@/components/Navmenu";
import Service from "@/components/Service";
import Aboutpage from "@/components/Aboutpage";
import Tesmonies from "@/components/Tesmonies";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navmenu />
      <Service />
      <Aboutpage />
      <About />
      <Tesmonies />
      <Appointment />
      <Footer />
    </div>
  );
}
