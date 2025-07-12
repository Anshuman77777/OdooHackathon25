import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, ShoppingBag, Plus, Menu, X } from "lucide-react";

interface HeaderProps {
  user?: {
    name: string;
    points: number;
  } | null;
}
<Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition">
  How It Works
</Link>

export function Header({ user }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start space-y-0 leading-tight">
  <div className="flex items-center space-x-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
      <span className="text-lg font-bold text-primary-foreground">R</span>
    </div>
    <span className="text-xl font-bold text-foreground">ReWear</span>
  </div>
  <span className="text-xs text-muted-foreground tracking-wide ml-10">Reown Your Chic</span>
</Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/browse"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/browse") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Browse Items
          </Link>
          <Link
            to="/how-it-works"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/how-it-works") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            How It Works
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {user.points} points
              </Badge>
              <Button variant="outline" size="sm" asChild>
                <Link to="/add-item">
                  <Plus className="h-4 w-4" />
                  List Item
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">
                  <User className="h-4 w-4" />
                  {user.name}
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="space-y-2">
              <Link
                to="/browse"
                className="block text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Items
              </Link>
              <Link
                to="/how-it-works"
                className="block text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
            </nav>
            
            <div className="pt-4 border-t space-y-2">
              {user ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{user.name}</span>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {user.points} points
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/add-item" onClick={() => setIsMenuOpen(false)}>
                      <Plus className="h-4 w-4" />
                      List Item
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                      <User className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}