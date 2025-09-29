import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// You can configure base here if you plan to deploy to a subpath.
// For GitHub Pages, set base to '/<repo-name>/'
export default defineConfig({
  plugins: [react()],
});