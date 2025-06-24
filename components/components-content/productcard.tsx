"use client";
import { ProductProp } from "@/prop/ProductProp";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/content-ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/content-ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/content-ui/dialog"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/content-ui/drawer"

import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/content-ui/label";
import { Input } from "../ui/content-ui/input";


export const ProductList = () => {
const [userProducts, setUserProducts] = React.useState<ProductProp[]>([]);

React.useEffect(() => {
  const stored = localStorage.getItem("loggedInUser");
  if (!stored) return;

  const loggedInUser = JSON.parse(stored);
  if (!loggedInUser.email) return;

  const storedProducts = loadUserProducts(loggedInUser.email);
  setUserProducts(storedProducts);
}, []);



const loadUserProducts = (userEmail : String) => {
  return JSON.parse(localStorage.getItem(`products-${userEmail}`) || "[]");
};

  return (
    <div className="flex flex-col gap-5 p-5 h-fit overflow-auto mx-6 rounded-lg border shadow-md bg-white">
      <h1 className="font-bold text-2xl sm:text-3xl text-left">Product</h1>
      <div className="border-b-4 border-black" />

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-4 max-h-[450px] overflow-y-auto">
        {userProducts.length > 0 ? (
          userProducts.map((product) => (
            <div key={product.id} className="flex flex-row gap-3 border rounded-lg shadow-md p-3">
              <Image
                  src={product.image}
                  alt="a product"
                  width={200} 
                  height={100}
                  className="w-full h-auto max-w-[80px] sm:max-w-[100px] rounded-lg"
              />
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <h2 className="text-base sm:text-lg font-bold">{product.name}</h2>
                <p className="text-sm sm:text-base">Price: {product.price}៛</p>
                <div className="flex flex-col gap-2 justify-between items-start text-xs sm:text-sm sm:flex-row font-light w-full">
                  <p>Category: {product.category}</p>
                  <p>In Stock: {product.stock} units</p>
                </div>
              </div>
            </div>
          ))
        ):(
            <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export const ProductList2 = ({ products, onRefresh }: { products: ProductProp[]; onRefresh: () => void }) => {


// const userProducts = loadUserProducts(loggedInUser.email);
  const [selectedProductId, setSelectedProductId] = React.useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[450px] overflow-y-auto p-4">
      
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="relative flex flex-col gap-3 justify-center items-center border rounded-lg shadow-md p-4 bg-white">
            {/* Responsive Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={100}
              className="pt-8 w-full h-auto max-w-[120px] sm:max-w-[200px] rounded-lg object-contain"
            /> 
            <ManageProduct 
              key={product.id} 
              className="absolute top-2 right-0 px-4" 
              product={product} 
              onRefresh={onRefresh}
              onClick={() => setSelectedProductId(product.id)}
            />
            
            {/* Product Info */}
            <div className="flex flex-col items-center gap-2 w-full px-6">
              <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-black">{product.name}</h2>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              
              {/* Price Formatting */}
              <p className="text-lg font-bold text-green-600">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "KHR",
                }).format(product.price)}
              </p>

              {/* Stock Display with Low Stock Warning */}
              <p className={`text-sm font-light text-center ${product.stock < 10 ? "text-red-500" : "text-gray-500"}`}>
                In Stock: {product.stock} units
                {product.stock < 10 && <br />}
                {product.stock < 10 && "Low Stock!"}
              </p>

            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export const ManageProduct = ({ className, product, onRefresh, onClick }: { 
  className: string; 
  product: ProductProp; 
  onRefresh: () => void;
  onClick?: () => void; 
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  return (
    <div className={className} onClick={onClick}> {/* ✅ Now it can handle clicks */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Manage</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsEditing(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-700" onClick={() => setIsDeleting(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isEditing && <EditProduct product={product} setIsEditing={setIsEditing} onRefresh={onRefresh}/>}
      {isDeleting && <DeleteProduct product={product} setIsDeleting={setIsDeleting} onRefresh={onRefresh}/>}
    </div>
  );
};

export const EditProduct = ({ product, setIsEditing, onRefresh }: { 
  product: ProductProp; 
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
}) => {

  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={true} onOpenChange={() => setIsEditing(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit product</DialogTitle>
            <DialogDescription>
              Update your product details below. Click Save to apply changes.
            </DialogDescription>
          </DialogHeader>
          <EditForm product={product} setOpen={setIsEditing} onRefresh={onRefresh}/>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={true} onOpenChange={() => setIsEditing(false)}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit product</DrawerTitle>
          <DrawerDescription>
            Update your product details below. Click Save to apply changes.
          </DrawerDescription>
        </DrawerHeader>
        <EditForm product={product} setOpen={setIsEditing} onRefresh={onRefresh}/>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function EditForm({
  product,
  setOpen,
  onRefresh,
}: {
  product: ProductProp;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
}) {
  const [editingProduct, setEditingProduct] = React.useState<ProductProp>(product);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // ✅ Prevent page reload

      const userEmail = loggedInUser.email;
      let storedProducts = JSON.parse(localStorage.getItem(`products-${userEmail}`) || "[]");

      storedProducts = storedProducts.map((p : ProductProp) =>
        p.id === editingProduct.id ? editingProduct : p
      );

      localStorage.setItem(`products-${userEmail}`, JSON.stringify(storedProducts));
      onRefresh();
      setOpen(false); // ✅ Exit edit mode
    };


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingProduct) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEditingProduct({ ...editingProduct, image: reader.result as string }); // ✅ Updates image preview
    };
  };

  return(
    <form className={cn("grid items-start gap-6 px-5")} onSubmit={handleUpdate}>
          <div className="grid gap-3">
            <Label htmlFor="id">ID</Label>
            <Input
              type="text"
              value={editingProduct.id}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, id: e.target.value })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="text"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, category: e.target.value })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="stock">Stock</Label>
            <Input
              type="text"
              value={editingProduct.stock}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="image">Product Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" onChange={handleFileUpload}/>
          </div>
          <Button type="submit">Update</Button>
    </form>
  )
}

export const DeleteProduct = ({ product, setIsDeleting, onRefresh}: { 
  product: ProductProp; 
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
}) => {

  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={true} onOpenChange={() => setIsDeleting(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DeleteForm product={product} setOpen={setIsDeleting} onRefresh={onRefresh} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={true} onOpenChange={() => setIsDeleting(false)}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Delete Product</DrawerTitle>
          <DrawerDescription>
            Are you sure you want to delete this product? This action cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <DeleteForm product={product} setOpen={setIsDeleting} onRefresh={onRefresh}/>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function DeleteForm({
  product,
  setOpen,
  onRefresh
}: {
  product: ProductProp;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
}) {

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userEmail = loggedInUser.email;
    const storedProducts = JSON.parse(localStorage.getItem(`products-${userEmail}`) || "[]");

    const updatedProducts = storedProducts.filter((p: ProductProp) => p.id !== product.id);

    localStorage.setItem(`products-${userEmail}`, JSON.stringify(updatedProducts));

    onRefresh();
    setOpen(false); // ✅ Close the drawer/dialog after deleting
  };

  return(
    <form className={cn("grid items-start gap-6 px-5")} onSubmit={handleDelete}>
        <div className="flex flex-row gap-5 justify-end">
          <Button type="submit" variant="destructive">Delete</Button>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
        </div>
    </form>
  )
}