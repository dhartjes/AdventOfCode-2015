import sut from './routeParser';
import Route from '../Model/Route';

describe('route Parser takes a string input and converts it into an array of Route Objects', () => {
    const oneRoute = 'London to Dublin = 464';
    const twoRoutes = `London to Dublin = 464
London to Belfast = 518`;
    const threeRoutes = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`;

    it('should create a route object from a string', () => {
        expect(sut(oneRoute)[0]).toBeInstanceOf(Route);
    });

    it('should create an array of route objects from a multi-line string', () => {
        let result = sut(twoRoutes);
        expect(result[1]).toBeInstanceOf(Route);
        expect(result.length).toBe(2);

        result = sut(threeRoutes);
        expect(result[2]).toBeInstanceOf(Route);
        expect(result.length).toBe(3);
    });

    it('should parse route to have two endpoints and a distance', () => {
        let route = sut(oneRoute)[0];
        expect(route.endpoints.length).toBe(2);
        expect(route.endpoints).toContain('Dublin');
        expect(route.endpoints).toContain('London');
        expect(route.distance).toBe(464);

    });
});