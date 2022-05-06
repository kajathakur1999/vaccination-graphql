const queryResolver = require("./query.resolevr");
const mutationResolver = require("./mutation.resolver");

module.exports = {
  ...queryResolver,
  ...mutationResolver
};