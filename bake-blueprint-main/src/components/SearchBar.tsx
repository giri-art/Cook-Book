import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search recipes..." }: SearchBarProps) => {
  return (
    <div className="flex gap-3 w-full max-w-2xl mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 border-border focus:ring-primary focus:border-primary"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button variant="outline" size="icon" className="border-border hover:bg-secondary">
        <Filter className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SearchBar;