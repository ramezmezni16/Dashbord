// color design tokens export
export const tokensDark = {
  grey: {
      0: "#000000", // black
      10: "#1a1a1a",
      50: "#333333",
      100: "#4d4d4d",
      200: "#666666",
      300: "#808080",
      400: "#999999",
      500: "#b3b3b3",
      600: "#cccccc",
      700: "#e6e6e6",
      800: "#f2f2f2",
      900: "#ffffff", // white
      1000: "#ffffff", // white
  },
  primary: {
      // shades of grey for primary
      100: "#b3b3b3",
      200: "#999999",
      300: "#808080",
      400: "#666666",
      500: "#4d4d4d",
      600: "#333333",
      700: "#1a1a1a",
      800: "#0d0d0d",
      900: "#000000",
  },
  secondary: {
      // shades of grey for secondary
      50: "#f2f2f2",
      100: "#e6e6e6",
      200: "#cccccc",
      300: "#b3b3b3",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4d4d4d",
      800: "#333333",
      900: "#1a1a1a",
  },
};

// Explicit light mode colors
export const tokensLight = {
  grey: {
      0: "#ffffff", // white
      10: "#f2f2f2", // light grey
      50: "#e6e6e6",
      100: "#cccccc",
      200: "#b3b3b3",
      300: "#999999",
      400: "#808080",
      500: "#666666",
      600: "#4d4d4d",
      700: "#333333",
      800: "#1a1a1a",
      900: "#000000", // black
      1000: "#000000", // black
  },
  primary: {
      100: "#000000", // black
      200: "#000000", // black
      300: "#000000", // black
      400: "#000000", // black
      500: "#000000", // black
      600: "#000000", // black
      700: "#000000", // black
      800: "#000000", // black
      900: "#000000", // black
  },
  secondary: {
      50: "#f2f2f2",
      100: "#e6e6e6",
      200: "#cccccc",
      300: "#b3b3b3",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4d4d4d",
      800: "#333333",
      900: "#000000", // black
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
      palette: {
          mode: mode,
          ...(mode === "dark"
              ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[400],
                        light: tokensDark.primary[400],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[300],
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.primary[600],
                        alt: tokensDark.primary[500],
                    },
                }
              : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensLight.primary[100], // black
                        light: tokensLight.grey[10],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensLight.secondary[600],
                        light: tokensLight.secondary[700],
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensLight.grey[500],
                    },
                    background: {
                        default: tokensLight.grey[0], // white
                        alt: tokensLight.grey[50],
                    },
                }),
      },
      typography: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 12,
          h1: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 40,
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure h1 is black in light mode
          },
          h2: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 32,
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure h2 is black in light mode
          },
          h3: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 24,
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure h3 is black in light mode
          },
          h4: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 20,
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure h4 is black in light mode
          },
          h5: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 16,
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure h5 is black in light mode
          },
          h6: {
              fontFamily: ["Inter", "sans-serif"].join(","),
              fontSize: 14,
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure h6 is black in light mode
          },
          body1: {
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure body text is black in light mode
          },
          body2: {
              color: mode === "light" ? "#000000" : "#ffffff", // Ensure body text is black in light mode
          },
      },
  };
};
