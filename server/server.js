const express = require('express');
const cors = require('cors');
const app = express();

// Express runs its middleware in order. So make sure this app.use code runs before you set up your routes.
//By default, the cors library will allow requests from any origin. This can open you up to security problems and abuse.
app.use(cors());
app.use(express.json()); // get ability to use body for post, put, delete;

const {
  Pool
} = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5000/<eventonica>',
  ssl: process.env.NODE_ENV === 'production'
})



// events data seed data
let events = [{
    id: 455,
    name: "Techtonica"
  },
  {
    id: 456,
    name: "Learn Python"
  },
  {
    id: 457,
    name: "Github 101"
  }
]

pool.connect();

app.get('/events', async (req, res) => {
  const client = await pool.connect();
  var events = await client.query("SELECT * FROM events");
  //res.set('Access-Control-Allow-Origin', "*") // allow cors for any domain 
  res.json(events.rows);
  client.release();
});


app.get('/events/:id', async (req, res) => {
  const client = await pool.connect();
  var events = await client.query("SELECT * FROM events  WHERE id=$1", [req.params.id]);
 // res.set('Access-Control-Allow-Origin', "*") // allow cors for any domain
  res.json(events.rows[0]);
  client.release();
});


app.post('/events', async (req, res) => {
  const client = await pool.connect();
  //let userId = req.body.id;
  // req.set('Access-Control-Allow-Origin', "*") // allow cors for any domain
  // res.set('Access-Control-Allow-Origin', "*") // allow cors for any domain
  let userName = req.body.name;
  var events = await client.query("INSERT INTO events(name) VALUES($1) RETURNING *", [userName]);

  res.json(events.rows[0]);

  client.release();
});


app.put('/events/:id', async (req, res) => {
  const client = await pool.connect();

  var events = await client.query("UPDATE events SET name=$1  WHERE id=$2 RETURNING *", [req.body.name, req.params.id]);

  res.json(events.rows[0]);
  client.release();
});


app.delete('/events/:id', async (req, res) => {
  const client = await pool.connect();
  var events = await client.query("DELETE FROM events WHERE id=$1 RETURNING *", [req.params.id]);
  res.json(events.rows[0]);
  client.release();
});


// Add this below all your other routes
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}



const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

