/**
 * @jest-environment jsdom
 */

import counter from '../src/Modules/counter.js';
// Test the counter function

describe('Count the number of Items in the page', () => {
  test('The number of Items is equal to 0', () => {
    //Arrange
    document.body.innerHTML = '';
    const output = 0;

    //Act
    const result = counter();
    
    //Assert
    expect(result).toBe(output);
  });

});

describe('Count the number of Items in the page', () => {
  test('The number of Items is equal to 2', () => {
    //Arrange
    document.body.innerHTML = `
    <div class="meal"> </div>
    <div class="meal"> </div>
    `;
    const output = 2;

    //Act
    const result = counter();
    
    //Assert
    expect(result).toBe(output);
  });

});

describe('Count the number of Items in the page', () => {
  test('The number of Items is equal to 4', () => {
    //Arrange
    document.body.innerHTML = `
    <div class="meal"> </div>
    <div class="meal"> </div>
    <div class="test"> </div>
    <div class="meal"> </div>
    <div class="test"> </div>
    <div class="meal"> </div>
    `;
    const output = 4;

    //Act
    const result = counter();
    
    //Assert
    expect(result).toBe(output);
  });

});
