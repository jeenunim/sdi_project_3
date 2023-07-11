const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;
const knex = require('knex')(require('../knexfile.js')['development'])

app.use(express.json());//will help us parse the body of the request
app.use(cors())

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
        details: req.body.details || null})
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

// Weapon type endpoint //
app.get('/weapon_type/:id', (req, res) => {
    let weaponID = req.params.id;
    knex('system_type_bridge')
    .join('weapon_system', 'weapon_system_id', '=', 'weapon_system.id')
        .select('weapon_system.id', 'weapon_system.name', 'weapon_system.details', 'weapon_system.img')
        .where('weapon_type_id', weaponID)
        .then(data => {
            res.json(data)
        })
})

app.post('/weapon_type/:typeName/:systemName', async (req, res) => {
    let obj = {
        "typeName": req.params.typeName,
        "systemName": req.params.systemName
    }

    const systemID = await knex('weapon_system')
                        .select('id')
                        .where('name', obj.systemName)
                        .then(data => Object.assign(obj, {systemName: data}))

    const typeID = await knex('weapon_type')
                        .select('id')
                        .where('target_type', obj.typeName)
                        .then(data => Object.assign(obj, {typeName: data}))

    try {
        await knex('system_type_bridge')
        .insert({weapon_system_id: systemID.systemName[0].id, weapon_type_id: typeID.typeName[0].id})
        res.status(201).send('Weapon type added successfully');
    } catch (error) {
        res.status(500).json({error});
    }
})

app.delete('/weapon_type/:typeName/:systemName', (req, res) => {
    let obj = {
        "typeName": req.params.typeName,
        "systemName": req.params.systemName
    }

    knex('system_type_bridge')
        .join('weapon_type', 'weapon_type_id', '=', 'weapon_type.id')
        .join('weapon_system','weapon_system_id','=','weapon_system.id')
        .select('weapon_type.target_type', 'weapon_system.name')
        .where('weapon_type.target_type', obj.typeName)
        .andWhere('weapon_system.name', obj.systemName)
        .del()
        .then(function () {
            res.json('Deleted successfully')
        })
})

// Server listen //
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})