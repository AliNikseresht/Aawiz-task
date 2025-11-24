import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, Mail, Building } from "lucide-react";
import AvatarGradient from "../AvatarGradient";
import UserSkeleton from "../ui/userSkeleton";
import { User } from "@/types/DashboardT";

export default function UsersSection({ users, loading }: { users: User[]; loading: boolean }) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users className="size-5" />
              Team Members
            </CardTitle>
            <CardDescription>Active users from the platform</CardDescription>
          </div>
          <Badge variant="secondary">{users.length} users</Badge>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <UserSkeleton />
        ) : (
          <div className="space-y-3">
            {users.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AvatarGradient index={index} name={user.name} />

                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{user.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Mail className="size-3" />
                    {user.email}
                  </p>
                </div>

                <div className="hidden md:block text-sm text-muted-foreground">
                  <Building className="size-4 inline mr-1" />
                  {user.company.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
