import { Button } from "@/components/ui/button";
import { ChefHat, BookOpen, Heart } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <ChefHat className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Virtual<br />
            <span className="text-accent">Kitchen Assistant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover, save, and share your favorite recipes. Your culinary journey starts here.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar 
            onSearch={(query) => console.log('Search:', query)}
            placeholder="Search thousands of delicious recipes..."
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-kitchen-brown hover:bg-white/90 shadow-warm">
            <BookOpen className="w-5 h-5 mr-2" />
            Browse Recipes
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Heart className="w-5 h-5 mr-2" />
            My Favorites
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-white/80">Recipes</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-white/80">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-white/80">Happy Cooks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;