import ArrayBufferConverter, { getBuffer } from '../js/arrayBuffer';

test('converting data to a string', () => {
  const buffer = new ArrayBufferConverter();
  const getBufferString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const bufResult = getBuffer();
  buffer.load(bufResult);

  expect(buffer.toString()).toBe(getBufferString);
});