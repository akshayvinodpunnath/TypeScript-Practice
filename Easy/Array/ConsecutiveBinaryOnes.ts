/*
    Given a binary array nums, return the maximum number of consecutive 1's in the array.

    Input: nums = [1,0,1,1,0,1]
    Output: 2

    Input: nums = [1,1,0,1,1,1]
    Output: 3
*/

function findMaxConsecutiveOnes(nums: number[]): number {
    let newWindow = 0;
    let oldWindow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            newWindow++;
            oldWindow = Math.max(newWindow, oldWindow);
        } else {
            newWindow = 0;
        }
    }
    return oldWindow;
};

//Easier method
function findMaxConsecutiveOnes2(nums: number[]): number {
    return Math.max(...nums.join('').split('0').map(s => s.length))
}