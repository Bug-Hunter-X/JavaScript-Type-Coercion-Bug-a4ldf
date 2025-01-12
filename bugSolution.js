function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function bar() {
  try {
    console.log(foo(1, '2'));
  } catch (error) {
    console.error(error.message);
  }
}

bar();