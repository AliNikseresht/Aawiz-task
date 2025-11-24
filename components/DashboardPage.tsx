"use client";

import { useEffect, useState } from "react";
import { User, Post, Stat } from "@/types/DashboardT";

import DashboardHeader from "./dashboard/DashboardHeader";
import StatsGrid from "./dashboard/StatsGrid";
import UsersSection from "./dashboard/UsersSection";
import PostsSection from "./dashboard/PostsSection";

import { Users, FileText, MessageSquare, TrendingUp } from "lucide-react";

export function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [uRes, pRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts?_limit=6"),
        ]);

        const [uData, pData] = await Promise.all([uRes.json(), pRes.json()]);
        setUsers(uData);
        setPosts(pData);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const stats: Stat[] = [
    {
      title: "Total Users",
      value: users.length.toString(),
      icon: Users,
      color: "blue",
    },
    { title: "Total Posts", value: "100", icon: FileText, color: "purple" },
    { title: "Comments", value: "500", icon: MessageSquare, color: "green" },
    { title: "Growth Rate", value: "+32%", icon: TrendingUp, color: "orange" },
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader />
      <StatsGrid stats={stats} loading={loading} />
      <UsersSection users={users} loading={loading} />
      <PostsSection posts={posts} loading={loading} />
    </div>
  );
}
