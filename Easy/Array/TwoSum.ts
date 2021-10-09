/*
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
    Solution:
        array = [3, 4, 8, 2, 6]
        target = 9

        first value 3, requiredValue = 9 - 3 = 6, 6 does not exist in map, push (3,0) to map
        2nd value 4, requiredValue = 9 - 4 = 5, 5 does not exist in map, push (4,1) to map
        3rd value 8, requiredValue = 9 - 8 = 1, 1 does not exist in map, push (8,2) to map
        4th value 2, requiredValue = 9 - 2 = 7, 7 does not exist in map, push (2, 3) to map
        5th value 6, requiredValue = 9 - 6 = 3, 3 does exist in map (3,0), return value of 3 from map which is 0 and current array position of value 6, i.e [0, 5]
*/

function twoSum(nums: number[], target: number): number[] {
    // create map to store cur value and array position
    const map = new Map();
    const targetArray: number[] =[];
    for (let x=0; x < nums.length; x++) {
        // calculate the required value
        const requiredValue = target - nums[x];
        // check if required value already exists in map
        if (map.has(requiredValue)) {
            targetArray.push(map.get(requiredValue), x)
            break;
        }
        // if requiredValue not found push cur value and array position
        map.set(nums[x], x);
    }
    return targetArray;
};