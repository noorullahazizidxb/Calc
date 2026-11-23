import { m } from "framer-motion"
import useTheme, { THEMES } from "../theme/useTheme"
import { SPRING, keyTap } from "../motion/tokens"

const ICON_PATHS = {
  system: 'M4 5h16v11H4zM8 20h8M12 16v4',
  light: 'M12 3v2M12 19v2M5.6 5.6 7 7M17 17l1.4 1.4M3 12h2M19 12h2M5.6 18.4 7 17M17 7l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  dark: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z',
};

const LABELS = {
  system: 'Match system theme',
  light: 'Light theme',
  dark: 'Dark theme',
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div className="themeSwitcher" role="group" aria-label="Theme">
      {THEMES.map((option) => {
        const isActive = option === theme;
        return (
          <m.button
            key={option}
            type="button"
            className="themeOption"
            aria-label={LABELS[option]}
            aria-pressed={isActive}
            title={LABELS[option]}
            onClick={() => setTheme(option)}
            whileTap={keyTap}
            transition={SPRING.press}
          >
            {isActive && (
              <m.span
                layoutId="theme-indicator"
                className="themeIndicator"
                transition={SPRING.indicator}
              />
            )}
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d={ICON_PATHS[option]} />
            </svg>
          </m.button>
        );
      })}
    </div>
  )
}

export default ThemeSwitcher
