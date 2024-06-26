const amit =require('express');
const app =amit();  //we are writing this to make express executable
app.get('',(req,res)=>{
   res.send("hy this is a home page");
});
app.get('/about',(req,res)=>{
   res.send("hy this is a about page");
});
app.listen(5200);

