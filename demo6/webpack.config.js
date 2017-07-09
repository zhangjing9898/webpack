/**
 * Created by ZJ on 2017/7/9.
 */
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    devServer: {
       contentBase: './', //本地服务器所加载的页面所在的目录
        host: '192.168.1.103', //本地IP地址
        //colors: false, //终端输出结果为彩色
       //historyApiFallback:true,
       // hot:false,
       inline:true,
       // progress:true,//报错无法识别，删除后也能正常刷新
        port: '8088' //端口号

    }
}