import { themes } from "./index";
import { IMappedTheme, ITheme } from "./interface";

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    "--background-primary": variables.backgroundPrimary || "",
    "--background-sec-": variables.backgroundSecondary|| "",
    "--background-menu":variables.backgroundMenu|| "",
    "--color-primary": variables.primary || "",
    "--color-secondary": variables.secondary || "",
    "--color-spanColor": variables.spanColor || "",
  };
};

export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (
    extending: ITheme,
    newTheme: ITheme
  ): ITheme => {
    return { ...extending, ...newTheme };
  };
