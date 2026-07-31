import { type InferSchemaType, model, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name must be at most 50 characters"],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name must be at most 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      maxlength: [254, "Email must be at most 254 characters"],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "Please enter a valid email address",
      },
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },

    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "Role must be either user or admin",
      },
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = model("User", userSchema);
