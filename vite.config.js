import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/sistema_muebles/', // Asegúrate de usar el nombre del repositorio
  plugins: [react()],
});