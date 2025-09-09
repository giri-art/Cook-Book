import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  category: string;
  description: string;
}

const RecipeCard = ({ 
  title, 
  image, 
  cookTime, 
  servings, 
  difficulty, 
  category, 
  description 
}: RecipeCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-kitchen-cream/90 text-kitchen-brown">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{difficulty}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;