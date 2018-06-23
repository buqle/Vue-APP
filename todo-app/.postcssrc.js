// https://github.com/michael-ciniawsky/postcss-load-config
//npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano precss postcss-crip postcss-bem postcss-size --S
//cnpm i cssnano-preset-advanced --save-dev
//cnpm install postcss-crip postcss-bem postcss-size  --save-dev
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini":{},//处理元素的容器宽高比
    "postcss-write-svg":{utf8:false},//处理移动端1px问题
    "postcss-cssnext": {},//使用css未来特性
    "postcss-px-to-viewport": { //用来把px单位转为vw,vh,vmin,vmax
      viewportWidth: 750, //100vw = 750px，即1vw = 7.5px ru:w:188px;用vw表示188/7.5=25.06vw
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],//设置为让px不转换为vw的类名
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units":{},//为css属性添加content属性 自动为元素添加兼容
    "cssnano": { //用来压缩css
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    },
    "precss":{},"postcss-crip":{},
    "postcss-bem":{
      style: 'bem',
      shortcuts:{
        'component':'c',
        'modifier':'m',
        'descendent':'d'
      }
    },
    "postcss-size":{}

  }
}
