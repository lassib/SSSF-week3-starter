/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Add resolvers for user
// 1. Queries
// 1.1. users
// 1.2. userById
// 2. Mutations
// 2.1. createUser
// 2.2. updateUser

import userModel from '../models/userModel';
import {User} from '../../interfaces/User';

// 2.3. deleteUser
const userResolver = {
  Query: {
    async users() {
      return await userModel.find();
    },
    async userById(_: any, user: User['id']) {
      return await userModel.findById(user.id);
    },
  },
  Mutation: {
    createUser: async (_: any, user: User) => {
      return await userModel.create(user);
    },
    updateUser: async (_: any, user: User) => {
      return await userModel.findByIdAndUpdate(user.id, user, {new: true});
    },
    deleteUser: async (_: any, user: User['id']) => {
      return await userModel.findByIdAndRemove(user.id);
    },
  },
};

export default userResolver;
