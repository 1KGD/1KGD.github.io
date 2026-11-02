export const enum ThemeColor {
    bg,
    link
}

const LIGHT_COLORS: { [key in keyof typeof ThemeColor]: string } = {
    bg: "white",
    link: "red"
}

const DARK_COLORS: { [key in keyof typeof ThemeColor]: string } = {
    bg: "black",
    link: "red",
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
        width: "100%",
        height: "100%",

        background: color("bg")
    },
    link: { color: color("link") },
    header: { color: color("link") }
} as { [key in keyof typeof ElementType]: React.HTMLAttributes<HTMLElement> }