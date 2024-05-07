"use client";
import React from "react";
import { Button } from "@/shadcn/ui/button";
import { Separator } from "@/shadcn/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/ui/popover";

export function PopOverDropdown({
    title,
    label = "Popover",
    data,
    icon,
    children,
    ...btnProps
}) {
    const notifications = Array.from({ length: 8 })
        .slice(0, 5)
        .map(
            (_, i, a) => `New Payment Received, Transaction ID:${a.length - i}`
        );
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button {...btnProps}>{icon ? icon : label}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-2">
                    {title && (
                        <h4 className="mb-4 text-md font-medium leading-none">
                            {title}
                        </h4>
                    )}
                    {children}
                    {!children &&
                        (notifications || data).map((item) => (
                            <React.Fragment key={item}>
                                <div
                                    key={item}
                                    className="flex items-start gap-x-2.5"
                                >
                                    <div className="h-2 w-2 mt-1.5 bg-blue-600 rounded-full"></div>
                                    <p className="text-sm">{item}</p>
                                </div>
                                <Separator className="my-2" />
                            </React.Fragment>
                        ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
