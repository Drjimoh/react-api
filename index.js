const express = require("express");
const app = require("express")();

app.listen(

    3000,
    () => console.log("App is running...")
);

app.get("/users", (req, res) => {
    res.status(200).send([
        {name: "John", id: 1},
        { name: "Jimoh", id: 2}
    ]);
});

app.get("/gls/", (req, res) => {
    res.status(200).send([
        {name: "AJO TSS", id: 1},
        {name:"KUDI EGO", id:2},
        {name:"WAco TSS", id:3}
    ]);
});

app.use(express.json());

app.post("/user/3", (req, res) => {
    const name = req.body.name;
    if (!name) {
        res.status(400).send({
            message: "Please add name of the user"
        })
    } 
        res.send({name:name, id:3});
});

app.post("/gl/1", (req, res) => {
    const apiKey = req.body.api_key;
    if (apiKey !== 'bxvFrtCRD46G&^%fBHCD##df'){
        res.status(400).send({
            message: "Please GTFOOH"
        })
    }
    res.send({api_key:apiKey, id:1});
});



