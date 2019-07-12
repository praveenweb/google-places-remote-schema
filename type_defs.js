const gql = require('graphql-tag');

const typeDefs = gql`
    type Places {
        name: String
        lat: String
        long: String
        rating: Float
        address: String
        location: Point
    }

    type Query {
        places(location: String!): [Places]
    }

    scalar Point
`;

module.exports = {
    typeDefs,
};