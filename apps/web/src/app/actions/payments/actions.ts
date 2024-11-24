"use server";

import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { PaymentSchema } from "./model";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export async function readPayments() {
  const raw = await readFile(
    join(process.cwd(), "data", "payments.json"),
    "utf-8",
  );
  const payments = PaymentSchema.array().parse(JSON.parse(raw));
  return payments;
}

export async function addPayment(formData: FormData) {
  const payments = await readPayments();
  const newPayment = {
    id: randomUUID(),
    ...{
      email: "testuser@email.com",
      status: "success",
      amount: Number(formData.get("price")),
    },
  };
  const safePayment = PaymentSchema.parse(newPayment);

  await writeFile(
    join(process.cwd(), "data", "payments.json"),
    JSON.stringify([...payments, safePayment]),
  );
  redirect("/products");
}
