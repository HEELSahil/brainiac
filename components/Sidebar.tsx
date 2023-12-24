"use client";

import Link from "next/link";
import Image from "next/image";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

import { cn } from "@/lib/utils";

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

export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-emerald-700 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-28 md:h-20 w-[90%] md:w-full mr-4">
            <Image fill alt="Logo" src="/assets/images/logo.png" />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/20 rounded-lg transition")}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};