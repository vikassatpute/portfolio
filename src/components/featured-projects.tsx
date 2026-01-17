import { ProjectItem } from '@/types/storyTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Props {
  projects: ProjectItem[];
  columns?: number; // default 3
}

export default function FeaturedProjects({ projects, columns = 3 }: Props) {
  const colClass =
    columns === 2
      ? 'md:grid-cols-2'
      : columns === 1
        ? 'md:grid-cols-1'
        : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-semibold">Featured Projects</h2>

      <div className={`grid gap-6 ${colClass}`}>
        {projects.map((p) => (
          <Card key={p.name} className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">{p.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed">{p.impact}</p>

              <div className="flex flex-wrap gap-1">
                {p.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {p.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{p.technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
