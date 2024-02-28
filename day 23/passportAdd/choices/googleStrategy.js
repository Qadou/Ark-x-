const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const googleStrategy = new GoogleStrategy({
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: '/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // Instead of redirecting, return user information as JSON
    return done(null, { provider: 'google', profile });
  }
);

passport.use('google', googleStrategy); // Note the name 'google'

module.exports = googleStrategy;
