import { DashboardLayout } from "@/components/dashboard-layout"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-2">Manage your account and preferences</p>
        </div>

        <div className="text-center text-gray-400 mt-20">
          <p>Settings content will be added here</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
