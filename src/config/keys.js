import prodKey from './prod';
import devKey from './dev';

// keys.js - figure out what set of credentials to return
const keys = process.env.NODE_ENV === 'production' ? prodKey : devKey;

export default keys;
