import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Calendar,
  Star,
  MessageCircle,
  Coins,
  ArrowUpDown
} from "lucide-react";

export default function ItemDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in real app, fetch based on ID
  const item = {
    id: "1",
    title: "Vintage Denim Jacket",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Beautiful vintage denim jacket in excellent condition. This classic piece features distressed details and a perfect lived-in feel. Great for layering and adding a casual touch to any outfit. From a smoke-free home.",
    condition: "Like New",
    size: "M",
    category: "Outerwear",
    brand: "Levi's",
    color: "Blue",
    material: "Cotton Denim",
    tags: ["vintage", "casual", "layering", "classic"],
    location: "Brooklyn, NY",
    points: 25,
    swappable: true,
    available: true,
    uploader: {
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c8d5?auto=format&fit=crop&q=80&w=150",
      rating: 4.8,
      totalSwaps: 23,
      joinedDate: "2023-03-15"
    },
    postedDate: "2024-01-10"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/browse">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                  className="bg-background/80 backdrop-blur"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-background/80 backdrop-blur"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-md ${
                    currentImageIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    className="h-16 w-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <Badge
                  variant={item.available ? "default" : "secondary"}
                  className={item.available ? "bg-primary" : ""}
                >
                  {item.available ? "Available" : "Not Available"}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>Listed {new Date(item.postedDate).toLocaleDateString()}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Item Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Item Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Brand:</span>
                    <p className="font-medium">{item.brand}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size:</span>
                    <p className="font-medium">{item.size}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Condition:</span>
                    <p className="font-medium">{item.condition}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Category:</span>
                    <p className="font-medium">{item.category}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Color:</span>
                    <p className="font-medium">{item.color}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material:</span>
                    <p className="font-medium">{item.material}</p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <span className="text-sm text-muted-foreground">Tags:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Owner Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Listed by</h3>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={item.uploader.avatar} />
                    <AvatarFallback>{item.uploader.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{item.uploader.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">
                          {item.uploader.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.uploader.totalSwaps} successful swaps • Member since{" "}
                      {new Date(item.uploader.joinedDate).getFullYear()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="flex-1" disabled={!item.available}>
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Propose Swap
                </Button>
                <Button variant="outline" size="lg" disabled={!item.available}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
              
              {item.points && (
                <Button variant="accent" size="lg" className="w-full" disabled={!item.available}>
                  <Coins className="h-4 w-4 mr-2" />
                  Redeem for {item.points} Points
                </Button>
              )}
            </div>

            {!item.available && (
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    This item is currently not available for swap or redemption.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}