import { DashboardLayout } from "@/components/dashboard-layout"

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Community</h1>
          <p className="text-gray-400 mt-2">Connect with Green Champions and local groups</p>
        </div>

        <div className="text-center text-gray-400 mt-20">
          <p>Community content will be added here</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
