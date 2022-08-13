const swap = require('./sorting');

test('swap places of two array indexes', () => {
    const arr = [5, 4, 3];
    expect(
        swap(arr, 0, 1)
    ).toEqual([4, 5, 3]);
})
