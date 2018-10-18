import { userType } from "./../../types/user.type";
import { GraphQLID, GraphQLNonNull } from "graphql";
import UserEntity from "./../../../models/user.model";

export default {
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return UserEntity.findById(params.id).lean().then(user => {
            return user
        }).catch(error => {
            throw error;
        });
    }
}