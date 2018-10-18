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
    resolve(root, params) {
        return UserEntity.create(params.data).then(created => {
            return created;
        }).catch(error => {
            throw error;
        });
    }
};