

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      required: true,
      type: String,
      default: "",
    },
    price: {
      required: true,
      type: Number,
    },
    stock: {
      type: Number,
      default: 0,
    },
    avaible: {
      type: Boolean,
    },
    favorite: {
      type: Boolean,
    },
    categories: [
      {
        type: Types.ObjectId,
        ref: "Categories",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<IProduct>("Product", productSchema);
