import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getAllProperties: [Property!]!
  }

  type Mutation {
    createNewProperty(newProperty: NewProperty): Property!
  }

  input NewProperty {
    for: String!
    type: String!
    kind: String!
    images: [String!]!
    area: String!
    rooms: String!
    bathrooms: String!
    description: String!
    city: String!
  }

  type Property {
    for: String!
    type: String!
    kind: String!
    images: [String!]!
    area: String!
    rooms: String!
    bathrooms: String!
    description: String!
    city: String!
    createdAt: String
    updatedAt: String
  }
`;
