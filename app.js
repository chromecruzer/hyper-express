// Hyper-express server

// import { Server, Router } from 'hyper-express';

// // Create a new router
// const router = new Router();

// // Define a route
// router.get('/', (req, res) => {
//     //console.table(req.headers)
//     res.send('Hello, HyperExpress!');
// });

// // Create a new HyperExpress server
// const server = new Server();

// // Attach the router to the server
// server.use(router);

// // Start the server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// express server 

// import express from 'express';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const app = express();

// // Get the directory name using import.meta.url
// const __dirname = dirname(fileURLToPath(import.meta.url));

// // Set the directory for views
// app.set('views', join(__dirname, 'views'));

// // Set the view engine to use Pug
// app.set('view engine', 'pug');

// // Define a route to render a Pug template
// app.get('/', (req, res) => {
//  // res.render('index', { title: 'Express with Pug', message: 'Hello from Express!' });
//   res.send(`Hellow express`)
// });

// // Start the Express server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// Nano express
import nanoexpress from 'nanoexpress';

const app = nanoexpress();

app.get('/', (req, res) => {
     res.send(`Hellow from Nano express`);
});


app.listen(3000);

/**
 * import nanoexpress from 'nanoexpress';

const app = nanoexpress();

// Sample data (in-memory database)
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// PUT update user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  let userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users[userIndex] = { ...users[userIndex], ...updateUser };
  res.json(users[userIndex]);
});

// DELETE user by ID
app.del('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

app.listen(3000);

 */