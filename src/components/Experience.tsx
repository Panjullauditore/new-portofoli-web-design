import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      achievements: [
        "Built microservices architecture serving 1M+ users",
        "Reduced application load time by 40%",
        "Led team of 5 developers on major product launch"
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"]
    },
    {
      id: 2,
      title: "AI Research Intern",
      company: "InnovateLab",
      location: "Remote",
      period: "Jun 2022 - Dec 2022",
      type: "Internship",
      description: "Researched and developed machine learning models for natural language processing applications. Collaborated with research team on cutting-edge AI projects.",
      achievements: [
        "Published 2 research papers on NLP applications",
        "Developed sentiment analysis model with 94% accuracy",
        "Contributed to open-source ML library with 500+ stars"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter", "Docker"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "Sep 2021 - May 2022",
      type: "Part-time",
      description: "Developed responsive web applications and collaborated with design team to create intuitive user interfaces. Implemented modern frontend technologies and best practices.",
      achievements: [
        "Redesigned company website increasing user engagement by 60%",
        "Implemented component library used across 3 products",
        "Optimized SEO resulting in 30% increase in organic traffic"
      ],
      technologies: ["React", "Vue.js", "TailwindCSS", "JavaScript", "Figma"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "Tech University",
      location: "California, USA",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 semesters",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2023"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-foreground/70">
              My professional journey and educational background
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <div className="flex items-center text-foreground/70">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <div className="flex items-center text-foreground/60">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-foreground/70">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
            {education.map((edu, index) => (
              <Card 
                key={edu.id} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <div className="flex items-center text-foreground/70">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center text-foreground/60">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent w-fit">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-foreground/70">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;