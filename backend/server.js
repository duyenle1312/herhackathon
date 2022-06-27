const express = require('express');

const bodyParser = require('body-parser');

var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'herhackathon.cwnrxwplws9a.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'team2awesome',
    port: 3306,
    database: 'questionaires'
})

const app = express();

app.use(bodyParser.json());

// GET endpoint for retrieving a completed questionaire from a given email
app.get('/retrieve/', (req, res) => {

    const userEmail = req.query.email || "null";

    const query = `select * from questionaires where email = '${userEmail}'`;
    
    connection.query(query, function (err, result) {
        if (err) res.send('error: ' + err.message);
        else res.send(result);
    });
});

// POST endpoint for storing a new questionaire in the DB
app.post('/update/', (req, res) => {

    const data = new Map(Object.entries(req.body))
    let values = Array.from(data.values()).map(answers => `'${answers}'`)

    const query = `insert into questionaires values (${values})`
    console.log(query)

    connection.query(query, function (err, result) {
        if (err) res.send('error: ' + err.message);
        else res.send('Questionaire stored successfully');
    });

});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
