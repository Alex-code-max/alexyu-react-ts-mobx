const {
  override,
  addDecoratorsLegacy,
  addPostcssPlugins,
  fixBabelImports
} = require("customize-cra");
module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      style: "css"
    }),
    addPostcssPlugins([
      require("postcss-px-to-viewport")({
        unitToConvert: "px",
        viewportWidth: 375,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 568
      })
    ])
  )
};
