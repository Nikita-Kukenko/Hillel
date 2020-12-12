const api = 'http://localhost:3005/';

export default function(path = '') {
  return `${api}${path}`;
}