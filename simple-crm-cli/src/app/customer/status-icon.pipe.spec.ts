import { StatusIconPipe } from './status-icon.pipe';

describe('StatusIconPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusIconPipe();
    expect(pipe).toBeTruthy();
  });
  it('prospect (lowercase) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('prospect');
    expect(x).toEqual('online');
 });
 it('prOspEct (mixed case) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('prOspEct');
    expect(x).toEqual('online');
 });
 it('PROSPECT (upper case) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('PROSPECT');
    expect(x).toEqual('online');
 });

 it('purchased (lowercase) should result in money', () => {
  const pipe = new StatusIconPipe();
  const x = pipe.transform('purchased');
  expect(x).toEqual('money');
});
it('pUrchased (mixed case) should result in money', () => {
  const pipe = new StatusIconPipe();
  const x = pipe.transform('pUrchased');
  expect(x).toEqual('money');
});
it('PURCHASED (upper case) should result in money', () => {
  const pipe = new StatusIconPipe();
  const x = pipe.transform('PURCHASED');
  expect(x).toEqual('money');
});

it('null should result in users', () => {
  const pipe = new StatusIconPipe();
  const x = pipe.transform(null);
  expect(x).toEqual('users');
});
it('undefined should result in users', () => {
  const pipe = new StatusIconPipe();
  const x = pipe.transform(undefined);
  expect(x).toEqual('users');
});
it('empty string should result in users', () => {
  const pipe = new StatusIconPipe();
  const x = pipe.transform('');
  expect(x).toEqual('users');
});
});
