const { defineConfig } = require('vite')
const viteSSR = require('vite-ssr/plugin')
const vue = require('@vitejs/plugin-vue')
const api = require('./node-server/api')
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'

module.exports = defineConfig({
    plugins: [
        viteSSR(),
        vue(),
        ViteComponents({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue'],
            // auto import icons
            customComponentResolvers: [
                // https://github.com/antfu/vite-plugin-icons
                ViteIconsResolver({
                    componentPrefix: '',
                    // enabledCollections: ['carbon']
                }),
            ],
        }),
        ViteIcons(),
        {
            // Mock API during development
            configureServer({ middlewares }) {
                api.forEach(({ route, handler }) => middlewares.use(route, handler))
            },
        },
    ],
    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
        ],
        exclude: [
            'vue-demi',
        ],
    },
})
