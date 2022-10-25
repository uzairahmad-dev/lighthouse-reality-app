import { gql } from "apollo-server-express";

export const typeDefs = gql`
  directive @isAuth on FIELD_DEFINITION
  type Query {
    searchProperties(searchPropertyInput: SearchPropertyInput): [Property]!
    searchRealtors(city: String!, name: String): [Realtor]!
    loginRealtor(email: String!, password: String!): AuthRes!
    authRealtorProfile: Realtor! @isAuth
  }

  type Mutation {
    createNewProperty(newProperty: PropertyInput!): Property! @isAuth
    registerRealtor(newRealtor: RealtorInput!): AuthRes!
  }

  ##//? PROPERTY RELATED TYPES & INPUTS
  input SearchPropertyInput {
    kind: String
    city: String
    for: String
  }

  input PropertyInput {
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
    id: ID!
    for: String!
    type: String!
    kind: String!
    images: [String!]!
    area: String!
    rooms: String!
    bathrooms: String!
    description: String!
    city: String!
    realtor: Realtor!
    createdAt: String
    updatedAt: String
  }

  ##//? REALTOR RELATED TYPES & INPUTS
  input RealtorInput {
    userName: String!
    fullName: String!
    email: String!
    avatarImage: String
    password: String!
    experience: String!
    bio: String!
    city: String!
    sold: String!
    specialization: String
  }

  type AuthRes {
    realtor: Realtor!
    token: String!
  }

  type Realtor {
    id: ID!
    userName: String!
    fullName: String!
    email: String!
    avatarImage: String
    experience: String!
    bio: String!
    city: String!
    sold: String!
    specialization: String
    createdAt: String
    updatedAt: String
  }
`;
