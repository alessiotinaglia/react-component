# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Esercizio

Prendendo ispirazione dal layout fornito in allegato, creare la pagina iniziale di un blog con un post inserito al suo interno. Assicuratevi di suddividere il layout in componenti appropriati.
Step per creare il progetto:

Creiamo un progetto React utilizzando vite npm create vite@latest .

Installiamo le dipendenze npm install

Lanciamo il server di sviluppo npm run dev

Creiamo una cartella components nella quale inseriremo i nostri componenti

BONUS:

Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules
Creiamo un array di posts e usiamo le props per popolare le card con i dati giusti (ogni card il suo oggetto post)