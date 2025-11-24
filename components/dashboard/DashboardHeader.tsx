export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground">
          Real-time analytics powered by JSONPlaceholder API
        </p>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 dark:text-green-300 border border-green-500/20">
        <div className="size-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium">Live Data</span>
      </div>
    </div>
  );
}
