// src/components/Navbar.tsx

"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="w-full border-b p-4 flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          {/* === HOME === */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="font-bold">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* === LOCATIONS === */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">
              Locations
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Goceries Shops" href="/Products/Goceries">
                  Our Goceries Shops.
                </ListItem>
                <ListItem title="Meat Shops" href="/Products/Meat">
                  Our Meat Shops.
                </ListItem>
                <ListItem title="Vegitable Shops" href="/Products/Vegis">
                  Our Vegitable Shops.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* === ABOUT === */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Branches" href="/About/Branches">
                  Our Branches in Sri Lanka.
                </ListItem>
                <ListItem title="Careers" href="/About/Careers">
                  Check your jobs opportunity.
                </ListItem>
                <ListItem title="Socials" href="/About/Socials">
                  Our Socials Page.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
