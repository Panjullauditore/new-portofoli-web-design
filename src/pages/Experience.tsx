import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';

const Experience = () => {
  // Toggle blur - set ke false untuk menghilangkan blur
  const isBlurred = true;
  
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Startup Inc.",
      location: "San Francisco, CA",
      period: "Jun 2024 - Present",
      type: "Internship",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with the design team to implement pixel-perfect UI components",
        "Optimized application performance resulting in 30% faster load times",
        "Participated in code reviews and maintained high code quality standards"
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "Git"],
      website: "https://techstartup.com"
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "Jan 2024 - May 2024",
      type: "Freelance",
      description: [
        "Built custom websites for small businesses and startups",
        "Integrated CMS solutions and e-commerce functionality",
        "Provided ongoing maintenance and technical support",
        "Managed client relationships and project timelines"
      ],
      technologies: ["JavaScript", "WordPress", "PHP", "MySQL"],
      website: null
    },
    {
      id: 3,
      title: "Computer Science Student",
      company: "University of California",
      location: "Berkeley, CA",
      period: "Sep 2022 - Present",
      type: "Education",
      description: [
        "Pursuing Bachelor's degree in Computer Science",
        "Relevant coursework: Data Structures, Algorithms, Database Systems",
        "Active member of the Computer Science Student Association",
        "Maintaining a 3.8 GPA while working on personal projects"
      ],
      technologies: ["Python", "Java", "C++", "SQL"],
      website: "https://berkeley.edu"
    },
    {
      id: 4,
      title: "Teaching Assistant",
      company: "University of California",
      location: "Berkeley, CA",
      period: "Sep 2023 - Dec 2023",
      type: "Part-time",
      description: [
        "Assisted professor in teaching Introduction to Programming course",
        "Conducted lab sessions for 20+ students weekly",
        "Graded assignments and provided constructive feedback",
        "Held office hours to help students with programming concepts"
      ],
      technologies: ["Python", "Jupyter", "GitHub"],
      website: "https://berkeley.edu"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Freelance':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Education':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Part-time':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className={`text-center mb-16 animate-fade-in ${isBlurred ? 'blur-sm' : ''}`}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Experience
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                My journey in technology and the experiences that have shaped my career
              </p>
            </div>

            {/* Timeline */}
            <div className={`relative ${isBlurred ? 'blur-sm' : ''}`}>
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div 
                    key={experience.id} 
                    className="relative animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/20" />
                    
                    {/* Content */}
                    <div className="ml-20">
                      <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                            <div>
                              <CardTitle className={`text-xl text-foreground group-hover:text-primary transition-colors duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
                                {experience.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <h3 className={`text-lg font-semibold text-foreground/80 ${isBlurred ? 'blur-sm' : ''}`}>
                                  {experience.company}
                                </h3>
                                {experience.website && (
                                  <a 
                                    href={experience.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`text-primary hover:text-primary/80 transition-colors ${isBlurred ? 'blur-sm' : ''}`}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                            <Badge className={`${getTypeColor(experience.type)} border ${isBlurred ? 'blur-sm' : ''}`}>
                              {experience.type}
                            </Badge>
                          </div>

                          <div className={`flex flex-col sm:flex-row gap-2 text-sm text-foreground/60 ${isBlurred ? 'blur-sm' : ''}`}>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent>
                          <div className={`${isBlurred ? 'blur-sm' : ''}`}>
                            <ul className="space-y-2 mb-6">
                              {experience.description.map((item, idx) => (
                                <li key={idx} className="text-foreground/70 flex items-start gap-2">
                                  <span className="text-primary mt-1.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`flex flex-wrap gap-2 ${isBlurred ? 'blur-sm' : ''}`}>
                            {experience.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className={`text-center mt-16 animate-fade-in ${isBlurred ? 'blur-sm' : ''}`}>
              <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4 text-foreground">Always Learning</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm continuously expanding my skills and knowledge in web development. 
                  Currently exploring advanced React patterns, cloud technologies, and 
                  modern development practices to stay at the forefront of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Coming Soon Overlay */}
      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
          <div className="text-center p-8 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-card max-w-md mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Coming Soon!
            </h2>
            <p className="text-muted-foreground text-lg">
              The experience page is currently under development.
              It will soon be filled with new work experiences and projects.
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Experience;