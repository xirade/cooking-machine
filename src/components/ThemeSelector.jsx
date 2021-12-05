import { useTheme } from "../hooks/useTheme";
import THEME_COLORS from "../constants/colors";
import modeIcon from "../assets/mode-icon.svg";

// styles
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="dark/light toggle icon"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(1)" : "invert(0.2)" }}
        />
      </div>
      <div className="theme-buttons">
        {THEME_COLORS.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
