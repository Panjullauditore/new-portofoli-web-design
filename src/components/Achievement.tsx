import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: 'certification' | 'course' | 'competition' | 'award';
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills?: string[];
}

interface AchievementProps {
  achievements: Achievement[];
}

const categoryColors = {
  certification: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  course: 'bg-green-500/10 text-green-500 border-green-500/20',
  competition: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  award: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
};

const categoryLabels = {
  certification: 'Sertifikasi',
  course: 'Kursus',
  competition: 'Kompetisi',
  award: 'Penghargaan',
};

const Achievement: React.FC<AchievementProps> = ({ achievements }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Array.from(new Set(achievements.map(a => a.category)))];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = selectedCategory === 'all' || achievement.category === selectedCategory;
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-primary">
          <Award className="h-8 w-8" />
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Achievements and Certificates
          </h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A collection of certificates, awards, and achievements that I have achieved in my career journey.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "transition-all duration-300",
                selectedCategory === category && "shadow-glow"
              )}
            >
              {category === 'all' ? 'Semua' : categoryLabels[category as keyof typeof categoryLabels]}
            </Button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari sertifikat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAchievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-card hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Category Badge */}
            <div className="flex items-center justify-between mb-4">
              <Badge 
                variant="outline" 
                className={cn(
                  "text-xs font-medium border",
                  categoryColors[achievement.category]
                )}
              >
                {categoryLabels[achievement.category]}
              </Badge>
              
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(achievement.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'short'
                })}
              </div>
            </div>

            {/* Achievement Image */}
            {achievement.image && (
              <div className="mb-4 aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-sm font-medium text-primary/80">
                {achievement.issuer}
              </p>
              
              <p className="text-sm text-muted-foreground line-clamp-3">
                {achievement.description}
              </p>

              {/* Skills */}
              {achievement.skills && achievement.skills.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {achievement.skills.slice(0, 3).map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs px-2 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {achievement.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      +{achievement.skills.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              {/* Credential Info */}
              {achievement.credentialId && (
                <p className="text-xs text-muted-foreground">
                  ID Kredensial: {achievement.credentialId}
                </p>
              )}

              {/* View Certificate Button */}
              {achievement.credentialUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Lihat Sertifikat
                  </a>
                </Button>
              )}
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <Award className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-muted-foreground mb-2">
            Tidak ada pencapaian ditemukan
          </h3>
          <p className="text-sm text-muted-foreground">
            Coba ubah filter atau kata kunci pencarian
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
        {categories.slice(1).map((category) => {
          const count = achievements.filter(a => a.category === category).length;
          return (
            <div key={category} className="text-center">
              <div className="text-2xl font-bold text-primary">{count}</div>
              <div className="text-sm text-muted-foreground">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievement;