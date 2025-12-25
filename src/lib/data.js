import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Award,
  CreditCard,
  Settings,
  LifeBuoy,
} from "lucide-react";

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Courses",
    href: "/dashboard/my-courses",
    icon: BookOpen,
  },
  {
    label: "Assignments",
    href: "/dashboard/assignments",
    icon: FileText,
  },
  {
    label: "Certificates",
    href: "/dashboard/certificates",
    icon: Award,
  },
  {
    label: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    label: "Support",
    href: "/dashboard/support",
    icon: LifeBuoy,
  },
];

export const courseCategories = [
    {
        title: "Development",
        description: "Learn to code in Python, JavaScript, Ruby, and more.",
    },
    {
        title: "Business",
        description: "Learn about marketing, finance, entrepreneurship, and more.",
    },
    {
        title: "Design",
        description: "Learn about graphic design, web design, UX/UI design, and more.",
    },
    {
        title: "Marketing",
        description: "Learn about SEO, social media marketing, content marketing, and more.",
    },
    {
        title: "IT & Software",
        description: "Learn about cybersecurity, cloud computing, network administration, and more.",
    },
    {
        title: "Personal Development",
        description: "Learn about productivity, leadership, communication, and more.",
    },
];

export const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Manager, Acme Inc.",
        testimonial: "ZipZipy LMS has been a game-changer for our team. The platform is intuitive, engaging, and has helped us to upskill our team in record time.",
        avatar: "/images/avatars/sarah.svg",
    },
    {
        name: "David Lee",
        role: "Lead Developer, Innovate Corp.",
        testimonial: "I love the flexibility and power of ZipZipy LMS. The course builder is a joy to use, and the analytics have helped us to identify areas for improvement.",
        avatar: "/images/avatars/david.svg",
    },
    {
        name: "Emily Chen",
        role: "HR Director, Future Enterprises",
        testimonial: "Our employees love using ZipZipy LMS. The platform is easy to navigate, and the content is top-notch. We've seen a significant increase in course completion rates.",
        avatar: "/images/avatars/emily.svg",
    },
];

export const faqs = [
    {
        question: "What is ZipZipy LMS?",
        answer: "ZipZipy LMS is a modern, cloud-based Learning Management System designed to help you create, manage, and deliver engaging learning experiences.",
    },
    {
        question: "Who is ZipZipy LMS for?",
        answer: "ZipZipy LMS is for businesses of all sizes, from small teams to large enterprises. It's also great for educational institutions and individual instructors.",
    },
    {
        question: "How much does it cost?",
        answer: "We offer a range of flexible pricing plans to suit your needs. Please visit our pricing page for more information.",
    },
    {
        question: "Is there a free trial?",
        answer: "Yes, we offer a 14-day free trial so you can experience the full power of ZipZipy LMS before you commit.",
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 email support, as well as phone and chat support for our enterprise customers. We also have an extensive knowledge base to help you get started.",
    },
];

export const dashboardStats = {
    enrolledCourses: 12,
    activeCourses: 5,
    completedCourses: 7,
};

export const continueLearning = [
    {
        title: "Advanced React",
        instructor: "John Doe",
        progress: 60,
    },
    {
        title: "Next.js Fundamentals",
        instructor: "Jane Smith",
        progress: 80,
    },
    {
        title: "Tailwind CSS for Beginners",
        instructor: "Peter Jones",
        progress: 25,
    },
];


export const courses = [
    {
        id: "1",
        title: "Web Development Bootcamp",
        instructor: "Jane Doe",
        thumbnail: "/images/course-thumbnails/web-dev.svg",
        status: "In Progress",
        progress: 60,
    },
    {
        id: "2",
        title: "Data Science with Python",
        instructor: "John Smith",
        thumbnail: "/images/course-thumbnails/data-science.svg",
        status: "In Progress",
        progress: 40,
    },
    {
        id: "3",
        title: "Digital Marketing Fundamentals",
        instructor: "Emily White",
        thumbnail: "/images/course-thumbnails/marketing.svg",
        status: "Completed",
        progress: 100,
    },
    {
        id: "4",
        title: "Advanced React",
        instructor: "Michael Johnson",
        thumbnail: "/images/course-thumbnails/react.svg",
        status: "In Progress",
        progress: 25,
    },
    {
        id: "5",
        title: "UI/UX Design Principles",
        instructor: "Sarah Williams",
        thumbnail: "/images/course-thumbnails/uiux.svg",
        status: "Not Started",
        progress: 0,
    },
    {
        id: "6",
        title: "Node.js Backend Development",
        instructor: "David Brown",
        thumbnail: "/images/course-thumbnails/nodejs.svg",
        status: "Completed",
        progress: 100,
    },
];

export const detailedCourses = [
    {
        id: "1",
        title: "Web Development Bootcamp",
        instructor: "Jane Doe",
        description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js.",
        duration: "12.5 hours",
        rating: 4.8,
        students: 1250,
        whatYouWillLearn: [
            "Build responsive websites",
            "Develop dynamic web applications",
            "Understand front-end and back-end technologies",
        ],
        requirements: [
            "Basic computer literacy",
            "A computer with internet access",
        ],
        instructorBio: "Jane Doe is a seasoned web developer with over 10 years of experience building scalable web applications. She loves to teach and mentor aspiring developers.",
        modules: [
            {
                title: "Introduction to Web Development",
                lessons: [
                    { id: "1-1", title: "What is Web Development?", duration: "3 min", completed: true, videoUrl: "https://www.youtube.com/embed/M_k0B4yV4fM" },
                    { id: "1-2", title: "Tools and Setup", duration: "5 min", completed: true, videoUrl: "https://www.youtube.com/embed/a_nUeN9oW6U" },
                ],
            },
            {
                title: "HTML Fundamentals",
                lessons: [
                    { id: "1-3", title: "Basic HTML Structure", duration: "10 min", completed: false, videoUrl: "https://www.youtube.com/embed/k_f8p9LqP3k" },
                    { id: "1-4", title: "Text and Links", duration: "12 min", completed: false, videoUrl: "https://www.youtube.com/embed/MDLgp57w8aY" },
                ],
            },
            {
                title: "CSS Styling",
                lessons: [
                    { id: "1-5", title: "Selectors and Properties", duration: "15 min", completed: false, videoUrl: "https://www.youtube.com/embed/O_eF02IysN4" },
                    { id: "1-6", title: "Flexbox and Grid", duration: "20 min", completed: false, videoUrl: "https://www.youtube.com/embed/t0CqIagR_1g" },
                ],
            },
        ],
    },
    {
        id: "2",
        title: "Data Science with Python",
        instructor: "John Smith",
        description: "Learn data analysis, machine learning, and data visualization using Python.",
        duration: "18 hours",
        rating: 4.9,
        students: 980,
        whatYouWillLearn: [
            "Analyze data with Python",
            "Build machine learning models",
            "Visualize data effectively",
        ],
        requirements: [
            "Basic Python knowledge",
            "Understanding of basic statistics",
        ],
        instructorBio: "John Smith is a data scientist and educator with a passion for making complex topics understandable. He has worked on numerous data-driven projects.",
        modules: [
            {
                title: "Python for Data Science",
                lessons: [
                    { id: "2-1", title: "NumPy Basics", duration: "10 min", completed: true, videoUrl: "https://www.youtube.com/embed/QUT1_gM5-5U" },
                    { id: "2-2", title: "Pandas DataFrames", duration: "15 min", completed: true, videoUrl: "https://www.youtube.com/embed/NJu2-uP-h84" },
                ],
            },
            {
                title: "Machine Learning Concepts",
                lessons: [
                    { id: "2-3", title: "Supervised Learning", duration: "20 min", completed: false, videoUrl: "https://www.youtube.com/embed/K_R4w-1S39g" },
                    { id: "2-4", title: "Unsupervised Learning", duration: "18 min", completed: false, videoUrl: "https://www.youtube.com/embed/fSMRh1M_f1Q" },
                ],
            },
        ],
    },
    {
        id: "3",
        title: "Digital Marketing Fundamentals",
        instructor: "Emily White",
        description: "Get started with digital marketing strategies including SEO, social media, and content marketing.",
        duration: "8 hours",
        rating: 4.7,
        students: 2100,
        whatYouWillLearn: [
            "Master SEO basics",
            "Create engaging social media campaigns",
            "Develop content marketing strategies",
        ],
        requirements: [
            "No prior experience required",
        ],
        instructorBio: "Emily White is a digital marketing consultant with a proven track record of helping businesses grow their online presence. She focuses on practical, actionable strategies.",
        modules: [
            {
                title: "Introduction to Digital Marketing",
                lessons: [
                    { id: "3-1", title: "What is Digital Marketing?", duration: "5 min", completed: false, videoUrl: "https://www.youtube.com/embed/nU-b0B_gq6s" },
                    { id: "3-2", title: "Key Digital Channels", duration: "8 min", completed: false, videoUrl: "https://www.youtube.com/embed/g_j4yJ6iQ4o" },
                ],
            },
            {
                title: "Search Engine Optimization (SEO)",
                lessons: [
                    { id: "3-3", title: "Keyword Research", duration: "15 min", completed: false, videoUrl: "https://www.youtube.com/embed/nMw0yLhjSlo" },
                    { id: "3-4", title: "On-Page SEO Techniques", duration: "18 min", completed: false, videoUrl: "https://www.youtube.com/embed/wW0xV07c57E" },
                ],
            },
        ],
    },
];

export const assignments = [
    {
        id: "asm-1",
        title: "Web Dev Final Project",
        course: "Web Development Bootcamp",
        dueDate: "2025-12-15",
        status: "Pending",
    },
    {
        id: "asm-2",
        title: "Data Analysis Report",
        course: "Data Science with Python",
        dueDate: "2025-11-30",
        status: "Submitted",
    },
    {
        id: "asm-3",
        title: "Marketing Strategy Plan",
        course: "Digital Marketing Fundamentals",
        dueDate: "2025-11-20",
        status: "Graded",
        score: 88,
        feedback: "Good effort, focus on conversion metrics.",
    },
    {
        id: "asm-4",
        title: "React Component Library",
        course: "Advanced React",
        dueDate: "2025-12-05",
        status: "Pending",
    },
    {
        id: "asm-5",
        title: "Machine Learning Model",
        course: "Data Science with Python",
        dueDate: "2025-12-10",
        status: "Submitted",
    },
];

export const detailedAssignments = [
    {
        id: "asm-1",
        title: "Web Dev Final Project",
        course: "Web Development Bootcamp",
        dueDate: "2025-12-15",
        status: "Pending",
        instructions: "Develop a full-stack web application using React, Node.js, and a database of your choice. The application should include user authentication and at least three main features.",
        requirements: ["User authentication", "Frontend built with React", "Backend built with Node.js", "Database integration", "Deployed application URL"],
        supportingFiles: [{ name: "Project_Rubric.pdf", url: "#" }],
        submissionHistory: [],
        currentSubmission: { fileName: "", timestamp: "", status: "Pending" },
    },
    {
        id: "asm-2",
        title: "Data Analysis Report",
        course: "Data Science with Python",
        dueDate: "2025-11-30",
        status: "Submitted",
        instructions: "Analyze the provided dataset using Python and generate a comprehensive report. Include exploratory data analysis, visualizations, and key insights.",
        requirements: ["Python script for analysis", "Jupyter Notebook with explanations", "PDF report summarizing findings", "Presentation slides (optional)"],
        supportingFiles: [{ name: "Dataset.csv", url: "#" }, { name: "Report_Template.docx", url: "#" }],
        submissionHistory: [
            { timestamp: "2025-11-29T10:00:00Z", fileName: "data_report_v1.pdf", status: "Submitted", score: null, feedback: null }
        ],
        currentSubmission: { fileName: "data_report_v1.pdf", timestamp: "2025-11-29T10:00:00Z", status: "Submitted" },
    },
    {
        id: "asm-3",
        title: "Marketing Strategy Plan",
        course: "Digital Marketing Fundamentals",
        dueDate: "2025-11-20",
        status: "Graded",
        instructions: "Create a detailed digital marketing strategy plan for a new product launch. Include target audience analysis, channel strategy, content plan, and KPI's.",
        requirements: ["Detailed market research", "Comprehensive strategy document", "Presentation of the plan"],
        supportingFiles: [{ name: "Market_Research_Template.xlsx", url: "#" }],
        submissionHistory: [
            { timestamp: "2025-11-19T14:30:00Z", fileName: "marketing_plan_v1.pdf", status: "Submitted", score: null, feedback: null },
            { timestamp: "2025-11-20T11:00:00Z", fileName: "marketing_plan_v2.pdf", status: "Graded", score: 88, feedback: "Good effort, focus on conversion metrics." }
        ],
        currentSubmission: { fileName: "marketing_plan_v2.pdf", timestamp: "2025-11-20T11:00:00Z", status: "Graded", score: 88, feedback: "Good effort, focus on conversion metrics." },
    },
    {
        id: "asm-4",
        title: "React Component Library",
        course: "Advanced React",
        dueDate: "2025-12-05",
        status: "Pending",
        instructions: "Develop a small component library in React for common UI elements. Include at least 5 reusable components with documentation and storybook integration (optional).",
        requirements: ["5+ reusable React components", "Clear component documentation", "Proper folder structure", "GitHub repository link"],
        supportingFiles: [],
        submissionHistory: [],
        currentSubmission: { fileName: "", timestamp: "", status: "Pending" },
    },
    {
        id: "asm-5",
        title: "Machine Learning Model",
        course: "Data Science with Python",
        dueDate: "2025-12-10",
        status: "Submitted",
        instructions: "Train a machine learning model on a given dataset to predict a target variable. Evaluate the model's performance and provide insights into its strengths and weaknesses.",
        requirements: ["Python script with model training", "Performance evaluation metrics", "Discussion of results and limitations", "Trained model file (e.g., .pkl)"],
        supportingFiles: [{ name: "ML_Dataset.csv", url: "#" }],
        submissionHistory: [
            { timestamp: "2025-12-09T16:00:00Z", fileName: "ml_model_submission.ipynb", status: "Submitted", score: null, feedback: null }
        ],
        currentSubmission: { fileName: "ml_model_submission.ipynb", timestamp: "2025-12-09T16:00:00Z", status: "Submitted" },
    },
];

export const certificates = [
    {
        id: "cert-1",
        title: "Web Development Specialist",
        course: "Web Development Bootcamp",
        issueDate: "2025-10-01",
        thumbnail: "/images/certificate-thumbnails/cert-1.svg",
        downloadLink: "#",
    },
    {
        id: "cert-2",
        title: "Data Science Professional",
        course: "Data Science with Python",
        issueDate: "2025-09-15",
        thumbnail: "/images/certificate-thumbnails/cert-2.svg",
        downloadLink: "#",
    },
    {
        id: "cert-3",
        title: "Digital Marketing Expert",
        course: "Digital Marketing Fundamentals",
        issueDate: "2025-11-01",
        thumbnail: "/images/certificate-thumbnails/cert-3.svg",
    },
];

export const pricingPlans = [
    {
        id: "basic",
        name: "Basic",
        price: "$19",
        description: "Ideal for individual learners.",
        features: [
            "Access to all free courses",
            "Basic certificates",
            "Email support",
        ],
        isFeatured: false,
    },
    {
        id: "pro",
        name: "Pro",
        price: "$49",
        description: "Perfect for serious learners.",
        features: [
            "Access to all courses",
            "Premium certificates",
            "Priority email support",
            "Downloadable resources",
            "Project feedback",
        ],
        isFeatured: true,
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact Us",
        description: "Tailored for organizations.",
        features: [
            "Custom courses",
            "Dedicated account manager",
            "API access",
            "Advanced analytics",
            "On-site training",
        ],
    },
];

export const paymentHistory = [
    {
        id: "txn-1",
        course: "Web Development Bootcamp",
        plan: null,
        amount: "$299.00",
        date: "2025-11-01",
        status: "Completed",
    },
    {
        id: "txn-2",
        course: null,
        plan: "Pro Plan Subscription",
        amount: "$49.00",
        date: "2025-10-15",
        status: "Completed",
    },
    {
        id: "txn-3",
        course: "Digital Marketing Fundamentals",
        plan: null,
        amount: "$199.00",
        date: "2025-09-20",
        status: "Completed",
    },
    {
        id: "txn-4",
        course: null,
        plan: "Basic Plan Subscription",
        amount: "$19.00",
        date: "2025-09-01",
        status: "Completed",
    },
];

export const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/images/avatars/john.svg",
    notificationSettings: {
        emailNotifications: true,
        pushNotifications: false,
    },
    privacySettings: {
        profileVisibility: "public",
        dataSharing: true,
    },
};

export const adminDashboardStats = {
    totalStudents: 1250,
    totalRevenue: 25600,
    activeCourses: 12,
    monthlyStats: [
        { month: "Jan", revenue: 2000, students: 100 },
        { month: "Feb", revenue: 1800, students: 120 },
        { month: "Mar", revenue: 2200, students: 150 },
        { month: "Apr", revenue: 2500, students: 180 },
        { month: "May", revenue: 2300, students: 200 },
        { month: "Jun", revenue: 2700, students: 250 },
        { month: "Jul", revenue: 3000, students: 280 },
        { month: "Aug", revenue: 2800, students: 300 },
        { month: "Sep", revenue: 3200, students: 350 },
        { month: "Oct", revenue: 3500, students: 400 },
        { month: "Nov", revenue: 3300, students: 420 },
        { month: "Dec", revenue: 3800, students: 450 },
    ],
};
