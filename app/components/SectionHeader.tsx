import { Badge } from '@/app/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <Badge variant="outline" className={cn('w-fit', align === 'center' ? 'self-center' : 'self-start')}>
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
