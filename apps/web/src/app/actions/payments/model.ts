import { z } from "zod";

export const PaymentSchema = z.object({
  id: z.string(),
  email: z.string(),
  status: z.enum(["pending", "processing", "success", "failed"]),
  amount: z.number(),
});
export const CreatePaymentSchema = PaymentSchema.omit({ id: true });

export type Payment = z.infer<typeof PaymentSchema>;
export type CreatePayment = z.infer<typeof CreatePaymentSchema>;
