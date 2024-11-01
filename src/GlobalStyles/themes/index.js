const jsRgba = (r, g, b, a = 1) => `Rgba(${r}, ${g}, ${b}, ${a})`;

export const primaryTheme = {
    
    colors: {
      blue: {
        light: jsRgba(121, 101, 255,0.71),
        primary: jsRgba(22, 119, 255),
        pure: jsRgba(	0, 37, 255)
      },
      green: {
        light: jsRgba(18, 245, 140),
        brightLime: jsRgba(	52, 228, 52,0.59),
        normal: jsRgba(127, 255, 0),
        dark: jsRgba(154, 205, 50),
        pure: jsRgba(52, 228, 52),
      },
      red: {
        light: jsRgba(255, 120, 117),
        normal: jsRgba(255, 0, 0),
        vividMagenta: jsRgba(	244, 25, 191,0.55),
      },
      orange: {
        normal: jsRgba(255, 165, 0)
      },
      yellow: {
        light: jsRgba(255, 243, 221),
        dark: jsRgba(194, 148, 67),
        normal: jsRgba(194, 148, 67),
        assistiveWarning: jsRgba(243, 195, 9),
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
    styles: {
      //i placed the keys in "" to make the error go,
      //what er?lose the "" to see
      shadow: "0 2px 4px 0 ${jsRgba(0, 0, 0, 0.05)}",
      divider: "1px solid ${jsRgba(28, 28, 28, 0.1)}",
      shadow: "1px solid ${jsRgba(28, 28, 28, 0.1)}",
    },
    viewports: {
      xSmall: "0px",
      small: "576px", 
      medium: "768px",
      large: "992px",
      xLarge: "1200px",
    },
  }