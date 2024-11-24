"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { readPayments } from "../actions/payments/actions";
import { useState, useEffect, useMemo } from "react";
import { Payment } from "../actions/payments/model";
import { PaymentsTable } from "./payment-table/table";

export default function DashboardPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  const loadPayments = async () => {
    const data = await readPayments();
    setPayments(data);
  };

  const paymentSum = useMemo(() => {
    return payments
      .map((p) => p.amount)
      .reduce((accumulator, currentPayment) => {
        return accumulator + currentPayment;
      }, 0);
  }, [payments]);

  useEffect(() => {
    loadPayments();
  }, []);

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="ml-auto flex items-center space-x-4"></div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${paymentSum.toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <PaymentsTable payments={payments} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
