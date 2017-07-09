/**
 * Created by ZJ on 2017/7/9.
 */
var webpack=require('webpack');
module.exports={
  entry:__dirname+'/main.js',
    output:{
      path:__dirname+'/',
      filename:"bundle.js"
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]
};