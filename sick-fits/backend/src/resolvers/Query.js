const { forwardTo } = require("prisma-binding");

const Query = {
  item: forwardTo("db"),
  items: forwardTo("db"),
  async items(parent, args, ctx, info) {
    return await ctx.db.query.items();
  }
};

module.exports = Query;
