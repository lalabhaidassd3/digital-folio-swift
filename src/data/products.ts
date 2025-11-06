// Sample product data for PDFVault
export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Complete Business Guide 2024",
    description: "Master modern business strategies with this comprehensive guide",
    fullDescription: "This comprehensive guide covers everything you need to know about starting and scaling a successful business in 2024. From market research to financial planning, you'll learn proven strategies used by successful entrepreneurs. Includes case studies, templates, and actionable worksheets.",
    price: 29.99,
    image: "product1",
    category: "Business"
  },
  {
    id: 2,
    title: "Design Templates Collection",
    description: "Professional templates for all your creative projects",
    fullDescription: "Elevate your design projects with this stunning collection of professional templates. Perfect for designers, marketers, and content creators. Includes social media templates, presentation decks, infographics, and branding materials. Fully customizable and easy to use.",
    price: 24.99,
    image: "product2",
    category: "Design"
  },
  {
    id: 3,
    title: "Productivity Planner",
    description: "Transform your daily routine and achieve your goals",
    fullDescription: "A scientifically-designed planner that helps you maximize productivity and achieve your goals. Features daily schedules, habit trackers, goal-setting worksheets, and reflection prompts. Based on proven time management techniques and productivity research.",
    price: 19.99,
    image: "product3",
    category: "Productivity"
  },
  {
    id: 4,
    title: "Marketing Strategy Masterclass",
    description: "Learn proven marketing tactics for business growth",
    fullDescription: "Discover the marketing strategies that drive real business results. This masterclass covers digital marketing, content strategy, social media, SEO, email campaigns, and conversion optimization. Includes real-world examples and ready-to-use templates.",
    price: 34.99,
    image: "product4",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Web Development Course",
    description: "From beginner to professional web developer",
    fullDescription: "Your complete roadmap to becoming a professional web developer. Learn HTML, CSS, JavaScript, React, and modern development practices. Includes coding exercises, project templates, and career guidance. Perfect for beginners and those looking to level up their skills.",
    price: 39.99,
    image: "product5",
    category: "Development"
  },
  {
    id: 6,
    title: "Financial Planning Guide",
    description: "Build wealth and secure your financial future",
    fullDescription: "Take control of your finances with this comprehensive planning guide. Learn budgeting, investing, retirement planning, and wealth-building strategies. Includes calculators, worksheets, and step-by-step action plans. Suitable for all income levels and experience.",
    price: 27.99,
    image: "product6",
    category: "Finance"
  }
];
