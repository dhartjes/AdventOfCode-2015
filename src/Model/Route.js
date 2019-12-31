export default class Route {
    endpoints;
    distance;
    constructor(distance, endpointA, endpointB) {
        this.endpoints = [endpointA, endpointB];
        this.distance = Number.parseInt(distance);
    }
}