export function ThemeScript() {
  const code = `
    (() => {
      try {
        const stored = localStorage.getItem("builddesk-theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
      } catch {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
