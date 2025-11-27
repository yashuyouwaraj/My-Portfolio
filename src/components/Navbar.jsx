import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";
import ThemeToggle from "./ThemeToggle";
import dayjs from "dayjs";

const Navbar = () => {
  const {openWindow, closeWindow, windows}=useWindowStore()
  const {isDarkMode} = useThemeStore()

  const handleNavItemClick = (type) => {
    // Check if window is already open
    if (windows[type]?.isOpen) {
      // Close it on second click
      closeWindow(type)
    } else {
      // Open it on first click
      openWindow(type)
    }
  }

  return (
    <nav className={isDarkMode ? "dark-nav" : ""}>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Yashu's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name ,type}) => (
            <li key={id} onClick={()=>handleNavItemClick(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ThemeToggle />
        <ul>
            {navIcons.filter(({id}) => id !== 4).map(({id,img})=>(
                <li key={id}>
                    <img src={img} alt={`icon-${id}`} className="icon-hover" />
                </li>
            ))}
        </ul>
        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
