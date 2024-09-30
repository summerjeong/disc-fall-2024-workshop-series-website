"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/course")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/course${item.href}`,
          level: 0,
          isSheet,
        };
        if (item.heading === "Course Content") {
          return <SubLink key={index} {...modifiedItems} />;
        }
      })}
    </div>
  );
}
