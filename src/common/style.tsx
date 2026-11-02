export const enum ThemeColor {
    bg,
    link,
    text
}

const LIGHT_COLORS: { [key in keyof typeof ThemeColor]: string } = {
    bg: "white",
    link: "red",
    text: "black"
}

const DARK_COLORS: { [key in keyof typeof ThemeColor]: string } = {
    bg: "black",
    link: "red",
    text: "white"
}

export function color(key: keyof typeof ThemeColor): string {
    return DARK_COLORS[key];
}

const enum ElementType {
    root,
    link,
    header
}

export default {
    root: {
        position: "absolute",
        width: "100%",
        height: "100%",

        background: color("bg"),
        color: color("text"),
    },
    link: { color: color("link") },
    header: { color: color("text") }
} as { [key in keyof typeof ElementType]: React.HTMLAttributes<HTMLElement> }