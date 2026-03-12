import { cn } from "@/lib/utils";

/** heading */
export const H1 = ({ children, className, ...props }) => (
  <h1 {...props} className={cn("t-h1", className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className, ...props }) => (
  <h2 {...props} className={cn("t-h2", className)}>
    {children}
  </h2>
);

export const H3 = ({ children, className, ...props }) => (
  <h3 {...props} className={cn("t-h3", className)}>
    {children}
  </h3>
);

export const H4Regular = ({ children, className, ...props }) => (
  <h4 {...props} className={cn("t-h4 font-normal", className)}>
    {children}
  </h4>
);

export const H4Bold = ({ children, className, ...props }) => (
  <h4 {...props} className={cn("t-h4 font-bold", className)}>
    {children}
  </h4>
);

export const H5 = ({ children, className, ...props }) => (
  <h5 {...props} className={cn("t-h5 font-normal", className)}>
    {children}
  </h5>
);

/** body */

export const TextBody1 = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-1", className)}>
    {children}
  </p>
);

export const TextBody2 = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-2", className)}>
    {children}
  </p>
);

export const TextBody2Bold = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-2 font-bold", className)}>
    {children}
  </p>
);

export const TextBody3 = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-3", className)}>
    {children}
  </p>
);

export const TextBody3Bold = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-3 font-bold", className)}>
    {children}
  </p>
);

export const TextBody3Italic = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-3 italic", className)}>
    {children}
  </p>
);

export const TextBody4 = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-4", className)}>
    {children}
  </p>
);

export const TextBody4Bold = ({ children, className, ...props }) => (
  <p {...props} className={cn("t-body-4 font-bold", className)}>
    {children}
  </p>
);
