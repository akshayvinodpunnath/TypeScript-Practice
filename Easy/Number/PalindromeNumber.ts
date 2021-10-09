function isPalindrome(x: number): boolean {
    const xString = x.toString();
    return xString === reverseString(xString);
};

//Function will retrun reverse of string
//Function uses build in methods
function reverseStringBuildIn(y: string): string {
    return y.split('').reverse().join('');
}

//Function returns reverse of string
//No build in functions used.
function reverseString(y: string): string {
    let returnString = ''
    for (let x= y.length - 1; x >=0; x-- ) {
        returnString = returnString + y[x]
    }
    return returnString;
};