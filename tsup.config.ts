// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    // root
    index: 'src/index.ts',

    // components
    'components/Button': 'src/components/Button.tsx',
    'components/Card': 'src/components/Card.tsx',
    'components/Modal': 'src/components/Modal.tsx',
    'components/Badge': 'src/components/Badge.tsx',
    'components/Pagination': 'src/components/Pagination.tsx',
    'components/CopyButton': 'src/components/CopyButton.tsx',
    'components/Loaders': 'src/components/Loaders.tsx',

    // theme
    'theme/ThemeProvider': 'src/theme/ThemeProvider.tsx',
    'theme/ThemeSwitcher': 'src/theme/ThemeSwitcher.tsx',

    // gradients
    'gradients/color': 'src/gradients/color.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,     // keep 1:1 files for easy exports mapping
  outDir: 'dist',
  target: 'es2020',
});
