const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt'); 
const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

const users = [
    {
        username: 'alice',
        password: '$2b$10$vfj.LQB6qGtvwILmmuoP1ePUc..UbYyExqC42GgBZT2LQfC8Rgcn2', 
    },
    {
        username: 'fred',
        password: '$2b$10$JyC1GpAyy.lSA6iw/RhcMOuKRy8s6wBP8Lx4hYD9Mx5M0cndGmBnK',
    }
];

// Register
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); 

    users.push({ username, password: hashedPassword }); 
    res.status(200).send('Registration successful!');
});

// Login 
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) { 
        res.status(401).send('Invalid credentials');
        return;
    }
    // session
    req.session.userId = user.username;
    res.cookie('session', req.session.id);
    res.status(200).send('Login successful!');
});

app.get('/protected', (req, res) => {
    if (!req.session.userId) {
        res.status(401).send('Unauthorized');
        return;
    }
    res.status(200).send('Welcome to the protected route!');
});

// Logout
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('session');
    res.status(200).send('Logout successful!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
