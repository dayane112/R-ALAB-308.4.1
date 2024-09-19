// Part 1: Refactoring Old Code
// Part A Fizz Buzz

// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is workin

// Original
// for(let i = 1; i <= 100; i++){
//     // If a number is divisible by 3, log “Fizz.”
//     if(i <= 100){
//         if(i % 3 == 0 && i % 5 == 0){
//         console.log(`Fizz buzz`)
//         } else if(i % 3 == 0) {
//             console.log(`Fizz`)
//         } else if(i % 5 == 0){
//             console.log(`buzz`)
//         } else{
//             if(i % 3 !== 0 && i % 5 !== 0){
//             console.log(i)
//             }
//         }
//     }
// }



// for (let i = 1; i <= 100; i++){
//     console.log((i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '') || (i))
// }



// Part B
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.

// let n = 1;
// let num = n;

// while (n <= 100){
//     n++
//     if(n === 2 || n === 3){
//         num = true
//     } else if( n % 2 == 0 || n % 3 == 0){
//         num = false 
//     }

//  }
// console.log(n)



// let n = 7
// while(n < 100){
//     n++
// //     if (6 * n - 1){
// //         console.log(n)
// // }
//     if (n % 2 !== 0 && n % 3 && n % 5){
//         break;
       
//     } 
// }
// console.log(n)




// Part c
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

// let string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// let row = '';
// let cell = '';

// for(let i = 0; i < string.length; i++){
//     // console.log(csv.length);

//     // if()
//     string[string.length - 1]
    
//     console.log(string)

// }








// Part 2: Expanding Functionality

    // Declare a variable that stores the number of columns in each row of data within the CSV.
    // Instead of hard-coding four columns per row, expand your code to accept any number  of columns. This should be calculated dynamically based on the first row of data.
    // For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
    // After you have implemented the above:
    // Store your results in a two-dimensional array.
    // Each row should be its own array, with individual entries for each column.
    // Each row should be stored in a parent array, with the heading row located at index 0.
    // Cache this two-dimensional array in a variable for later use.
    // Using the original CSV example data, here is what the result of this step should look like:
    // ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

    let allCSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


    // let array = [[ID,Name,Occupation,Age\n]
    //     [42,Bruce,Knight,41\n]
    //     [57,Bob,Fry Cook,19\n]
    //     [63,Blaine,Quiz Master,58\n]
    //     [98,Bill,Doctor’s Assistant,26]
    // ]
    

    let row = [];
    let cell = '';
    // let x = [];
        // let all = allCSV.splice('\n')
        // for (let i = 0; i < rows.length; i++)

    for(let i = 0; i < allCSV.length; i++){
        // let row = char.forEach(el) {
        //     console.log(row)
        // }
        switch (allCSV[i]){
            case ',':
                // row = row + cell + ''; // didn't work
                row[row.length] = cell;
                cell = '';
                break;
            case '\n':
                // row = row + cell + '';  //didn't work 
                row[row.length] = cell;
                console.log(row)
                row = [];
                cell = '';
                break;
            default:
                cell += allCSV[i];
                break;
        }
        if (i  == allCSV.length - 1){
            row = row + cell;
            console.log([row])
            
        }
}
    // while (start < allCSV.length) {
    //     let rEnd = allCSV.indexOf('\n', start);
    //     if (rEnd === -1) {
    //         rEnd = allCSV.length;
    //     }  
           
  
    //     x.push(row);
    //     start = rEnd + 1;
    // }
    // console.log(x)
    
    
    
    
    
    // Part 3: Transforming Data
    
        // For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
        // Convert these keys to all lowercase letters for consistency.
        // Store these objects in an array, in the order that they were originally listed.
        // Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
    
    let a = [["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]]
        // let starts = 0;
    // let section = [];
    //     // emplty array
    // let y = [];
    
    // for (let i = 0; i < a[0].length; i++) {
    //         // make lowercase
    //     section.push(a[0][i].toLowerCase());
    // }
    
    // for (let rowI = 0; rowI < a.length; rowI++) {
    //     let row = a[rowI];
    //     let allObject = {};
    
    
    //     y.push(allObject);
    // }
    
    // console.log(y)
    
    
 
    
    
    // Part 4: Sorting and Manipulating Data
    
        // Remove the last element from the sorted array.
        // Insert the following object at index 1:
        // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
        // Add the following object to the end of the array:
        // { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    
    
    let b = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
    
//    b.pop()
//    b.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
//    b.splice(4,0, { id: "7", name: "Bilbo", occupation: "None", age: "111" })
//    console.log(b)    
    
    
    
    // Part 5: Full Circle
        // As a final task, transform the final set of data back into CSV format.
        // There are a number of ways to do this; be creative!
    
    let c = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

    
    
    // for (let i = 0; i < c.length; i++) {
        
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    