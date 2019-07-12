const gql = require('graphql-tag');

const typeDefs = gql`
    type Places {
        name: String
        lat: String
        long: String
        rating: Float
        address: String
        location: String
    }

    type Query {
        places(location: geography!): [Places]
    }

    scalar geography
`;

module.exports = {
    typeDefs,
};