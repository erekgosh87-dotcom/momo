export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'bun:bundle') {
    return {
      format: 'module',
      shortCircuit: true,
      url: 'data:text/javascript,export function feature(name){ return true; }',
    };
  }
  return nextResolve(specifier, context);
}
