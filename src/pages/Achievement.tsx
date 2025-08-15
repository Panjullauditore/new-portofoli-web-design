import Achievement, { Achievement as AchievementType } from '@/components/Achievement';

// Sample data - Anda bisa mengganti dengan data sertifikat Anda yang sebenarnya
const achievementsData: AchievementType[] = [
  {
    id: '1',
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2024-01-15',
    description: 'Comprehensive certification covering React fundamentals, advanced concepts, and best practices for modern web development.',
    category: 'certification',
    credentialId: 'META-REACT-2024-001',
    credentialUrl: 'https://coursera.org/verify/example',
    skills: ['React', 'JavaScript', 'JSX', 'Hooks', 'State Management'],
    image: '/certificates/react-cert.jpg'
  },
  {
    id: '2',
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2023-11-20',
    description: 'Complete full-stack development course covering front-end and back-end technologies, databases, and deployment.',
    category: 'course',
    credentialId: 'FCC-FULLSTACK-2023',
    credentialUrl: 'https://freecodecamp.org/verify/example',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
    image: '/certificates/fullstack-cert.jpg'
  },
  {
    id: '3',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023-09-10',
    description: 'Foundational certification demonstrating understanding of AWS Cloud concepts, services, security, and pricing.',
    category: 'certification',
    credentialId: 'AWS-CP-2023-789',
    credentialUrl: 'https://aws.amazon.com/verify/example',
    skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda'],
    image: '/certificates/aws-cert.jpg'
  },
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: '2023-07-25',
    description: 'Comprehensive course on user interface and user experience design principles, prototyping, and user research.',
    category: 'course',
    credentialId: 'GOOGLE-UXUI-2023',
    credentialUrl: 'https://coursera.org/verify/google-example',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Thinking'],
    image: '/certificates/ux-cert.jpg'
  },
  {
    id: '5',
    title: 'Hackathon Winner - Best Innovation',
    issuer: 'TechFest 2023',
    date: '2023-05-15',
    description: 'First place winner in the innovation category for developing a sustainable technology solution.',
    category: 'competition',
    credentialId: 'TECHFEST-2023-WINNER',
    skills: ['Innovation', 'Problem Solving', 'Team Leadership'],
    image: '/certificates/hackathon-cert.jpg'
  },
  {
    id: '6',
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023-03-12',
    description: 'Advanced course covering algorithms, data structures, and problem-solving techniques using JavaScript.',
    category: 'course',
    credentialId: 'FCC-ALGO-2023',
    credentialUrl: 'https://freecodecamp.org/verify/algo-example',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
    image: '/certificates/js-algo-cert.jpg'
  },
  {
    id: '7',
    title: 'Outstanding Student Achievement',
    issuer: 'Universitas Teknologi',
    date: '2022-12-01',
    description: 'Recognition for outstanding academic performance and contribution to student community.',
    category: 'award',
    skills: ['Leadership', 'Academic Excellence', 'Community Service'],
    image: '/certificates/student-award.jpg'
  },
  {
    id: '8',
    title: 'Docker & Kubernetes Certification',
    issuer: 'Docker Inc.',
    date: '2023-08-18',
    description: 'Professional certification in containerization and orchestration technologies for modern application deployment.',
    category: 'certification',
    credentialId: 'DOCKER-K8S-2023-456',
    credentialUrl: 'https://docker.com/verify/example',
    skills: ['Docker', 'Kubernetes', 'DevOps', 'Container Orchestration'],
    image: '/certificates/docker-cert.jpg'
  }
];

const AchievementPage = () => {
  // Toggle blur - set ke false untuk menghilangkan blur
  const isBlurred = true;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5 relative">
      <div className="container mx-auto px-6 py-12">
        <div className={isBlurred ? 'blur-sm' : ''}>
          <Achievement achievements={achievementsData} />
        </div>
        
        {/* Coming Soon Overlay */}
        {isBlurred && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
            <div className="text-center p-8 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-card max-w-md mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Coming Soon!
              </h2>
              <p className="text-muted-foreground text-lg">
                The achievements page is currently under development.
                It will be updated soon with the latest certificates and achievements.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementPage;