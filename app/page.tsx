import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-2 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={64} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={64} />}
        />
        <DashboardCard
          title="User"
          count={750}
          icon={<User className="text-slate-500" size={64} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={64} />}
        />
      </div>
    </>
  );
}
