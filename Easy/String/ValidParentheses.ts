/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.

    Examples:

        Input: s = "()"
        Output: true

        Input: s = "()[]{}"
        Output: true

        Input: s = "{[]}"
        Output: true

        Input: s = "([)]"
        Output: false
*/

//Create Map for open and close parentheses
const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
]);

//function to check if the string has valid parentheses
function isValid(s: string): boolean {
    //will return false if the string length is not even number
    if (s.length % 2 !== 0) {
        return false;
    }

    //create a stack to store parentheses
    const stack: string[] =[];
    for (let i=0; i < s.length; i++) {
        //element in position i is a key in map, push to stack
        if(map.has(s[i])) {
            stack.push(s[i]);
        } else {
            // evaluate if element in position i is not a key in map
            
            // no elements in stack, return false
            // string was []} => i is 2, s[i] = }, stack is currently empty as open parenthese [ was removed from stack as next element was ].  
            if (stack.length == 0) {
                return false;
            }
            // if stack is not empty, pop the last element from stack and store in value
            const lastElementInStack = stack.pop();
            // for lastElementInStack get the corresponding value from map, if the value for key lastElementInStack does not match s[i] return false
            if (map.get(lastElementInStack) != s[i]) {
                return false;
            }
        }
    }
    //stack should be empty for a valid parentheses string
    return stack.length === 0;
}