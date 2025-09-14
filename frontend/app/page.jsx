import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Users, BookOpen, Calendar, Store, Settings } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Smart Waste Management
              <span className="text-green-500"> System</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Transform your community with intelligent waste management, comprehensive training, and sustainable
              practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Get Started
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Waste Management Platform</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage, monitor, and optimize waste management operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Smart Dashboard</CardTitle>
              <CardDescription className="text-gray-400">
                Real-time monitoring and analytics for waste management operations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Learning Hub</CardTitle>
              <CardDescription className="text-gray-400">
                Mandatory training programs and certification tracking
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Events & Activities</CardTitle>
              <CardDescription className="text-gray-400">
                Community events, workshops, and environmental activities
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Community Network</CardTitle>
              <CardDescription className="text-gray-400">
                Connect with Green Champions and environmental advocates
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Equipment Store</CardTitle>
              <CardDescription className="text-gray-400">
                Purchase waste management equipment and supplies
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Settings & Control</CardTitle>
              <CardDescription className="text-gray-400">
                Customize your experience and manage preferences
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Waste Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of communities already using our platform for sustainable waste management
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Access Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
