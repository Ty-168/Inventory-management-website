"use client";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { ProductProp } from "@/prop/ProductProp";
import { Badge } from "@/components/ui/content-ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/content-ui/card"
import { IconExclamationCircleFilled, IconCircleCheckFilled} from '@tabler/icons-react';
import React from "react";


export function SectionCards() {

  const [userProducts, setUserProducts] = React.useState<ProductProp[]>([]);

  React.useEffect(() => {
    const storedProducts = loadUserProducts(loggedInUser.email);
    setUserProducts(storedProducts);
  }, []);

  const loggedInUser = typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("loggedInUser") || "{}") 
    : {};

  const loadUserProducts = (userEmail : String) => {
    return JSON.parse(localStorage.getItem(`products-${userEmail}`) || "[]");
  };


  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <TotalProduct userProducts={userProducts}/>
      <ItemsinStock userProducts={userProducts}/>
      <LowStock userProducts={userProducts}/>
    </div>
  )
}

export const TotalProduct = ({ userProducts }: { userProducts: ProductProp[] }) =>{
const previousTotal = 10; // Replace with actual past value
const currentTotal = userProducts.length;
const percentageChange = ((currentTotal - previousTotal) / previousTotal) * 100;
const isGrowing = currentTotal > previousTotal;

  return(
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Product</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            <h2 className="font-bold text-xl">
              {userProducts.length}
            </h2>
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <>{isGrowing ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}</>
              {percentageChange.toFixed(1) + "%"} 
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Product Growth This Month <>{isGrowing ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}</>
          </div>
          <div className="text-muted-foreground">
            Total Products Available
          </div>
        </CardFooter>
      </Card>
  );
};

export const ItemsinStock = ({ userProducts }: { userProducts: ProductProp[] }) => {
const totalStock = userProducts.reduce((sum, product) => sum + product.stock, 0);

  return(
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>Total Items</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {totalStock}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium items-center">
          Current Inventory Status <IconCircleCheckFilled size={15} color="green"/>
        </div>
        <div className="text-muted-foreground">
          Total Available Stock
        </div>
      </CardFooter>
    </Card>
  );
};

export const LowStock = ({ userProducts }: { userProducts: ProductProp[] }) => {
const lowStockItems = userProducts.filter(product => product.stock < 10).length;
const isLow = lowStockItems <= 0  ;
  return(
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Low Stock Items</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {lowStockItems}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <>{isLow ? <IconCircleCheckFilled size={25} color="green"/> : <IconExclamationCircleFilled size={25} color="red"/>}</>
              
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
        <>{isLow ? (
          <>
            <div className="line-clamp-1 flex gap-2 font-medium">
              Stock Levels Stable
            </div>
            <div className="text-muted-foreground">
              Inventory Holding Steady
            </div>
          </>
        ) : (
          <>
            <div className="line-clamp-1 flex gap-2 font-medium">
              Restock Needed Soon!
            </div>
            <div className="text-muted-foreground">
              Inventory Shrinking Faster Than Expected
            </div>
          </>
        )}</>
        </CardFooter>
      </Card>
  );
};