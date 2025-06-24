"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/content-ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/content-ui/chart"
import { ProductProp } from "@/prop/ProductProp"
import React from "react"

export const description = "A bar chart"

const chartConfig = {
  stock: {
    label: "Stock",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;


export function ChartBar() {
  const [userProducts, setUserProducts] = React.useState<ProductProp[]>([]);

  React.useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (!stored) return;

    const loggedInUser = JSON.parse(stored);
    if (!loggedInUser.email) return;

    const allProducts = loadUserProducts(loggedInUser.email);
    const filteredProducts = allProducts.filter((product: ProductProp) => product.stock >= 50);

    setUserProducts(filteredProducts);
  }, []);

  const loadUserProducts = (userEmail : String) => {
    return JSON.parse(localStorage.getItem(`products-${userEmail}`) || "[]");
  };

  const chartData = userProducts.map((product) => ({
    name: product.name,
    stock: product.stock,
  }));
  return (
    <Card className="ring-1 ring-gray-100">
      <CardHeader>
        <CardTitle>Product Stock Levels</CardTitle>
        <CardDescription>Showing total product stock.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            
            data={chartData}
    
            >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="stock" fill="var(--color-desktop)" radius={8} />

          </BarChart>

        </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
