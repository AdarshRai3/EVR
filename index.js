import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    return res.send ("Welcome to Employee Review System App");
});

app.listen(7000);
