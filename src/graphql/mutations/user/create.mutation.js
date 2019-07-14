import { GraphQLNonNull } from "graphql";
import UserEntity from "./../../../models/user.model";
import { userType, userInputType } from "./../../types/user.type";

export default {
    type: userType,
    args: {
        data: {
            name: "data",
            type: new GraphQLNonNull(userInputType)
        }
    },
    async resolve(root, params) {
        return await UserEntity.create(params.data);
    }
};