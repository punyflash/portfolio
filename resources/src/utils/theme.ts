export default function themeChange(theme: string | null | boolean = true, target: HTMLElement = null) {
    if (import.meta.env.SSR) return;

    target ??= document.documentElement;

    if (!theme) {
        localStorage.removeItem("theme");
        target.removeAttribute("data-theme");
    } else if (theme === true) {
        target.setAttribute("data-theme", localStorage.getItem("theme"));
    } else {
        localStorage.setItem("theme", theme);
        target.setAttribute("data-theme", theme);
    }

    const event = new Event('theme-changed')
    window.dispatchEvent(event)
}
