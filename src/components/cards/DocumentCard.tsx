import Image from "next/image";

type DocumentCardProps = {
  title: string;
  imageSrc: string;
  onDownload?: () => void;
};

export function DocumentCard({ title, imageSrc, onDownload }: DocumentCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-[16px] bg-white p-6 shadow-[0_1px_2px_rgba(87,92,86,0.16)] transition hover:shadow-[0_24px_24px_-12px_rgba(54,74,54,0.06)] ring-1 ring-[#12693f]/[0.08]">
      <div className="relative aspect-[222/122] w-full overflow-hidden rounded-md bg-gray-50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="min-h-[48px] text-center font-display text-[20px] font-bold leading-[24px] tracking-[-0.004em] text-[#1d1f1e]">
        {title}
      </h3>
      <button
        type="button"
        onClick={onDownload}
        className="mt-auto flex h-[48px] w-full items-center justify-center rounded-full bg-[#068cff] text-[18px] font-medium text-white transition hover:bg-[#068cff]/90"
      >
        Download
      </button>
    </div>
  );
}
