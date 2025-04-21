import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";
import { Label } from "/components/ui/label";
import { Input } from "/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select";
import { Search } from "lucide-react";

const Shop = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

  const eyewear = [
    { id: 1, name: 'Aviator', price: 100, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
    { id: 2, name: 'Wayfarer', price: 120, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
    { id: 3, name: 'Round', price: 80, image: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Search className="w-6 h-6" />
          <Input type="search" value={search} onChange={handleSearch} placeholder="Search" />
        </div>
        <div className="flex items-center space-x-2">
          <Label>Sort by:</Label>
          <Select value={sort} onValueChange={handleSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price (asc)</SelectItem>
              <SelectItem value="price-desc">Price (desc)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eyewear.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>${item.price}</CardDescription>
            </CardHeader>
            <CardContent>
              {item.image}
            </CardContent>
            <CardFooter>
              <Button>Buy now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;