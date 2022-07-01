const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    const users = [{id: 1, name: 'bot'}, {id: 2, name: 'robot'}];

test('We should have ids 1 and 2', () => {
    expect(users).toEqual(
        expect.arrayContaining([
            expect.objectContaining({id: 1}),
            expect.objectContaining({id: 2})
        ])
    )
})

})