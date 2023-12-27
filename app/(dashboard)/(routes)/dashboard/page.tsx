"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-600",
    bgColor: "bg-violet-600/10",
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10",
    href: '/code',
  },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore Brainiac's AI Brilliance
        </h2>
        <p className="text-muted-foreground font-normal text-sm md:text-lg text-center">
          Engage with the Next-gen Neural Nexus - Experience Unmatched AI Brilliance
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}