import moment from 'moment';
export function calculateSumOfNumbers(numbers){
    let sum = 0
    numbers.forEach(n =>{sum += n})
    return sum
}

export function getFormattedTime(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}