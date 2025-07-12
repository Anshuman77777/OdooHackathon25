import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ItemCard } from "@/components/ItemCard";
import { ArrowRight, Recycle, Users, Coins, Heart, Leaf, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const mockItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80&w=400",
    condition: "Like New",
    size: "M",
    category: "Outerwear",
    location: "Brooklyn, NY",
    uploader: "Sarah M.",
    points: 25,
    swappable: true
  },
  {
    id: "2", 
    title: "Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400",
    condition: "Good",
    size: "S",
    category: "Dresses",
    location: "Austin, TX",
    uploader: "Emma K.",
    points: 20,
    swappable: true
  },
  {
    id: "3",
    title: "Designer Wool Sweater",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=400",
    condition: "Excellent",
    size: "L",
    category: "Tops",
    location: "Portland, OR",
    uploader: "Alex R.",
    points: 35,
    swappable: true
  }
];

const features = [
  {
    icon: Recycle,
    title: "Sustainable Fashion",
    description: "Give your clothes a second life and reduce textile waste"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Connect with like-minded fashion lovers in your area"
  },
  {
    icon: Coins,
    title: "Points System",
    description: "Earn points for every item you list and use them to get new pieces"
  }
];

const stats = [
  { number: "10K+", label: "Items Exchanged" },
  { number: "5K+", label: "Active Users" },
  { number: "500+", label: "Cities" },
  { number: "95%", label: "User Satisfaction" }
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  <Leaf className="h-3 w-3 mr-1" />
                  Sustainable Fashion Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Give Your Clothes a{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Second Life
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Exchange, swap, and discover pre-loved fashion. Join our community 
                  of sustainable fashion enthusiasts and make every closet count.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/signup">
                    Start Swapping
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/browse">Browse Items</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-accent border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">5,000+</span> users joined this month
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Sustainable fashion community"
                className="rounded-2xl shadow-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose ReWear?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the sustainable fashion revolution with our innovative platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-soft">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Items</h2>
              <p className="text-muted-foreground">Discover amazing pieces from our community</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/browse">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started with ReWear is simple and rewarding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold">List Your Items</h3>
              <p className="text-muted-foreground">
                Upload photos and details of clothes you no longer wear
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold">Browse & Swap</h3>
              <p className="text-muted-foreground">
                Find items you love and propose swaps or use your points
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold">Enjoy Your New Style</h3>
              <p className="text-muted-foreground">
                Refresh your wardrobe sustainably and earn points for future swaps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Closet?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of fashion lovers making sustainable choices every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/add-item">List Your First Item</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}