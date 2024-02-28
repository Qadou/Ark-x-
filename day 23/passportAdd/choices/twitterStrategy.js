const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

const twitterStrategy = new TwitterStrategy({
    consumerKey: 'your-consumer-key',
    consumerSecret: 'your-consumer-secret',
    callbackURL: '/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    // Instead of redirecting, return user information as JSON
    return done(null, { provider: 'twitter', profile });
  }
);

passport.use('twitter', twitterStrategy); 

module.exports = twitterStrategy;
