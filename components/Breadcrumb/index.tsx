import React, { JSX } from "react";

// Breadcrumb Item Context
const BreadcrumbItemContext = React.createContext({ isCurrent: false, isLast: false });

// Breadcrumb Context
const BreadcrumbContext = React.createContext({ separator: null as React.ReactNode });


// Styles
const styles: Record<string, React.CSSProperties> = {
  list: { alignItems: "center", display: "flex", gap: "inherit", listStyle: "none", wordWrap: "break-word" },
  separator: { alignItems: "center", display: "inline-flex" },
  item: { alignItems: "center", display: "inline-flex", gap: "inherit" },
};

// Breadcrumb Separator
type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"span">;
function BreadcrumbSeparator(props: BreadcrumbSeparatorProps): JSX.Element | null {
  const { children, style, role = "presentation", ...restProps } = props;
  const { separator } = React.useContext(BreadcrumbContext);
  const { isLast } = React.useContext(BreadcrumbItemContext);

  if (!separator || isLast) return null;

  return (
    <span role={role} style={{ ...styles.separator, ...style }} {...restProps}>
      {children ?? separator}
    </span>
  );
}

// Breadcrumb Link
type BreadcrumbLinkProps<T extends React.ElementType = "a"> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  href?: string;
};
function BreadcrumbLink<T extends React.ElementType = "a">(props: BreadcrumbLinkProps<T>): JSX.Element {
  const { as = "a", href, ...restProps } = props;
  const { isCurrent } = React.useContext(BreadcrumbItemContext);

  const Component = isCurrent ? "span" : as;
  if (isCurrent) delete restProps.href;

  return <Component {...restProps} aria-current={isCurrent ? "page" : undefined} />;
}

// Breadcrumb Item
type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li"> & { isCurrentPage?: boolean };
function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element {
  const { isCurrentPage, style, children, ...restProps } = props;

  return (
    <li style={{ ...styles.item, ...style }} {...restProps}>
      {children}
      <BreadcrumbSeparator />
    </li>
  );
}

// Breadcrumb
type BreadcrumbProps = React.ComponentPropsWithoutRef<"ol"> & { separator?: React.ReactNode };
function Breadcrumb(props: BreadcrumbProps): JSX.Element {
  const { separator, children, ...restProps } = props;
  const count = React.Children.count(children);

  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      <nav aria-label="Breadcrumb" {...restProps}>
        <ol style={styles.list}>
          {React.Children.map(children, (child, index) => {
            // Ensure child is a valid React element and type it correctly
            if (React.isValidElement(child)) {
              const { isCurrentPage } = child.props as BreadcrumbItemProps;
              const isCurrent = isCurrentPage ?? false;
              const isLast = count === index + 1;

              return (
                <BreadcrumbItemContext.Provider value={{ isCurrent, isLast }} key={index}>
                  {child}
                </BreadcrumbItemContext.Provider>
              );
            }
            return null; // If child is not a valid React element, return null
          })}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}

export type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbLinkProps, BreadcrumbSeparatorProps };
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
