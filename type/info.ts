export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  date: string;
};

export type Item = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

export type Events = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export type Projects = {
  id: string;
  title: string;
  description: string;
  image: string;
  team: string;
  category: string;
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  start: string;
  duration: string;
  people: string;
  fee: string;
  details: string[];
};
