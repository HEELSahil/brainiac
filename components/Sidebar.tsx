"use client";

import Link from "next/link";
import Image from "next/image";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/FreeCounter";

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-400"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-cyan-400",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-400",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-500",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-400",
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-indigo-600",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

interface SidebarProps {
  apiLimitCount: number;
}

export default function Sidebar({
  apiLimitCount = 0 
}: SidebarProps) {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative h-24 md:h-16 w-[90%] md:w-full mr-4">
                        <Image fill alt="Logo" src="/assets/images/logo.png" />
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href} 
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/20" : "text-zinc-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter apiLimitCount={apiLimitCount} />
        </div>
    );
};