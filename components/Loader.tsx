import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-60 h-20 relative animate-pulse">
        <Image
          alt="Logo"
          src="/assets/images/logo.png"
          fill
        />
      </div>
      <p className="text-sm font-normal text-muted-foreground">
        Brainiac is thinking...
      </p>
    </div>
  );
};