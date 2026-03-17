"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { BQCard } from "@/components/ui/bqcard";

/**
 * BQSimpleSelect — sélecteur custom avec dropdown BQCard (portal).
 *
 * Props:
 *  - items       : { value: string, label: string }[]
 *  - placeholder : string
 *  - value       : string
 *  - onChange    : (value: string) => void
 *  - className   : string
 *  - disabled    : boolean
 */
export const BQSimpleSelect = ({
  items = [],
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [internalValue, setInternalValue] = useState(value ?? "");
  const triggerRef = useRef(null);

  const currentValue = value !== undefined ? value : internalValue;
  const selected = items.find((item) => item.value === currentValue);

  useEffect(() => {
    if (!open) return;

    const updatePosition = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed",
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target) &&
        !document.getElementById("bq-simple-select-portal")?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (itemValue) => {
    setInternalValue(itemValue);
    onChange?.(itemValue);
    setOpen(false);
  };

  return (
    <div ref={triggerRef} className={cn("relative min-w-0", className)}>
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "w-full flex items-center justify-between bg-(--color-surface-neutral-secondary) border border-(--color-border-neutral-secondary) rounded-bq-sm pt-(--space-150) pb-(--p-xm) pl-(--space-500) pr-(--space-500) t-body-2 outline-none cursor-pointer",
          selected
            ? "text-(--color-text-neutral-primary)"
            : "text-(--color-text-disabled)",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <img
          src="/icons/arrow_down.svg"
          aria-hidden="true"
          className={cn(
            "size-3 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown via portal */}
      {open &&
        createPortal(
          <div id="bq-simple-select-portal" style={dropdownStyle}>
            <BQCard className="p-1 shadow-lg">
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li key={item.value}>
                    <button
                      type="button"
                      onClick={() => handleSelect(item.value)}
                      className={cn(
                        "w-full text-left px-(--space-500) py-(--space-200) t-body-2 rounded-bq-sm cursor-pointer hover:bg-(--color-surface-neutral-secondary) transition-colors text-(--color-text-neutral-primary)",
                        item.value === value && "font-medium"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </BQCard>
          </div>,
          document.body
        )}
    </div>
  );
};
