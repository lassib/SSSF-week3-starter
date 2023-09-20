// TODO: Add resolvers for cat
// 1. Queries
// 1.1. cats
// 1.2. catById
// 1.3. catsByOwner
// 1.4. catsByArea
// 2. Mutations
// 2.1. createCat
// 2.2. updateCat
// 2.3. deleteCat

import catModel from '../models/catModel';
import {Cat} from '../../interfaces/Cat';

const catResolver = {
  Query: {
    async cats() {
      return await catModel.find();
    },
    async catById(_: any, cat: Cat) {
      return await catModel.findById(cat.id);
    },
    async catsByOwner(_: any, cat: Cat) {
      return await catModel.find({owner: cat.owner});
    },
    async catsByArea(_: any, cat: Cat) {
      return await catModel.find({area: cat.location});
    },
  },
  Mutation: {
    createCat: async (_: any, cat: Cat) => {
      return await catModel.create(cat);
    },
    updateCat: async (_: any, cat: Cat) => {
      return await catModel.findOneAndUpdate(cat.id, cat, {new: true});
    },
    deleteCat: async (_: any, cat: Cat) => {
      return await catModel.findByIdAndRemove(cat.id);
    },
  },
};

export default catResolver;
