import { DashboardLayout } from "@/components/dashboard-layout"

export default function StorePage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Store</h1>
          <p className="text-gray-400 mt-2">Waste management equipment and supplies</p>
        </div>

        <div className="text-center text-gray-400 mt-20">
          <p>Store content will be added here</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
