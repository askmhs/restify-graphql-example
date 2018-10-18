import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
} from "graphql";

/**
 * User type
 */
export const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        }
    })
});

/**
 * List user type
 */
export const listUserType = new GraphQLList(userType);

/**
 * User input type
 */
export const userInputType = new GraphQLInputObjectType({
    name: "UserInput",
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        }
    })
});