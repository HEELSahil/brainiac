import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-28 h-28 relative animate-pulse">
        <Image
          alt="Logo"
          src="/assets/images/secondary-logo.png"
          fill
        />
      </div>
    </div>
  );
};