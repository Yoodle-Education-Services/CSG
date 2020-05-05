const mongoose  = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURL = `mongodb://${host}/Loc8r`;
let dbURI = 'mongodb://localhost/Loc8r';
  if (process.env.NODE_ENV === 'production') {
      dbURI = 'mongodb://heroku_z5cmxjkb:bci9qejrj2ebj0kkdnnbjk58hr@ds149373.mlab.com:49373/heroku_z5cmxjkb';
      
  }
const readLine = require('readline');

const connect = () => {
  setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log('connected to ' + dbURI);
});

mongoose.connection.on('error', err => {
  console.log('error: ' + err);
  return connect();
});

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
});

if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ('SIGINT', () => {
    process.emit("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});
connect();
require('./origins');