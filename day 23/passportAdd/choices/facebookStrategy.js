const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const facebookStrategy = new FacebookStrategy({
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: '/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // Instead of redirecting, return user information as JSON
    return done(null, { provider: 'facebook', profile });
  }
);

module.exports = function(req, res, next) {
  passport.authenticate('facebook', { session: false })(req, res, next);
};


module.exports = facebookStrategy;
