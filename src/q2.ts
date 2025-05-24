// const stringX = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu tellus ut lacus faucibus viverra. Nam sem justo, euismod sit amet hendrerit quis, rhoncus ac ante. Proin ante ex, facilisis ut viverra sit amet, ultricies semper lacus. Quisque pellentesque varius libero, nec feugiat diam vehicula ut. Nullam eu pharetra odio. Suspendisse semper ipsum arcu, auctor gravida augue posuere sed. In hac habitasse platea dictumst. Nulla sit amet est elit. In feugiat vestibulum bibendum.";
// Return most frequent words in the string
// if more than one word has the same frequency, reutrn in alphabetical order
export type RecurringWord = {
    word: string;
    count: number;
}

export const findRecurringWords = (input: string) => {
    if (!input || input.length === 0) {
        return [];
    }
    const cleanedInput = input
    .replace(/[.,!?;:(){}\[\]<>]/g, "") // remove specific punctuation
    .replace(/[^a-zA-Z0-9\s]/g, "")     // remove all non-alphanumeric characters
    .toLowerCase();
    
    console.log("🚀 ~ findRecurringWords ~ cleanedInput:", cleanedInput)
    // Replace multiple spaces with a single space before splitting
    const words = cleanedInput.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
    const wordDictionary = new Map<string, number>();
    words.forEach(word => {
        wordDictionary.set(word, (wordDictionary.get(word) ?? 0) + 1);
    });

    const results: RecurringWord[] = [...wordDictionary.entries()]
        .sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
            return b[1] - a[1];
        })
        .map(([word, count]) => ({ word, count } as RecurringWord));

    return results;
}