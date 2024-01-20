const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: `@import "@/assets/styles/style.scss";`   // additionalData
//       }
//     }
//   }
// };

// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData: `@import "@/assets/styles/style.scss";`
//         // additionalData: `@import "~@/assets/styles/style.scss";`
//       }
//     }
//   }
// }



// const path = require('path');

// module.exports = {
//   chainWebpack(config) {
//     config
//       .entry('app')
//       .clear()
//       .add('./src/main.js')
//       .end();
//     config.resolve.alias
//       .set('~', path.join(__dirname, './src'))
//       // .set('@', path.join(__dirname, './src/core'))
//       // .set('#', path.join(__dirname, './src/modules'))
//   },
//   css: {
//     loaderOptions: {
//       sass: {
//         sassOptions: {
//           includePaths: [
//             path.resolve(__dirname, 'src/')
//           ],
//           indentedSyntax: true,
//         },
//         prependData: '@import "~@/assets/styles/style.scss"',
//       },
//     },
//   },
//   assetsDir: '@/assets/',
// }