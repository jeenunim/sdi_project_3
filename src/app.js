const express = require('express');
const app = express();
const port = 3000;
const knex = require('knex')(require('../knexfile.js')['development'])

app.use(express.json());//will help us parse the body of the request

app.get('/', (req, res) => {
    res.send("Hello brave soldiers!")
})

// Weapon endpoint //
app.get('/weapon', (req, res) => {
    knex('weapon_system')
        .select('*')
        .then(data => {
        //data formatting if we'd like
            var weapon = data;//.map(data => data.name)
            res.json(weapon);
        })
})

app.post('/weapon', async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const weapon = await knex('weapon_system').insert(body)
        // res.status(201).send(`posted new weapon ${body.name}`)
        res.status(201).send(weapon);
    } catch (error) {
        res.status(500).json({error});
    }
    
})

// Anti-armor endpoint //
app.get('/anti-armor', (req, res) => {
    knex('weapon_system')
        .select('*')
        .where('weapon_type_id', '2')
        .then(data => {
            //data formatting if we'd like
            var weapon = data.map(data => data.name)
            res.json(weapon);
        })
    })



app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})