import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "intro", label: "Введение" },
  { id: "chapters", label: "Главы" },
  { id: "history", label: "История" },
  { id: "conclusion", label: "Заключение" },
  { id: "sources", label: "Эволюция UI" },
];

interface PageNavProps {
  activeSection: string;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
}

const PageNav = ({ activeSection, scrolled, menuOpen, setMenuOpen, scrollTo }: PageNavProps) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-golos font-bold text-lg text-blue-deep tracking-tight"
        >
          Windows<span className="text-blue-main">История</span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-blue-main active"
                  : "text-mid hover:text-blue-main"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 bg-blue-ice border border-blue-100 rounded-full px-3 py-1.5">
          <div className="w-6 h-6 rounded-full bg-blue-main flex items-center justify-center flex-shrink-0">
            <Icon name="User" size={12} className="text-white" />
          </div>
          <div className="text-xs leading-tight">
            <div className="font-semibold text-blue-deep">Зобнин Глеб</div>
            <div className="text-light-custom">ИС-25-12б</div>
          </div>
        </div>

        <button
          className="md:hidden text-mid"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm font-medium py-2 border-b border-blue-50 ${
                activeSection === item.id ? "text-blue-main" : "text-mid"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export { NAV_ITEMS };
export default PageNav;
