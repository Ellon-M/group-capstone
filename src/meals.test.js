import commentsCounter from './js/commentsCounter.js';

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