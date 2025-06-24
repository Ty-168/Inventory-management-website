"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface SelectOption {
  key: string;
  label: string;
}

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: SelectOption[];
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, options, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const radius = 100; // Radius for hover effect
    const [visible, setVisible] = React.useState(false);
    const [selected, setSelected] = React.useState<string | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Handle mouse move
    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
      const { left, top } = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };

    const toggleVisible = () => setVisible((prev) => !prev);
    
    const handleSelect = (option: string) => {
      setSelected(option);
      setVisible(false);
    };

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          setVisible(true);
          if (onMouseEnter) onMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          setVisible(false);
          if (onMouseLeave) onMouseLeave(e);
        }}
        className="relative group/select rounded-lg p-[2px] transition duration-300"
      >
        <div
          ref={ref}
          onClick={toggleVisible}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className
          )}
          {...props}
        >
          <span >{selected || "Select an option"}</span>
        </div>
        
        {visible && (
          <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto rounded-md shadow-lg bg-white dark:bg-zinc-800">
            {options.map((option) => (
              <div
                key={option.key}
                onClick={() => handleSelect(option.label)}
                className="cursor-pointer px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  }
);

Select.displayName = "Select";

export { Select };