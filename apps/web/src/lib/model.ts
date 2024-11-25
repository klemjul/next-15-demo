import { z } from "zod";

// blog post
const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

// product
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

// payment
export const PaymentSchema = z.object({
  id: z.string(),
  email: z.string(),
  status: z.enum(["pending", "processing", "success", "failed"]),
  amount: z.number(),
});
export const CreatePaymentSchema = PaymentSchema.omit({ id: true });

export type Payment = z.infer<typeof PaymentSchema>;
export type CreatePayment = z.infer<typeof CreatePaymentSchema>;
