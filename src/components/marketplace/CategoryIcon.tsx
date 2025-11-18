'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CategoryIconProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: 'blue' | 'green' | 'teal' | 'red' | 'yellow';
}

const colorMap = {
  blue: 'bg-[hsl(217,91%,60%)] hover:bg-[hsl(224,76%,40%)]',
  green: 'bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,35%)]',
  teal: 'bg-[hsl(173,80%,40%)] hover:bg-[hsl(173,80%,35%)]',
  red: 'bg-[hsl(0,72%,60%)] hover:bg-[hsl(0,72%,55%)]',
  yellow: 'bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)]'
};

export default function CategoryIcon({ icon: Icon, label, href, color }: CategoryIconProps) {
  return (
    <Link href={href}>
      <div className="group flex flex-col items-center space-y-2 cursor-pointer">
        <div className={`${colorMap[color]} w-[80px] h-[80px] rounded-[12px] flex items-center justify-center text-white transition-all hover:scale-105 shadow`}>
          <Icon size={32} strokeWidth={2} />
        </div>
        <span className="text-[12px] font-medium text-[hsl(222,47%,11%)] group-hover:text-[hsl(217,91%,60%)] transition-colors text-center">
          {label}
        </span>
      </div>
    </Link>
  );
}
