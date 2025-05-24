import { findRecurringWords, RecurringWord } from '../src/q2';

describe('findRecurringWords', () => {
    it('should return an empty array for empty input', () => {
        expect(findRecurringWords("")).toEqual([]);
    });

    it('should return an empty array for undefined input', () => {
        // @ts-expect-error
        expect(findRecurringWords(undefined)).toEqual([]);
    });

    it('should return correct word counts for a simple sentence', () => {
        const input = "apple banana apple orange banana apple";
        const expected: RecurringWord[] = [
            { word: "apple", count: 3 },
            { word: "banana", count: 2 },
            { word: "orange", count: 1 }
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });

    it('should ignore punctuation and special characters', () => {
        const input = "hello, world! hello... world? hello";
        const expected: RecurringWord[] = [
            { word: "hello", count: 3 },
            { word: "world", count: 2 }
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });

    it('should sort alphabetically if counts are equal', () => {
        const input = "cat bat bat cat dog";
        const expected: RecurringWord[] = [
            { word: "bat", count: 2 },
            { word: "cat", count: 2 },
            { word: "dog", count: 1 }
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });

    it('should handle case insensitivity', () => {
        const input = "Dog dog DOG dOg";
        const expected: RecurringWord[] = [
            { word: "dog", count: 4 }
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });

    it('should handle input with only special characters', () => {
        const input = "!@#$%^&*()";
        expect(findRecurringWords(input)).toEqual([]);
    });

    it('should handle input with numbers', () => {
        const input = "one 1 two 2 two 2";
        const expected: RecurringWord[] = [
            { word: "2", count: 2 },
            { word: "two", count: 2 },
            { word: "1", count: 1 },
            { word: "one", count: 1 }
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });

    it('should handle input with repeated words and mixed punctuation', () => {
        const input = "hi! hi, hi. hi; hi: hi?";
        const expected: RecurringWord[] = [
            { word: "hi", count: 6 }
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });

    it('should handle input with multiple spaces', () => {
        const input = "apple    banana   apple";
        const expected: RecurringWord[] = [
            { word: "apple", count: 2 },
            { word: "banana", count: 1 },
        ];
        expect(findRecurringWords(input)).toEqual(expected);
    });
});