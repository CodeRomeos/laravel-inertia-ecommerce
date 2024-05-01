"use client";

import React from 'react';
import { usePage } from "@inertiajs/react";
import { Icons } from "./icons";
import { cn } from "@/shadcn";
import { Link } from "@inertiajs/react";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

const ListItem = ({item}) => {
  const path = "/";
  const Icon = Icons[item.icon || "arrowRight"];
  const current = route().current();
  const [isActive, isActiveSet] = React.useState(false);

   React.useEffect(() => {
       isActiveSet(
           item.href === route(current, route().params) ||
               route(route().current(), route().params).substring(
                   0,
                   item.href.length
               ) == item.href
       );
   }, [current]);

  return (
      <li>
          <Link href={item.href} className={isActive ? "text-blue-600" : ""}>
              <span
                  className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                  )}
              >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
              </span>
          </Link>
      </li>
  );
}
const SubMenu = ({items}) => {
  if(!items || !Array.isArray(items) || (Array.isArray(items) && items.length === 0)) return null;
  return (
      <ul className="bg-slate-100 dark:bg-black">
          {items.map((item, i) => (
              <ListItem key={`submenu-${i}`} item={item} />
          ))}
      </ul>
  );
}

const ParentContainer = ({ item, children, ...any }) => {
    let Component = Link;
    if (item.items && item.items.length > 0) {
        Component = () => <div {...any}>{children}</div>;
    }

    return <Component {...any}>{children}</Component>;
};

const NavItem = ({item}) => {
    const { url, component } = usePage();
    const [open, openSet] = React.useState(false);
    const path = "/";
    const Icon = Icons[item.icon || "arrowRight"];
    
    React.useEffect(() => {
      openSet(
          item.href === route(route().current(), route().params) ||
              item.items?.some(
                  (item) =>
                      item.href === route(route().current(), route().params)
              ) ||
              item.items?.some(
                  (item) =>
                      route(route().current(), route().params).substring(
                          0,
                          item.href.length
                      ) == item.href
              )
      );
    }, [url]);

    return (
        <div className={`${open ? "bg-slate-200 dark:bg-black" : ""}`}>
            <ParentContainer
                className={"cursor-pointer"}
                item={item}
                href={item.disabled ? "#" : item.href}
                onClick={() => {
                    openSet(!open);
                }}
            >
                <div
                    className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground justify-between",
                        path === item.href ? "bg-accent" : "transparent",
                        item.disabled && "cursor-not-allowed opacity-80"
                    )}
                >
                    <div className="flex">
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                    </div>
                    {item.items && item.items.length > 0 && (
                        <span className="text-xs">
                            {!open && <ChevronRight size={14} />}
                            {open && <ChevronDown size={14} />}
                        </span>
                    )}
                </div>
            </ParentContainer>
            {open && <SubMenu items={item.items} />}
        </div>
    );
}

export function DashboardNav({ items, setOpen }) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => <NavItem item={item} key={index} />)}
    </nav>
  );
}
