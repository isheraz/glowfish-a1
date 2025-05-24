// Problem Statement: 
// Input Large String
// Output [(), {}, []];
// check if a pranthense is opened 
// number of opening and closing brackets should be equal
// placement of the brackets should be correct
// the stack should be empty at the end of string

const isMatchingPair = (opening: string, closing: string): boolean => {
    const pairs: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>'
    };
    return pairs[opening] === closing;
};

export const isStringPranthesesBalanced = (input: string) => {
    if (!input || input.length === 0) {
        return false; // empty string
    };
    const stack: Array<string> = [];
    let countOfBrackets = 0;

    const openings = ['(', '{', '[', '<'];
    const closings = [')', '}', ']', '>'];

    for(let i=0; i <= input.length; i++){
        if(openings.some( b => b === input[i])){
            stack.push(input[i]);
        } else if (closings.some( b => b === input[i])) {
            if (stack.length === 0) {
                return 0; // unmatched closing bracket
            }
            const lastOpening = stack.pop();
            if (!lastOpening || !isMatchingPair(lastOpening, input[i])) {
                return 0; // mismatched brackets
            }
            countOfBrackets++;
        }
    }
    return countOfBrackets;

}