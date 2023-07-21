import commonjs from '@rollup/plugin-commonjs';

export default {
    external:['sweetalert2'],
  input: 'src/main.jsx',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [commonjs()]
};