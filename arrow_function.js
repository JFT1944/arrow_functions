// Question 1:
const func1 = (arr) => {
    return arr.map((val) =>{
        return val * 2
    })
}

function squareAndFindEvens(numbers){
    let squares = numbers.map((num) => {
        return num ** 2
    })
    let evens = squares.filter((square)=>{
        return square % 2 === 0
    })
    return evens


    const sq1 = (numbers) => numbers.map((val) => val ** 2).filter(square => square % 2 === 0)
}