import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: "./index.js",
    output: {
        file:"./build/bundle.min.js",
        format:"iife",
        name:"bundle"
    },
    plugins:[nodeResolve()]
}