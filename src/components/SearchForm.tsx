
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { Search, BedDouble, Users } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const SearchForm = ({ className }: { className?: string }) => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState('2');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, checkInDate, checkOutDate, guests });
    // Implement search logic here
  };
  
  return (
    <form 
      onSubmit={handleSearch} 
      className={cn("bg-white rounded-lg p-4 shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4", className)}
    >
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Search size={16} />
          Destination
        </label>
        <Input 
          placeholder="Where are you going?" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)}
          className="bg-muted"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Check-in</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !checkInDate && "text-muted-foreground"
              )}
            >
              {checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkInDate}
              onSelect={setCheckInDate}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Check-out</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !checkOutDate && "text-muted-foreground"
              )}
            >
              {checkOutDate ? format(checkOutDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOutDate}
              onSelect={setCheckOutDate}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
              disabled={(date) => date <= (checkInDate || new Date())}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Users size={16} />
          Guests
        </label>
        <div className="flex gap-4">
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="flex-1 bg-muted">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="whitespace-nowrap">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
