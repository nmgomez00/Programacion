//esm  -> EscmaScript Modules -> import import / export
// node -> CommonJS -> require

export function sumar(n1, n2) {
  return n1 + n2;
}
export function restar(n1, n2) {
  return n1 - n2;
}

export default {
  sumar,
  restar,
};
