/**
 * @jest-environment jsdom
 */

import counter from '../src/Modules/counter.js';
import commentsCounter from '../src/Modules/commentsCounter.js';

// test for comments counter
test('counter counts the respective comments for a meal in the DOM', () => {
  // Arrange
  document.body.innerHTML = "<ul id='comments-list'><li>Comment 1</li><li>Comment 2</li></ul>";

  // Act
  const comments = [...document.querySelectorAll('#comments-list li')];
  const count = commentsCounter(comments);

  // Assert
  expect(comments).toHaveLength(2);
  expect(count).toBe(2);
});

// Test the counter function for items
describe('Count the number of Items in the page', () => {
  test('The number of Items is equal to 0', () => {
    // Arrange
    document.body.innerHTML = '';
    const output = 0;

    // Act
    const result = counter();

    // Assert
    expect(result).toBe(output);
  });
});

describe('Count the number of Items in the page', () => {
  test('The number of Items is equal to 2', () => {
    // Arrange
    document.body.innerHTML = `
    <div class="meal"> </div>
    <div class="meal"> </div>
    `;
    const output = 2;

    // Act
    const result = counter();

    // Assert
    expect(result).toBe(output);
  });
});

describe('Count the number of Items in the page', () => {
  test('The number of Items is equal to 4', () => {
    // Arrange
    document.body.innerHTML = `
    <div class="meal"> </div>
    <div class="meal"> </div>
    <div class="test"> </div>
    <div class="meal"> </div>
    <div class="test"> </div>
    <div class="meal"> </div>
    `;
    const output = 4;

    // Act
    const result = counter();

    // Assert
    expect(result).toBe(output);
  });
});
