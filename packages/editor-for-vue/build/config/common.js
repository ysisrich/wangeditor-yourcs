import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import vuePlugin from 'rollup-plugin-vue';

export const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    peerDepsExternal(), // 打包结果不包含 package.json 的 peerDependencies
    json({
      compact: true,
      indent: '  ',
      preferConst: true,
    }),
    typescript({
      clean: true,
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    }),
    nodeResolve({
      browser: true, // 重要
      extensions,
    }),
    vuePlugin({
      target: 'browser',
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true,
    }),
    // del({ targets: 'dist/*' }),
  ],
};
