const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
require("./db");

const rootValue = require("./graphql/resolvers/root.resolver");
const schema = require("./graphql/schema/schema");

app.use("/gq", graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql : true
}) )

app.listen(9090, () => console.log("GraphQL Server started at PORT : 9090"))
