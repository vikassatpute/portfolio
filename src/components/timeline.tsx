import { TimelineItem } from '@/types/storyTypes';
import { cn } from '@/lib/utils';

interface Props {
  items: TimelineItem[];
}

export default function Timeline({ items }: Props) {
  return (
    <section id="timeline" className="space-y-8">
      <h2 className="text-3xl font-semibold">My Journey</h2>

      <ol className="relative border-l border-border">
        {items.map((item) => (
          <li key={item.year} className="mb-10 ml-6">
            <span
              className={cn(
                'absolute -left-3 flex h-6 w-6 items-center justify-center',
                'rounded-full bg-primary text-primary-foreground ring-4 ring-background',
              )}
            />
            <time className="mb-1 text-sm font-medium text-muted-foreground">{item.year}</time>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
