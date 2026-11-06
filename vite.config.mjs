// @ts-check

import mdx from '@mdx-js/rollup';
import { defineConfig } from 'vite';
import rbl from 'babel-plugin-rbl/vite';

const viteConfig = defineConfig({
    plugins: [
        mdx(), rbl()
    ]
});

export default viteConfig;