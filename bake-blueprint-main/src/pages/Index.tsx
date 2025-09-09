import { useState } from "react";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import { Badge } from "@/components/ui/badge";

// Import recipe images
import pastaImage from "@/assets/pasta-carbonara.jpg";
import cookiesImage from "@/assets/chocolate-cookies.jpg";
import saladImage from "@/assets/caesar-salad.jpg";
import salmonImage from "@/assets/grilled-salmon.jpg";
import pizzaImage from "@/assets/pizza-margherita.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Italian", "Desserts", "Salads", "Seafood", "Quick & Easy"];

  const recipes = [
    {
      id: "1",
      title: "Classic Pasta Carbonara",
      image: pastaImage,
      cookTime: "20 min",
      servings: 4,
      difficulty: "Easy",
      category: "Italian",
      description: "Creamy, rich pasta carbonara with crispy pancetta and freshly grated parmesan cheese."
    },
    {
      id: "2", 
      title: "Homemade Chocolate Chip Cookies",
      image: cookiesImage,
      cookTime: "25 min",
      servings: 12,
      difficulty: "Easy",
      category: "Desserts",
      description: "Soft, chewy chocolate chip cookies made with brown butter for extra flavor."
    },
    {
      id: "3",
      title: "Fresh Caesar Salad",
      image: saladImage,
      cookTime: "15 min", 
      servings: 2,
      difficulty: "Easy",
      category: "Salads",
      description: "Crisp romaine lettuce with homemade caesar dressing, croutons, and parmesan."
    },
    {
      id: "4",
      title: "Grilled Salmon with Herbs",
      image: salmonImage,
      cookTime: "18 min",
      servings: 2,
      difficulty: "Medium",
      category: "Seafood",
      description: "Perfectly grilled salmon fillet with fresh herbs and lemon butter sauce."
    },
    {
      id: "5",
      title: "Pizza Margherita",
      image: pizzaImage,
      cookTime: "30 min",
      servings: 4,
      difficulty: "Medium",
      category: "Italian", 
      description: "Classic Neapolitan pizza with fresh mozzarella, basil, and San Marzano tomatoes."
    }
  ];

  const filteredRecipes = selectedCategory && selectedCategory !== "All" 
    ? recipes.filter(recipe => recipe.category === selectedCategory)
    : recipes;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Recipes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular Recipes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved recipes, carefully curated by our community of passionate cooks.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category || (selectedCategory === null && category === "All") ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all hover:shadow-sm ${
                  selectedCategory === category || (selectedCategory === null && category === "All")
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "hover:bg-secondary"
                }`}
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No recipes found in this category. Try selecting a different category!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kitchen-brown text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Your Virtual Kitchen Assistant</h3>
          <p className="text-white/80 mb-6">
            Making cooking accessible, enjoyable, and delicious for everyone.
          </p>
          <div className="flex justify-center gap-8 text-sm text-white/60">
            <span>© 2024 CookBook</span>
            <span>•</span>
            <span>Made with ❤️ for food lovers</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;