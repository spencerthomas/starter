"use client";
// Adapted from shadcn/ui Tabs (MIT), using Radix behavior and local CSS.
import * as React from "react";
import * as Primitive from "@radix-ui/react-tabs";
import clsx from "clsx";
export function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root className={clsx("tabs", className)} {...props} />;
}
export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.List>) {
  return <Primitive.List className={clsx("tabs-list", className)} {...props} />;
}
export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Trigger className={clsx("tabs-trigger", className)} {...props} />
  );
}
export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content className={clsx("tabs-content", className)} {...props} />
  );
}
