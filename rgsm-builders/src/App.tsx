import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { Planning } from "./pages/services/Planning";
import { ResidentialConstruction } from "./pages/services/ResidentialConstruction";
import { IndustrialInfrastructure } from "./pages/services/IndustrialInfrastructure";
import { RenovationRemodeling } from "./pages/services/RenovationRemodeling";
import { SteelStructureDesign } from "./pages/services/SteelStructureDesign";
import { ArchitecturalWork } from "./pages/services/Architecturalwork";
import { CommercialProjects } from "./pages/services/CommercialProject";
import { TurnkeySolutions } from "./pages/services/TurnkeySolution";
import { WhatsappButton } from "./components/shared/WhatsappButton";
import { WhatsappModal } from "./components/shared/WhatsappModal";
import { FloatingSocialBar } from "./components/home/FloatingSocialBar";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
 
export function App() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ScrollToTop />
      <FloatingSocialBar/>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/services/planning" element={<Planning />} />
            <Route path="/services/architectural-work" element={<ArchitecturalWork />} />
            <Route path="/services/residential-construction" element={<ResidentialConstruction />} />
            <Route path="/services/commercial-projects" element={<CommercialProjects />} />
            <Route path="/services/industrial-infrastructure" element={<IndustrialInfrastructure />} />
            <Route path="/services/renovation-remodeling" element={<RenovationRemodeling />} />
            <Route path="/services/turnkey-solutions" element={<TurnkeySolutions />} />
            <Route path="/services/steel-structure-design" element={<SteelStructureDesign />} />
          </Routes>
        </main>
        <Footer />
      </div>
     <WhatsappButton onOpen={() => setOpenModal(true)} />
      <WhatsappModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default App; 
