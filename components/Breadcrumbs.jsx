"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumbs = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  if (pathNames.length === 0) {
    return;
  }

  return (
    <div>
      <ul className={containerClasses}>
        {/* Посилання на головну сторінку */}
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>

        {/* Відображення роздільника, якщо шляхи існують */}
        {pathNames.length > 0 && separator}

        {/* Мапінг по елементах шляху для створення breadcrumbs */}
        {pathNames.map((link, index) => {
          if (link === "category") {
            return;
          }
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = paths === href && activeClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() +
              link.slice(1, link.length).replace(/%20/g, "-")
            : link;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>

              {/* Відображення роздільника, якщо це не останній елемент шляху */}
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
