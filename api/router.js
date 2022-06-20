const response = require("./response");
module.exports = (app)=>{
    app.get('/',(req,res)=>{
        response(200, "Hello world", res);
    });
}