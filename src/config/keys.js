import devKey from './dev';
import prodKey from './prod';

const tokens = process.env.NODE_ENV === 'production' ? prodKey : devKey;

export default tokens;
