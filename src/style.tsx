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
    bg: "linear-gradient(355deg,rgba(0, 0, 0, 1) 0%, rgba(2, 48, 0, 1) 100%)",
    link: "red",
    text: "white"
}

export function color(key: keyof typeof ThemeColor): string {
    return DARK_COLORS[key];
}

const enum ElementType {
    root,
    link,
    content,
    header,
    topBar,
}

const style: { [key in keyof typeof ElementType]: React.CSSProperties } = {
    root: {
        position: "fixed",
        top: "0px",
        width: "100%",
        height: "100%",
        overflow: "scroll",

        fontFamily: "Google Sans Code",

        background: color("bg"),
        color: color("text"),
    },
    content: { margin: "5%" },
    link: { color: color("link") },
    header: { color: color("text") },
    topBar: {
        display: "flex",
        flexDirection: "column",

        fontSize: "xx-large",

        position: "sticky",
        top: 0,
        zIndex: 1000,

        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "6px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",

        marginBottom: "2%",
        marginTop: "2%",
    }
}

export default style;