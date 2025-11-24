import { Card, CardContent } from "../ui/card";
import { ArrowUpRight } from "lucide-react";

interface Stat {
  title: string;
  value: string;
  icon: any;
  color: "blue" | "purple" | "green" | "orange";
}

export default function StatsGrid({ stats, loading }: { stats: Stat[]; loading: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        const bgGradient = {
          blue: "bg-blue-500/10 dark:bg-blue-500/20 border-blue-500/20",
          purple: "bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/20",
          green: "bg-green-500/10 dark:bg-green-500/20 border-green-500/20",
          orange: "bg-orange-500/10 dark:bg-orange-500/20 border-orange-500/20",
        }[stat.color];

        const iconColor = {
          blue: "text-blue-600 dark:text-blue-400",
          purple: "text-purple-600 dark:text-purple-400",
          green: "text-green-600 dark:text-green-400",
          orange: "text-orange-600 dark:text-orange-400",
        }[stat.color];

        return (
          <Card
            key={stat.title}
            className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${bgGradient} border`}>
                  <Icon className={`size-6 ${iconColor}`} />
                </div>

                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <ArrowUpRight className="size-4" />
                  <span className="text-sm font-medium">+12.5%</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold">{loading ? "..." : stat.value}</h3>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
