const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema/Schema");

const app = express();

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

const PORT = 3200;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
