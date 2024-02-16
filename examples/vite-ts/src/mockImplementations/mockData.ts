export type Todo = {
  id: number;
  title: string;
  details?: string;
  completed: boolean;
};

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Do something nice for someone I care about',
    details:
      'Take the time to do something thoughtful for someone who means a lot to you. It could be a small gesture or something more significant, but the key is to show them you appreciate them.',
    completed: true
  },
  {
    id: 2,
    title: 'Memorize the fifty states and their capitals',
    details:
      'Challenge yourself to memorize all fifty states in the USA along with their respective capitals. This can be a fun and educational activity to broaden your geographical knowledge.',
    completed: false
  },
  {
    id: 3,
    title: 'Watch a classic movie',
    details:
      "Choose a classic film from cinema history and take the time to enjoy it. Whether it's a timeless romance, a thrilling adventure, or a captivating drama, classic movies offer a glimpse into different eras and storytelling styles.",
    completed: false
  },
  {
    id: 4,
    title: 'Contribute code or a monetary donation to an open-source software project',
    details:
      'Support the open-source community by contributing your coding skills or making a monetary donation to a project you believe in. Your contribution can help improve software accessibility and innovation.',
    completed: false
  },
  {
    id: 5,
    title: "Solve a Rubik's cube",
    details:
      "Challenge yourself to solve the Rubik's cube puzzle. It's a great way to exercise your problem-solving skills and patience.",
    completed: false
  },
  {
    id: 6,
    title: 'Bake pastries for me and neighbor',
    details:
      "Spend some time in the kitchen baking delicious pastries to share with both yourself and your neighbor. It's a sweet gesture that can bring joy to both of you.",
    completed: false
  },
  {
    id: 7,
    title: 'Go see a Broadway production',
    details:
      "Treat yourself to a night of entertainment by attending a Broadway production. Whether it's a classic musical or a contemporary play, experiencing live theater can be a memorable experience.",
    completed: false
  },
  {
    id: 8,
    title: 'Write a thank you letter to an influential person in my life',
    details:
      "Express your gratitude to someone who has had a significant impact on your life by writing them a heartfelt thank-you letter. It's a meaningful way to show appreciation and strengthen your relationship.",
    completed: true
  },
  {
    id: 9,
    title: 'Invite some friends over for a game night',
    details:
      "Gather your friends for a fun-filled game night filled with laughter and friendly competition. Choose a variety of games to suit everyone's interests and enjoy spending quality time together.",
    completed: false
  },
  {
    id: 10,
    title: 'Have a football scrimmage with some friends',
    details:
      "Organize a friendly football scrimmage with your friends for some outdoor fun and exercise. It's a great way to bond and enjoy the thrill of the game.",
    completed: false
  },
  {
    id: 11,
    title: "Text a friend I haven't talked to in a long time",
    details:
      "Reach out to a friend you haven't spoken to in a while and catch up with them via text. It's a simple gesture that can help rekindle your connection and strengthen your friendship.",
    completed: false
  },
  {
    id: 12,
    title: 'Organize pantry',
    details:
      'Take some time to declutter and organize your pantry. It will make meal planning and cooking much easier and more efficient in the long run.',
    completed: true
  },
  {
    id: 13,
    title: 'Buy a new house decoration',
    details:
      "Add a personal touch to your home by purchasing a new decoration that reflects your style and personality. Whether it's a piece of artwork, a vase, or a decorative object, it can breathe new life into your living space.",
    completed: false
  },
  {
    id: 14,
    title: "Plan a vacation I've always wanted to take",
    details:
      "Take the time to plan your dream vacation to a destination you've always wanted to visit. Research activities, accommodations, and transportation to make your trip a memorable experience.",
    completed: false
  },
  {
    id: 15,
    title: 'Clean out car',
    details:
      'Give your car a thorough cleaning by removing clutter, vacuuming the interior, and washing the exterior. A clean car not only looks better but also feels more pleasant to drive.',
    completed: false
  },
  {
    id: 16,
    title: 'Draw and color a Mandala',
    details:
      "Unleash your creativity by drawing and coloring a Mandala, a symbolic representation of the universe in Hindu and Buddhist traditions. It's a relaxing and meditative activity that can help reduce stress and anxiety.",
    completed: true
  },
  {
    id: 17,
    title: 'Create a cookbook with favorite recipes',
    details:
      'Compile a collection of your favorite recipes into a personalized cookbook. Include family recipes, traditional dishes, and new favorites to create a culinary treasure trove.',
    completed: false
  },
  {
    id: 18,
    title: 'Bake a pie with some friends',
    details:
      "Gather your friends for a baking session and make a delicious pie together. Whether it's apple, cherry, or pumpkin, baking a pie from scratch is a fun and rewarding experience.",
    completed: false
  },
  {
    id: 19,
    title: 'Create a compost pile',
    details:
      "Start composting your organic waste to create nutrient-rich soil for your garden. It's an eco-friendly way to reduce waste and nourish your plants naturally.",
    completed: true
  },
  {
    id: 20,
    title: 'Take a hike at a local park',
    details:
      'Explore the great outdoors by going for a hike at a local park. Enjoy the fresh air, scenic views, and tranquility of nature as you embark on an invigorating adventure.',
    completed: true
  },
  {
    id: 21,
    title: 'Give UI5 Web Components for React a Star on GitHub',
    details:
      'If you like using UI5 Web Components for React, why not show your love by giving the project a star on GitHub? Your star would mean a lot to us!',
    completed: false
  }
];
