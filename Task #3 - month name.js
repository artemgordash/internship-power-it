/* Write a JavaScript function to get the month name from a particular date. 

Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"
 */

const month_name = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[date.getUTCMonth()]
}

console.log(month_name(new Date('2/11/2022')))