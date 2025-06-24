"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/content-ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/content-ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/content-ui/drawer"


import { Input } from "@/components/ui/content-ui/input"
import { Label } from "@/components/ui/content-ui/label"

import { ProductProp } from "@/prop/ProductProp";
import { IconCirclePlus } from '@tabler/icons-react';
import { ProductList2 } from "./productcard"

export function ProductDisplay(){

  const [searchTerm, setSearchTerm] = React.useState("");
  const [userProducts, setUserProducts] = React.useState<ProductProp[]>([]);

  const refreshProducts = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    const storedProducts = JSON.parse(localStorage.getItem(`products-${loggedInUser.email}`) || "[]");
    setUserProducts(storedProducts);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      refreshProducts();
    }
  }, []);

  const filteredProducts = userProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
        <div className="w-full flex flex-col gap-10 py-5">
            <div className="w-full flex flex-row justify-between gap-5">
                <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="max-w-sm"
                />
                <CreateProduct onRefresh={refreshProducts}/>
            </div>
            <div>
                <ProductList2 products={filteredProducts} onRefresh={refreshProducts}/>
            </div>
        </div>
    )
}



export const CreateProduct = ({onRefresh}:{
  onRefresh: () => void;
}
) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline"><IconCirclePlus stroke={2} />Create Product</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
            <DialogDescription>
              Please provide information of your product. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <CreateForm onRefresh={onRefresh} setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
          <Button variant="outline"><IconCirclePlus stroke={2} />Create Product</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Create Product</DrawerTitle>
          <DrawerDescription>
            Please provide information of your product. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <CreateForm className="px-4" onRefresh={onRefresh} setOpen={setOpen}/>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function CreateForm({
  className,
  setOpen,
  onRefresh,
}: {
  className?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
}) {
  const [product, setProduct] = React.useState({ 
    id: "",
    name: "",
    category: "",
    price: 0,
    stock: 0,
    image: "",
  });
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    });
  };


  const saveProductForUser = (userEmail : string) => {
    const storedProducts = JSON.parse(localStorage.getItem(`products-${userEmail}`) || "[]");
    storedProducts.push(product);
    localStorage.setItem(`products-${userEmail}`, JSON.stringify(storedProducts));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setProduct({ ...product, image: result }); //  only strings are assigned
      }
    };
  };
  const handleSubmit = (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    
    if (!product.name || product.stock <= 0 || !product.category || product.price <= 0 || !product.id || !product.image) {
      alert("Please enter a valid product name and stock amount!");
      return;
    }

    saveProductForUser(loggedInUser.email); // Saves user inputted product
    setProduct({    
      id: "",
      name: "",
      category: "",
      price: 0,
      stock: 0,
      image: ""
    }); //  Clear form after adding

    onRefresh();
    setOpen(false);
  };

  return (
    <form className={cn("grid items-start gap-6", className)} onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <Label htmlFor="id">ID</Label>
        <Input id="id" name="id" placeholder="C1001" value={product.id} onChange={handleChange}/>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" name="name" placeholder="Soy Sauce" value={product.name} onChange={handleChange}/>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="category">Category</Label>
        <Input id="category" name="category" placeholder="Condiment" value={product.category} onChange={handleChange}/>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="price">Price</Label>
        <Input id="price" name="price" placeholder="11000" value={product.price} onChange={handleChange}/>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="stock">Stock</Label>
        <Input id="stock" name="stock" placeholder="100" value={product.stock} onChange={handleChange}/>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="image">Product Image</Label>
        <Input id="image" name="image" type="file" accept="image/*" onChange={handleFileUpload}/>
      </div>
      
      <Button type="submit">Create</Button>
    </form>
  )
}


