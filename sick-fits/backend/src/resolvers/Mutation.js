const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if logged in

    return await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
  }
};

module.exports = Mutations;
