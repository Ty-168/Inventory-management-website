"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/content-ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/content-ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/content-ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/content-ui/toggle-group"
import { ProductProp } from "@/prop/ProductProp"





const chartConfig = {
  stock: {
    label: "Stock Level",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export function ChartAreaInteractive() {
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


const generateCombinedTimeline = (products: ProductProp[], days: number) => {
  const today = new Date();
  const dailyUsage = 5; // for visual illustrate only

  const timeline = Array.from({ length: days }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const isoDate = date.toISOString();

    const totalStock = products.reduce((sum, product) => {
      const projected = Math.max(product.stock - dailyUsage * i, 0);
      return sum + projected;
    }, 0);

    return {
      date: isoDate,
      stock: totalStock,
    };
  });

  return timeline;
};

const chartData = generateCombinedTimeline(userProducts, 30);

  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("30d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const today = new Date();
    let daysToSubtract = timeRange === "7d" ? 7 : 30;

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 1); // Include today

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + daysToSubtract);

    return date >= startDate && date <= endDate;
  });


  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Stock Level Overview</CardTitle>
        <CardDescription>
          <span>
             Projected inventory based on daily use.
          </span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="stock"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
