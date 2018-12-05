import del from 'del';

const remove = ['lib', 'public/*'];
const save = ['!public/*.html'];

export const CLEAN = () => del([...remove, ...save]);
