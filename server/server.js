import consola from "consola";
import "colors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { PORT, IN_PROD } from "./config/index.js";
import { connectDB } from "./config/db.js";
import * as AppModels from "./models/index.js";

const { success } = consola;

async function startServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: !IN_PROD,
    context: {
      ...AppModels,
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  //* Express API Routes
  app.use(cors());
  await connectDB();

  app.listen(PORT, () =>
    success({
      badge: true,
      message: `Server is Running on Port ${PORT} `.green.underline.bold,
    })
  );
}

startServer();
