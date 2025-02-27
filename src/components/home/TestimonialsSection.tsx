
import React from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content:
      "Server Clinic completely transformed our network infrastructure. Their team's expertise and dedication to quality resulted in a 40% increase in network performance and eliminated our previous downtime issues.",
    author: "Sarah Johnson",
    position: "CTO, Innovative Solutions Inc.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    company: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    content:
      "The custom software development services from Server Clinic have been instrumental in our digital transformation. Their attention to detail and proactive approach to problem-solving sets them apart from other IT providers.",
    author: "Michael Chen",
    position: "VP of Technology, Global Enterprises",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    company: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    content:
      "We've been working with Server Clinic for over three years on our managed IT services. Their responsiveness and technical expertise have saved us countless hours and significantly improved our operational efficiency.",
    author: "Jennifer Lopez",
    position: "IT Director, FutureTech Solutions",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    company: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="full-width-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped hundreds of businesses transform their IT infrastructure and
            software solutions. Here's what some of them have to say.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-background rounded-2xl p-8 shadow-lg glass-card"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.position}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-lg italic mb-6">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center">
                      <div className="h-px flex-grow bg-border" />
                      <img
                        src={testimonial.company}
                        alt="Company logo"
                        className="h-8 mx-4 opacity-70"
                      />
                      <div className="h-px flex-grow bg-border" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-background shadow-md"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-background shadow-md"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
