import { model, Schema } from "mongoose";

import { propertyImagesLimit } from "../utils/helperFunctions.js";

const PropertySchema = new Schema(
  {
    for: {
      type: String,
      enum: ["sell", "rent"],
      default: "sell",
      required: true,
    },
    type: {
      type: String,
      enum: ["commercial", "residential"],
      default: "residential",
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    images: {
      type: [{ type: String }],
      validate: [
        propertyImagesLimit,
        "From 1 to 5 Property Images will be Accepted.",
      ],
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    rooms: {
      type: String,
      required: true,
    },
    bathrooms: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = model("properties", PropertySchema);
export default Property;