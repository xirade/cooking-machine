import { useTheme } from "../hooks/useTheme";
import THEME_COLORS from "../constants/colors";

// styles
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
