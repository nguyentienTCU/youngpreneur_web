<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Success Stories</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <HomeTestimonialsItem
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeTestimonialsItem from './item.vue';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder of TechStart",
    quote: "This program transformed my approach to business and gave me the confidence to launch my startup. The mentorship and resources provided were invaluable.",
    avatar: "/app.png",
    rating: 5,
    date: "June 2024"
  },
  {
    name: "Michael Chen",
    role: "CEO of GreenSolutions",
    quote: "The mentorship I received was invaluable. My mentor helped me navigate challenges I never expected and provided insights that shaped my business strategy.",
    avatar: "/Thumbnail.png",
    rating: 5,
    date: "May 2024"
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager",
    quote: "The community and networking opportunities through this program opened doors I never thought possible. The connections I made were just as valuable as the mentorship.",
    avatar: "/app.png",
    rating: 5,
    date: "April 2024"
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    quote: "The practical workshops and hands-on learning experiences were exactly what I needed to take my business to the next level. Highly recommended!",
    avatar: "/Thumbnail.png",
    rating: 5,
    date: "March 2024"
  }
];
</script> 