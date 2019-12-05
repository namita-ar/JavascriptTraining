import buble from '@rollup/plugin-buble';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
export default {
  input: 'src/index.js',
  output: {
    dir: 'public',
    format: 'cjs'
  },
  plugins: [
      buble({
        transforms: { asyncAwait: false }
      }),
      livereload(),
      serve({
          open: true,
          contentBase: "public",
          port: 5556
      })
    ]    
};