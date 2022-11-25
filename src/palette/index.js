import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
const colors = { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey };
const accents = { A100: "A100", A200: "A200", A400: "A400", A700: "A700" };

const palette = {};
for(const color of Object.keys(colors))
    for(const accent of Object.keys(accents)) {
        const key = color + accent;
        palette[key] = { main: colors[color][accents[accent]] };
    }

const theme = createTheme({
    palette: {
        ...palette,
    }
})

export { theme, colors, accents };