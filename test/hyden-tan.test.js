var expect = require('chai').expect;
var methods = require('../src/hyden-tan');

describe('hyden-tan', function () {
    describe('#segArray()', function () {
        it('should return [[1, 2], [3, 4]] when run setArray([1, 2, 3, 4])', function () {
            expect(methods.segArray([1, 2, 3, 4])).deep.equal([[1, 2], [3, 4]]);
        });

        it('should return [[1, 2, 3], [4, 5, 6]] when run setArray([1, 2, 3, 4, 5, 6], 3)', function () {
            expect(methods.segArray([1, 2, 3, 4, 5, 6], 3)).deep.equal([[1, 2, 3], [4, 5, 6]]);
        });

        it('should return [[1, 2, 3], [4, 5]] when run setArray([1, 2, 3, 4, 5], 3)', function () {
            expect(methods.segArray([1, 2, 3, 4, 5], 3)).deep.equal([[1, 2, 3], [4, 5]]);
        });
    });
})