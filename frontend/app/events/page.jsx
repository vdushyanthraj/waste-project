import { DashboardLayout } from "@/components/dashboard-layout"

export default function EventsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Events</h1>
          <p className="text-gray-400 mt-2">Community events and activities</p>
        </div>

        <div className="text-center text-gray-400 mt-20">
          <p>Events content will be added here</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
