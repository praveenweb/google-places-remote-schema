const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const fetch = require('node-fetch');

const resolvers = {
    Query: {
        places: (root, args, context, info) => {
            const location = args.location;
            const coordinates = location.coordinates;
            const lat = coordinates[0];
            const long = coordinates[1];

            const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=1500&type=restaurant&key=' + GOOGLE_MAPS_API_KEY;
            return fetch(url)
                .then(res => res.json())
                .then(body => {
                    const results = body.results;
                    const finalResults = results.map((item) => {
                        const finalObj = {name: item.name, lat: lat, long: long, rating: item.rating, address: item.vicinity, location: location};
                        return finalObj;
                    });
                    return finalResults;
                });
        },
    },
};

module.exports = {
    resolvers,
};