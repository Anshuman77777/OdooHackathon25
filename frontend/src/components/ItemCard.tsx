import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, User } from "lucide-react";
import { useState } from "react";

interface ItemCardProps {
  id: string;
  title: string;
  image: string;
  condition: string;
  size: string;
  category: string;
  location: string;
  uploader: string;
  points?: number;
  swappable?: boolean;
  liked?: boolean;
  onLike?: (id: string) => void;
}

export function ItemCard({
  id,
  title,
  image,
  condition,
  size,
  category,
  location,
  uploader,
  points,
  swappable = true,
  liked = false,
  onLike
}: ItemCardProps) {
  const [isLiked, setIsLiked] = useState(liked);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    onLike?.(id);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
      <Link to={`/item/${id}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            onClick={handleLike}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"
              }`}
            />
          </button>
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur">
              {condition}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-foreground line-clamp-1">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>{category}</span>
                <span>•</span>
                <span>Size {size}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-3 w-3" />
              <span>{uploader}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              {points && (
                <Badge variant="outline" className="border-accent text-accent">
                  {points} points
                </Badge>
              )}
              {swappable && (
                <Badge variant="outline" className="border-primary text-primary">
                  Swappable
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}