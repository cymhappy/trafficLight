module.exports = {
    entry:__dirname+"/script/main.js"
    ,output:{
        filename:"main.bundle.js"
        ,path:__dirname+"/public"
    }
    ,module:{
        loaders:[
            {
                test:/\.js$/
                //,include:"./script/"
                ,exclude: /node_modules/
                ,loader:"babel"
                ,query:{
                    presets:["es2015"]
                }
            }
        ]
    }
};