const slides = [
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Creative Visionary',
      name: 'Arjun Patel',
      rating: 4.2,
      message: "Had an outstanding experience—prompt responses and creative solutions!"
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Problem Solver',
      name: 'Devansh Mehra',
      rating: 4.7,
      message: "Went above and beyond to handle a tricky project requirement. Highly reliable!"
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Tech Guru',
      name: 'Ritvik Sen',
      rating: 5,
      message: "Extremely professional approach and fantastic technical expertise."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Fast Executor',
      name: 'Harshit Goel',
      rating: 4.8,
      message: "Super fast delivery, and the attention to detail was impressive!"
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Communication Ace',
      name: 'Kunal Agarwal',
      rating: 4.9,
      message: "Excellent communication and always open to feedback—highly appreciated."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Detail-Oriented',
      name: 'Vivek Narayan',
      rating: 4.5,
      message: "Handled my requests with patience and delivered exactly what I wanted."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Ideas Architect',
      name: 'Samarth Bansal',
      rating: 4.3,
      message: "Unique perspective and innovative solutions throughout the process."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Support Star',
      name: 'Pranay Bakshi',
      rating: 4.8,
      message: "Consistently helpful and quick to respond to any queries or changes."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Dependable Partner',
      name: 'Ankit Tyagi',
      rating: 4.6,
      message: "A delight to work with—always delivers on time and with great quality."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Result Driven',
      name: 'Rajdeep Malhotra',
      rating: 4.9,
      message: "Set clear expectations and exceeded every single one of them."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Code Wizard',
      name: 'Kartikeya Suri',
      rating: 5,
      message: "His coding standards and documentation are second to none. Highly recommended."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Strategic Planner',
      name: 'Jayant Jain',
      rating: 4.7,
      message: "Proactive strategist who always plans for tomorrow, today!"
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'UI/UX Magician',
      name: 'Paras Sharma',
      rating: 4.5,
      message: "Transformed our ideas into a user-friendly, beautiful interface."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Testing Expert',
      name: 'Manan Vyas',
      rating: 4.4,
      message: "Very thorough testing—spotted bugs I hadn’t even considered."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Trainer',
      name: 'Sumit Kapoor',
      rating: 4.9,
      message: "Patiently guided our team through complex new processes. Top-notch trainer!"
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Project Leader',
      name: 'Yashwant Dixit',
      rating: 4.7,
      message: "Inspiring leader who rallied the whole team to reach deadlines early."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Documentation King',
      name: 'Nitin Rastogi',
      rating: 4.6,
      message: "Detailed documentation made onboarding and collaboration super easy."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Collaboration Maestro',
      name: 'Ayaan Qureshi',
      rating: 4.8,
      message: "Collaboration was seamless, and always ensured team synergy."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Deadline Hero',
      name: 'Ishaan Bedi',
      rating: 4.6,
      message: "Never missed a deadline and managed urgent changes with ease."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'UI Genius',
      name: 'Mihir Deshmukh',
      rating: 4.7,
      message: "Consistently delivered stunning designs that wowed our users."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Analytics Pro',
      name: 'Tarun Rao',
      rating: 4.8,
      message: "Provided actionable insights from our data, helping us improve."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Friendly Guide',
      name: 'Sahil Menon',
      rating: 4.6,
      message: "Made the whole journey enjoyable and stress-free!"
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Innovation Driver',
      name: 'Raghav Khandelwal',
      rating: 5.0,
      message: "Regularly came up with fresh ideas that took our work to the next level."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Efficiency Expert',
      name: 'Amit Bhargava',
      rating: 4.9,
      message: "Streamlined our workflow and helped us achieve more in less time."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Mentor',
      name: 'Prateek Gandhi',
      rating: 4.7,
      message: "Always ready to share his knowledge and help others grow."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Organizational Ace',
      name: 'Rahul Wadhwa',
      rating: 4.8,
      message: "Impeccable organization kept the project running smoothly."
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Feedback Champ',
      name: 'Varun Seth',
      rating: 4.5,
      message: "Provided helpful feedback at every stage, making improvements easy."
    }
  ],
  [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
      legend: 'Reliability Star',
      name: 'Lakshya Dutt',
      rating: 4.7,
      message: "Dependable, trustworthy, and always ready to face challenges."
    }
  ]
];

export default slides;
