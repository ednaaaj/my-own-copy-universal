"use client";

type FilterPillsProps = {
  items: string[];
  activeItem: string;
  onChange: (item: string) => void;
};

export function FilterPills({ items, activeItem, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((item) => {
        const isActive = activeItem === item;
        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`h-[48px] rounded-full border px-6 text-[18px] font-medium transition-all ${
              isActive
                ? "border-[#068cff] bg-[#068cff] text-white"
                : "border-[#575c56]/60 bg-transparent text-[#505050] hover:border-[#575c56]"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
