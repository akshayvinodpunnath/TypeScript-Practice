/*
    Given an array nums of integers, return how many of them contain an even number of digits. 

    Input: nums = [12,345,2,6,7896]
    Output: 2

    Input: nums = [555,901,482,1771]
    Output: 1 
*/

function findNumbers(nums: number[]): number {
    let c = 0;
    for (let n of nums) {
        if (n.toString().length % 2 === 0) {
            c++;
        }
    }
    return c;
};

//ShortHand Method
function findNumbers2(nums: number[]): number {
    return nums.filter(s => s.toString().length % 2 === 0).length
};

