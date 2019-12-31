import Route from '../Model/Route';

export default function (input) {
    let routes = [];
    input.trim().split('\n').forEach(element => {
        let endpoints = element.replace(' to', '').split(' ');

        routes.push(new Route(element.match(/\d+/)[0], endpoints[0], endpoints[1]));
    });
    return routes;
}