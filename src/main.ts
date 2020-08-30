import * as qstr from './qstr.js';

const message = qstr.chopRight(
    'Node with TypeScript is ready.-removeThis',
    '-removeThis'
);

console.log(message);