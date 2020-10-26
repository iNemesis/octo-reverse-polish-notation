const {polishCalc} = require("./index");

// describe('Kata bowling controller', () => {

//     test('return player1 when player1 given', () => {
//         // Given
//         const playerName = "player1";
//         const playerLine = [];
//         const bowlingPlayer = new BowlingPlayer(playerName, playerLine);
//         const bowlingController = new BowlingController(playerName);
//         // When
//         const player = bowlingController.player;
//         // Then
//         expect(player).toEqual(playerName);
//     });
// });
describe('Polish number', () => {
    test('when + after 2 numbers (2 and 2) return the sum', () => {
        // Given
        const input = "2 2 +";
        const aimedResult = 2+2;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when + after 2 numbers (5 and 6) return the sum', () => {
        // Given
        const input = "5 6 +";
        const aimedResult = 5+6;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when + after 2 numbers (50 and 60) return the sum', () => {
        // Given
        const input = "50 60 +";
        const aimedResult = 50+60;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when - after 2 numbers (60 and 50) return the substract', () => {
        // Given
        const input = "60 50 -";
        const aimedResult = 60-50;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when * after 2 numbers (60 and 50) return the multiplication ', () => {
        // Given
        const input = "60 50 *";
        const aimedResult = 60*50;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when / after 2 numbers (60 and 50) return the division ', () => {
        // Given
        const input = "60 50 /";
        const aimedResult = 60/50;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when / after 2 numbers (1 and 3) return the division ', () => {
        // Given
        const input = "1 3 /";
        const aimedResult = 1/3;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when + after 3 numbers (1, 3, 3) return the sum ', () => {
        // Given
        const input = "1 3 + 3 +";
        const aimedResult = 1+3+3;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when + and - after 3 numbers (1, 3, 3) return the result ', () => {
        // Given
        const input = "1 3 + 3 -";
        const aimedResult = 1+3-3;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });

    test('when - + after 3 numbers (1, 3, 3) return the result ', () => {
        // Given
        const input = "1 3 3 - +";
        const aimedResult = 1+3-3;
        // When
        const result = polishCalc(input);
        // Then
        expect(result).toEqual(aimedResult);
    });
});
