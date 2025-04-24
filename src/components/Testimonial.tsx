
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonial = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.date}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-200 text-gray-200"} 
              />
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 italic">{testimonial.comment}</p>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
