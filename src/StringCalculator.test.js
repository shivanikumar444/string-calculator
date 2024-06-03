// StringCalculator.test.js
import { add } from './StringCalculator';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number for a single number', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum for two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns the sum for multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws an exception for negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2, -4");
});
