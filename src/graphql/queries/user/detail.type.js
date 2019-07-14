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
    async resolve(root, params) {
        return await UserEntity.findById(params.id).lean();
    }
}