const prodKey = './prod';
const devKey = './dev';

// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  import(prodKey).then(key => {
    return key;
  });
} else {
  // we are in development - return the dev keys!!!
  import(devKey).then(key => {
    return key;
  });
}
export default this.key;
