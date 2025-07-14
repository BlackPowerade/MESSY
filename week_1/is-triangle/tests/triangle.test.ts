import Triangle from '../src/triangle'
import InvalidTriangle from '../src/InvalidTriangle'
import {assert, assertType, describe, test} from 'vitest'


describe('Reject', () => {
    test.concurrent('negative angles', async () => assert.throws(() => new Triangle(-1, 100, 81), InvalidTriangle))
    test.concurrent('insufficient angle sum', async () => assert.throws(() => new Triangle(9, 100, 70), InvalidTriangle))
    test.concurrent('excess angle sum', async () => assert.throws(() => new Triangle(11, 100, 70), InvalidTriangle))
    test.concurrent('nonsense angle params', async () => assert.throws(() => new Triangle(9, 100, undefined), InvalidTriangle))
})


const equalateralTri = new Triangle(60, 60, 60)
describe('equalateral', () => {
    test.concurrent('is equalateral', async () => assert.isTrue(equalateralTri.isEquilateral()))
    test.concurrent('is not isosceles', async () => assert.isFalse(equalateralTri.isIsosceles()))
    test.concurrent('is not scalene', async () => assert.isFalse(equalateralTri.isScalene()))
})

const isoscelesTri = new Triangle(40, 40, 100)
describe('isosceles', () => {
    test.concurrent('is isosceles', async () => assert.isTrue(isoscelesTri.isIsosceles()))
    test.concurrent('is not equalateral', async () => assert.isFalse(isoscelesTri.isEquilateral()))
    test.concurrent('is not scalene', async () => assert.isFalse(isoscelesTri.isScalene()))
})

const scaleneTri = new Triangle(60, 40, 80)
describe('scalene', () => {
    test.concurrent('is scalene', async () => assert.isTrue(scaleneTri.isScalene()))
    test.concurrent('is not isosceles', async () => assert.isFalse(scaleneTri.isIsosceles()))
    test.concurrent('is not equalateral', async () => assert.isFalse(scaleneTri.isEquilateral()))
})

// Obtuse triangle
const obtuseTri = new Triangle(120, 30, 30)
describe('obtuse', () => {
  test.concurrent('is obtuse', async () => assert.isTrue(obtuseTri.isObtuse()))
  test.concurrent('is not acute', async () => assert.isFalse(obtuseTri.isAcute()))
  test.concurrent('is not right', async () => assert.isFalse(obtuseTri.isRight()))
})

// Right triangle
const rightTri = new Triangle(90, 45, 45)
describe('right', () => {
  test.concurrent('is right', async () => assert.isTrue(rightTri.isRight()))
  test.concurrent('is not acute', async () => assert.isFalse(rightTri.isAcute()))
  test.concurrent('is not obtuse', async () => assert.isFalse(rightTri.isObtuse()))
})

const acuteTri = new Triangle(40, 60, 80)
describe('acute', () => {
    test.concurrent('is acute', async () => assert.isTrue(acuteTri.isAcute()))
    test.concurrent('is not right', async () => assert.isFalse(acuteTri.isRight()))
    test.concurrent('is not obtuse', async () => assert.isFalse(acuteTri.isObtuse()))
})
