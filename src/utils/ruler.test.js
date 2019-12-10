import { getSmallestPerimeter } from './ruler';

describe('Measures various dimensions of a box or list of boxes', () => {
    it('should get the smallest perimeter of a box', () => {
        expect(getSmallestPerimeter({ h: 1, w: 1, d: 1 })).toBe(4);
        expect(getSmallestPerimeter({ h: 1, w: 1, d: 2 })).toBe(4);
        expect(getSmallestPerimeter({ h: 1, w: 2, d: 2 })).toBe(6);
        expect(getSmallestPerimeter({ h: 1, w: 2, d: 3 })).toBe(6);
        expect(getSmallestPerimeter({ h: 7, w: 2, d: 5 })).toBe(14);
    });

    it('should get the smallest perimeter of a box', () => {
        let input = { h: 1, w: 1, d: 1 };
        expect(getSmallestPerimeter(input)).toBe(4);
    });
});