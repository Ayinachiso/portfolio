export function ThemeScript() {
  const code = `
    (() => {
      try {
        const stored = localStorage.getItem("builddesk-theme");
        // Start in light mode unless the visitor has explicitly chosen dark mode.
        const theme = stored === "dark" ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
      } catch {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
