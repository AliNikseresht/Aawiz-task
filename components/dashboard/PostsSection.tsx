import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { FileText, ArrowUpRight } from "lucide-react";
import PostSkeleton from "../ui/postSkeleton";
import { Post } from "@/types/DashboardT";

export default function PostsSection({ posts, loading }: { posts: Post[]; loading: boolean }) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="size-5" />
              Latest Articles
            </CardTitle>
            <CardDescription>Recent blog posts and updates</CardDescription>
          </div>
          <Badge variant="secondary">{posts.length} posts</Badge>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <PostSkeleton />
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="p-5 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 hover:border-primary/20 transition-all group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="border border-blue-500/20">
                    Post #{post.id}
                  </Badge>

                  <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                </div>

                <h4 className="mb-2 font-semibold line-clamp-2 capitalize">
                  {post.title}
                </h4>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
