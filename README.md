# Recurring Words & Bracket Balance Utility

This TypeScript project provides two main utilities:

1. **Bracket Balance Checker**  
   Checks if all types of brackets (parentheses, curly braces, etc.) in a string are balanced and properly nested.

2. **Recurring Words Finder**  
   Finds the most frequent words in a given string, ignoring punctuation and case. If multiple words have the same frequency, they are sorted alphabetically.

---

## Project Structure

```
/src
  q1.ts         // Bracket balance logic
  q2.ts         // Recurring words logic
index.ts        // Example usage
_tests_/        // Jest test files
tsconfig.json   // TypeScript config
package.json    // NPM config
```

---

## How to Run

### 1. Install Dependencies

```sh
npm install
```

### 2. Build the Project

```sh
npx tsc
```

### 3. Run the Example

```sh
npm run dev
```

### 4. Run Tests

```sh
npm run test
```

---

## Features

### Bracket Balance Checker

- Checks for balanced `{}`, `[]`, `()`, `<>` in a string.
- Returns `true` if all are balanced, otherwise `false`.

### Recurring Words Finder

- Removes all punctuation and special characters.
- Converts all words to lowercase.
- Counts occurrences of each word.
- Returns an array of `{ word, count }` sorted by count (descending), then alphabetically.

---

## Example Output

```
-------------------
finding starting and ending points brackets with correct
{ ds { j (h) k } sdf } 
Is the { ds { j (h) k } sdf }  valid?  Yes branckets found:  true
-------------------
asdhjkhasdkjfhasd { dsj(hksdf } sakdfhakjsdhkjasdf(asdhfkjashdf) askdjfhaskdj asdkjfhasdkj (jhsdjfhas (asdfhjksd) ashjdfkjasdh)
Is the asdhjkhasdkjfhasd { dsj(hksdf } sakdfhakjsdhkjasdf(asdhfkjashdf) askdjfhaskdj asdkjfhasdkj (jhsdjfhas (asdfhjksd) ashjdfkjasdh)  valid?  No branckets found:  false
-------------------
Finding most frequent words in a string...
Most frequent words in the string:
Word: sit, Count: 4
Word: amet, Count: 4
Word: eu, Count: 3
...
```

---

## License

MIT