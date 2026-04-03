'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function AnchorLink({ href, className, onClick, ...props }: AnchorLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [pathPart, hashPart] = href.split('#');
  const isAnchor = href.includes('#');
  const targetId = hashPart?.trim();
  const normalizedPath = pathPart || '';
  const isSamePath = !normalizedPath || normalizedPath === pathname;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented || !isAnchor || !targetId) {
      return;
    }

    if (isSamePath) {
      event.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `${normalizedPath || pathname}#${targetId}`);
      }
      return;
    }

    event.preventDefault();
    router.push(`${normalizedPath}#${targetId}`);
  };

  return (
    <Link href={href} className={cn(className)} onClick={handleClick} {...props} />
  );
}
