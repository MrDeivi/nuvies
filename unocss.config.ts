import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { themeShortcuts } from './theme/shortcuts'

export default defineConfig({
  shortcuts: [themeShortcuts],
  rules: [
    [/^view-transition-([\w-]+)$/, ([, name]) => ({ 'view-transition-name': name })],
  ],
  theme: {
    colors: {
      primary: { DEFAULT: '#FF375F', 50: '#FFEFF2', 100: '#FFDAE2', 200: '#FFB1C1', 300: '#FF89A0', 400: '#FF6080', 500: '#FF375F', 600: '#FE0033', 700: '#C60028', 800: '#8E001C', 900: '#560011', 950: '#3A000C' },
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Quicksand', 'Quicksand:400,500,700,900'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
