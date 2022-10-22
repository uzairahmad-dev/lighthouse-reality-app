export const resolvers = {
  Query: {
    getAllProperties: () => {
      return [
        {
          for: "sell",
          type: "residential",
          kind: "house",
          images: ["house_pic_1", "house_pic_2"],
          area: "900",
          rooms: "4",
          bathrooms: "2",
          description: "This is a amazing house.",
          city: "new york",
        },
        {
          for: "sell",
          type: "residential",
          kind: "house",
          images: ["house_pic_1", "house_pic_2"],
          area: "900",
          rooms: "4",
          bathrooms: "2",
          description: "This is a amazing house.",
          city: "paris",
        },
      ];
    },
  },
  Mutation: {
    createNewProperty: async () => {
      return {
        for: "sell",
        type: "residential",
        kind: "house",
        images: ["house_pic_1", "house_pic_2"],
        area: "900",
        rooms: "4",
        bathrooms: "2",
        description: "This is a amazing house.",
        city: "new york",
      };
    },
  },
};
