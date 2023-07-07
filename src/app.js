const express = require('express');
const app = express();
const port = 3000;
const knex = require('knex')(require('../knexfile.js')['development'])

app.use(express.json());//will help us parse the body of the request

// Home page //
app.get('/', (req, res) => {
    res.send("Hello brave soldiers!")
})

// Weapon endpoint //
app.get('/weapon', (req, res) => {
    knex('weapon_system')
        .select('*')
        .then(data => {
            var weapon = data;
            res.json(weapon);
        })
})

app.get('/weapon/:id', (req, res) => {
    knex('weapon_system')
        .select('*')
        .where({id: req.params.id})
        .then(data => {
            var weapon = data;
            res.json(weapon);
        })
})

app.post('/weapon', async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const weapon = await knex('weapon_system').insert(body)
        res.status(201).send(weapon);
    } catch (error) {
        res.status(500).json({error});
    }
    
})

app.patch('/weapon/:id', (req, res) => {
    let weaponID = req.params.id;
    knex('weapon_system').where({ id: weaponID }).update(req.body).returning('*')
        .then(function(data) {res.send(data)})
})

app.put('/weapon/:id', (req, res) => {
    let weaponID = req.params.id;
    knex('weapon_system').where({ id: weaponID })
    .update({name: req.body.name || null, 
        details: req.body.details || null, 
        weapon_type_id: req.body.weapon_type_id || null})
        .returning('*')
        .then(function(data) {res.send(data)})
})

app.delete('/weapon/:id', (req, res) => {
    knex('weapon_system').where({id: req.params.id}).del()
        .then(function () {
            res.json('Deleted successfully')
        })
})

// Target endpoint //
app.get('/target', (req, res) => {
    knex('target_list')
        .select('*')
        .then(data => {
            var weapon = data;
            res.json(weapon);
        })
})

app.get('/target/:id', (req, res) => {
    knex('target_list')
        .select('*')
        .where({id: req.params.id})
        .then(data => {
            var weapon = data;
            res.json(weapon);
        })
})

app.post('/target', async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const target = await knex('target_list').insert(body)
        res.status(201).send(target);
    } catch (error) {
        res.status(500).json({error});
    }
    
})

app.patch('/target/:id', (req, res) => {
    let targetID = req.params.id;
    knex('target_list').where({ id: targetID }).update(req.body).returning('*')
        .then(function(data) {res.send(data)})
})

app.put('/target/:id', (req, res) => {
    let targetID = req.params.id;
    knex('target_list').where({ id: targetID })
    .update({name: req.body.name || null, 
        details: req.body.details || null, 
        img_url: req.body.img_url || null})
        .returning('*')
        .then(function(data) {res.send(data)})
})

app.delete('/target/:id', (req, res) => {
    knex('target_list').where({id: req.params.id}).del()
        .then(function () {
            res.json('Deleted successfully')
        })
})

// Anti-armor endpoint //
app.get('/anti-armor', (req, res) => {
    knex('system_type_bridge')
        .select('*')
        .where('weapon_type_id', '2')
        .then(data => {
            //data formatting if we'd like
            var weapon = data.map(data => data.weapon_system_id)
            let result = knex('weapon_system').select('*').where({id: weapon})
            return result
        })
    })



app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})