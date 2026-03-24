import { useState, useEffect } from "react";
import PageNav, { NAV_ITEMS } from "@/components/PageNav";
import PageMain from "@/components/PageMain";
import PageConclusion from "@/components/PageConclusion";
import PageUiEvolution from "@/components/PageUiEvolution";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-ibm">
      <PageNav
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <PageMain scrollTo={scrollTo} />
      <PageConclusion />
      <PageUiEvolution />
    </div>
  );
};

export default Index;
