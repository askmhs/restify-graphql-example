import restify from "restify";
import mongoose from "mongoose";
import schema from "./src/graphql";
import { graphqlRestify, graphiqlRestify } from "apollo-server-restify";

/**
 * Creating server
 */
const server = restify.createServer({
    name: "Restify GraphQL Server"
});

/**
 * Load .env file
 */
require("dotenv").config();

/**
 * Attempt to connect to MongoDB server
 */
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database connection successfully established!");
}).catch((err) => {
    throw err;
});

/**
 * GraphQL options
 */
const graphQLOptions = {
    schema: schema
};

/**
 * Configure restify parser plugins
 */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.get('/graphql', graphqlRestify(graphQLOptions));
server.post('/graphql', graphqlRestify(graphQLOptions));
server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

/**
 * Starting server
 */
server.listen(3000, () => {
    console.log(`%s listening on %s`, server.name, server.url);
});