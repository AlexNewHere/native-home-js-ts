import {mult, splitInToWords, sum} from './01';


let a: number
let b: number
let c: number

beforeEach(()=>{
    a=1
    b=2
    c=3
})
test('sum shod be correct', ()=>{
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('mult shod be correct', ()=>{

    const result1 = mult(a, b)
    const result2 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('split shod be correct', ()=>{
    const sent1='Hello my  friends!'
    const sent2='JS - programming language.'

    //action
    const result1 = splitInToWords(sent1)
    const result2 = splitInToWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(3)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('programming')
    expect(result2[2]).toBe('language')
})

