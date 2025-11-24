import { Skeleton } from "./skeleton";

const PostSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
