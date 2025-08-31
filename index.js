import express from "express";

const app = express();
const port=3000;

app.use(express.static("public"));

app.get("/",(req,res)=>
{
    res.render("index.ejs");
});

app.get("/radha",(req,res)=>
{
    res.render("radha.ejs");
});

app.get("/krishna",(req,res)=>
{
    res.render("krishna.ejs");
});

app.get("/temple",(req,res)=>{
    res.render("temple.ejs");
});

app.get("/goshala",(req,res)=>{
    res.render("goshala.ejs");
});

app.get("/RK",(req,res)=>{
    res.render("RK.ejs");
});

app.get("/srilap",(req,res)=>{
    res.render("srilap.ejs");
});

app.get("/bhagwadgeetha",(req,res)=>{
    res.render("bhagwadgeetha.ejs");
});

app.get("/consciousness",(req,res)=>{
    res.render("krishna Con.ejs");
});

app.get("/bhajans",(req,res)=>{
    res.render("bhajan.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
