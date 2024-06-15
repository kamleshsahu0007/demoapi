import expres from "express";

const app = expres();

const port = 3000

app.get("/", (req, res) => {
    console.log("server is ready");
    res.send("hello")
})

app.listen(port,  ()=>{
    console.log("server runing on port http://locallhost:5000");
},3000)

