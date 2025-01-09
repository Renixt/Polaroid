// app/layout.js
import './globals.css';  // Asegúrate de importar el archivo global de estilos

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
