const passport = require('passport');
const googleStrategy = require('../choices/googleStrategy');
const twitterStrategy = require('../choices/twitterStrategy');
const facebookStrategy = require('../choices/facebookStrategy');


passport.use(googleStrategy);
passport.use(twitterStrategy);
passport.use(facebookStrategy);

const authController = {

login : (req, res) => {
    res.send('Login page'); 
}

,chooseAuth : (req, res) => {
    res.send(`
        <h1>Choose Authentication Method</h1>
        <p>Send a POST request to /auth/login with JSON payload:</p>
        <pre>{"authMethod": "google"}</pre>
    `);
}

,authenticate: (req, res) => {
    const { authMethod } = req.body;
    if (!authMethod) {
        return res.status(400).json({ error: 'Authentication method not provided' });
    }

    passport.authenticate(authMethod, { session: false }, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Authentication failed' });
        }
        if (!user) {
            return res.status(401).json({ error: 'User not authenticated' });
        }
        // Authentication successful, return user information
        res.json({ user });
    })(req, res); // Invoke the authentication middleware
}}

module.exports = authController;
