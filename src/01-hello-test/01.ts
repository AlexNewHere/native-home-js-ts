
export function splitInToWords(sentence: string) {
    return sentence.toLowerCase().split(' ')
        .filter(w => w !== '' && w!=='-')
        .map(w => w.replace('.', '')
        .replace('!', '')
        )
}


export function sum(a: number, b: number) {
    return a + b
}


export function mult(a: number, b: number) {
    return a * b
}



