const COLORS = {
  background: {
    light: "rgb(255, 255, 255)",
    dark: "rgb(54, 57, 63)",
  },
  background_contrast: {
    light: "rgb(255, 255, 255)",
    dark: "rgb(37, 39, 42)",
  },
  title: {
    light: "rgb(255,107,107)",
    dark: "rgb(255,107,107)",
  },
  text: {
    light: "rgb(0,0,0)",
    dark: "rgb(255, 255, 255)",
  },
  text_reverse: {
    light: "rgb(255,255,255)",
    dark: "rgb(0,0,0)",
  },
  primary: {
    light: "rgb(255,107,178)",
    dark: "rgb(255,107,178)",
  },
};

const setInitialTheme = () => {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  const osPreferDark = mediaQueryList.matches;
  const persistedTheme = localStorage.getItem("theme");

  let theme = "light";
  const isFirstTime = typeof persistedTheme !== "string";

  if (isFirstTime) {
    theme = osPreferDark ? "dark" : "light";
  } else {
    theme = persistedTheme;
  }
  let root = document.documentElement;

  root.style.setProperty("--initial-theme", theme);

  Object.entries(COLORS).forEach(([name, colors]) => {
    const variable = `--color-${name}`;
    root.style.setProperty(variable, colors[theme]);
  });
};

setInitialTheme();
