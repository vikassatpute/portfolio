import { SkillItem } from '@/types/storyTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Props {
  data: Record<string, SkillItem[]>;
}

export default function SkillsSnapshot({ data }: Props) {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-semibold">Technical Expertise</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data).map(([category, list]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {list.map((skill) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{skill.label}</span>
                    <span className="tabular-nums text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
