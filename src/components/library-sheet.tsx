import { LibraryBig } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { useLibrary } from "@/hooks/use-library";
import { LibraryCart } from "./library-cart";

export function LibrarySheet() {
  const { items } = useLibrary();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 bg-[#a30036] text-white rounded relative">
          <LibraryBig className="w-5 h-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-96 bg-[#1a1a1d] shadow-2xl border-l border-[#2a2a2d] p-4"
      >
        <SheetHeader>
          <SheetTitle className="text-gray-100">Sua livraria</SheetTitle>
        </SheetHeader>
        <LibraryCart />
      </SheetContent>
    </Sheet>
  );
}
