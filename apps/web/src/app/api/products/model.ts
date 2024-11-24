import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
});
export const CreateProductSchema = ProductSchema.omit({ id: true });

export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
