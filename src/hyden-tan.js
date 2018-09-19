/**
 * @description 数组分段, 用法: segArray([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 * @param {Array} arr 原数组
 * @param {Integer} size 分段大小
 */
const segArray = (arr, size = 2) => arr.reduce((res, item, index) => {
    if (!Array.isArray(arr)) {
        return [];
    }

    if (size < 2) {
        return arr;
    }

    if (index % size === 0) {
        res.push(arr.slice(index, index + size));
    }

    return res;
}, []);

module.exports = {
    segArray
}