import { GrapqhQLServer } from 'grapqhql-yoga';
import fetch from 'node-fetch';
import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
    type Query {
        hello{name:String}: String!
    }

    type Film {
        title: String, 
        episode_id: Int, 
        opening_crawl: String, 
        director: String 
        producer: String, 
        release_date: String
    }

    type Person {
    name: String,
	height: String,
	mass: String,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: String,
	"films": [Film]
}
`;

const resolvers = {
    Query: {
        hello: (_, { name } ) => `Hello ${name || "World"}`
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server on port 4000"));