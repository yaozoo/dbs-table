import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import libCss from "vite-plugin-libcss";
import basicSsl from "@vitejs/plugin-basic-ssl";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // commonjs({ requireReturnsDefault: true }),
    libCss(),
    basicSsl(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    origin: "https://dmd.qa.doublefs.com",
    host: "devfe.doublefs.com",
    port: 9999,
    open: true,
    hmr: { overlay: false },
    https: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  build: {
    lib: {
      // 入口指向组件库入口模块
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "dbsTable",
      // 构建生成的文件名，与package.json中配置一致
      fileName: "dbsTable",
    },

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        globals: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          vue: "Vue",
        },
      },
    },
  },
});
