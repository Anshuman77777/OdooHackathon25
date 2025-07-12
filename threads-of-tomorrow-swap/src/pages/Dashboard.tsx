import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ItemCard } from "@/components/ItemCard";
import { 
  User,
  Package,
  ArrowUpDown,
  Coins,
  Heart,
  Calendar,
  Plus,
  Star,
  TrendingUp,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const mockUser = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  points: 150,
  memberSince: "2023-06-15",
  rating: 4.9,
  totalSwaps: 12,
  totalListings: 8
};

const mockItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80&w=400",
    condition: "Like New",
    size: "M",
    category: "Outerwear",
    location: "Brooklyn, NY",
    uploader: "You",
    points: 25,
    swappable: true
  },
  {
    id: "2",
    title: "Silk Blouse",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400",
    condition: "Excellent",
    size: "S",
    category: "Tops",
    location: "Brooklyn, NY",
    uploader: "You",
    points: 20,
    swappable: true
  }
];

const mockSwaps = [
  {
    id: "1",
    status: "pending",
    myItem: "Vintage Denim Jacket",
    theirItem: "Designer Wool Sweater",
    user: "Sarah M.",
    date: "2024-01-15"
  },
  {
    id: "2",
    status: "completed",
    myItem: "Summer Dress",
    theirItem: "Leather Boots",
    user: "Emma K.",
    date: "2024-01-10"
  },
  {
    id: "3",
    status: "in-progress",
    myItem: "Casual T-Shirt",
    theirItem: "Denim Jeans",
    user: "Mike L.",
    date: "2024-01-12"
  }
];

const stats = [
  { icon: Package, label: "Items Listed", value: mockUser.totalListings, color: "bg-blue-500" },
  { icon: ArrowUpDown, label: "Successful Swaps", value: mockUser.totalSwaps, color: "bg-green-500" },
  { icon: Coins, label: "Points Balance", value: mockUser.points, color: "bg-yellow-500" },
  { icon: Star, label: "Rating", value: mockUser.rating, color: "bg-purple-500" }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const getSwapStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="border-yellow-500 text-yellow-600">Pending</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="border-blue-500 text-blue-600">In Progress</Badge>;
      case "completed":
        return <Badge variant="outline" className="border-green-500 text-green-600">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your items, track swaps, and view your activity
              </p>
            </div>
            <Button variant="hero" asChild>
              <Link to="/add-item">
                <Plus className="h-4 w-4 mr-2" />
                List New Item
              </Link>
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="items">My Items</TabsTrigger>
            <TabsTrigger value="swaps">Swaps</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        <stat.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm">Swap completed with Emma K.</p>
                    <span className="text-xs text-muted-foreground ml-auto">2 days ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm">New swap request from Sarah M.</p>
                    <span className="text-xs text-muted-foreground ml-auto">3 days ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <p className="text-sm">Listed "Vintage Denim Jacket"</p>
                    <span className="text-xs text-muted-foreground ml-auto">5 days ago</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Popular Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockItems.slice(0, 2).map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">25 views this week</p>
                      </div>
                      <Badge variant="outline">{item.points} pts</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="items" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">My Listed Items</h2>
              <Button variant="outline" asChild>
                <Link to="/add-item">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Item
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockItems.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="swaps" className="space-y-6">
            <h2 className="text-2xl font-semibold">My Swaps</h2>
            
            <div className="space-y-4">
              {mockSwaps.map((swap) => (
                <Card key={swap.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Swap with {swap.user}</h3>
                          {getSwapStatusBadge(swap.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Your: {swap.myItem} ↔ Their: {swap.theirItem}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(swap.date).toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{mockUser.name}</h3>
                    <p className="text-muted-foreground">{mockUser.email}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Member since {new Date(mockUser.memberSince).getFullYear()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {mockUser.rating} rating
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Display Name</label>
                    <input
                      type="text"
                      value={mockUser.name}
                      className="w-full mt-1 p-2 border rounded-md"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      value={mockUser.email}
                      className="w-full mt-1 p-2 border rounded-md"
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline">Edit Profile</Button>
                  <Button variant="outline">Change Password</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}