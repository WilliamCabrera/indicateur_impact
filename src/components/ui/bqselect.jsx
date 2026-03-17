"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/**
 * BQSelect — sélecteur générique.
 *
 * Props:
 *  - items       : { value: string, label: string }[]  — liste des options
 *  - placeholder : string                              — texte affiché si aucune valeur
 *  - className   : string                              — classes supplémentaires sur le trigger
 *  - ...props    : tout autre prop passé à <Select> (value, onValueChange, disabled, etc.)
 */
export const BQSelect = ({
  items = [],
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className={cn("min-w-0", className)}>
      <Select {...props}>
        <SelectTrigger className="w-full!">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            {items.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
