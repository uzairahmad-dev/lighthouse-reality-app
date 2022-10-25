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
import AuthMiddleware from "./middlewares/auth.js";
import { schemaDirectives } from "./graphql/directives/index.js";

const { success } = consola;

async function startServer() {
  const app = express();
  app.use(AuthMiddleware);
  // app.use(graphqlUploadExpress());

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives,
    playground: !IN_PROD,
    context: ({ req }) => {
      let { isAuth, user } = req;
      return {
        req,
        isAuth,
        user,
        ...AppModels,
      };
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

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
