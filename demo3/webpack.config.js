/**
 * Created by ZJ on 2017/7/9.
 */
module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
        ]
    }
};