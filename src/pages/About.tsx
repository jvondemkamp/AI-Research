
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <section className="hero-section" style={{height: '40vh', minHeight: '300px'}}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="glass overflow-hidden mb-6 border border-primary/20">
                <img 
                  src="public/lovable-uploads/f6a69d67-5d06-4dc5-9dc0-fffcb3f93ab4.png" 
                  alt="Jackson Vondemkamp" 
                  className="w-full h-auto"
                />
              </div>
              
              <Card className="border-primary/20 shadow-md card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3 text-primary">At a Glance</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start">
                      <span className="font-bold mr-2 text-foreground">Major:</span>
                      <span>Computer Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2 text-foreground">Year:</span>
                      <span>Senior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2 text-foreground">Research Focus:</span>
                      <span>AI Efficiency & Computational Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2 text-foreground">Future Goals:</span>
                      <span>Graduate studies in Machine Learning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">My Science Journey</h2>
                <p className="text-lg text-foreground/80 mb-4">
                  [Your story about how you came to study science at the university. What sparked your interest? Was there a particular moment or experience that led you to this path?]
                </p>
                <p className="text-lg text-foreground/80">
                  [Continue your personal story, discussing your academic journey and how you've evolved as a student and researcher.]
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Why This Research Matters to Me</h2>
                <p className="text-lg text-foreground/80 mb-4">
                  [Explain why you chose this particular research topic. Was there a personal connection? A gap in knowledge you noticed? A professor's influence?]
                </p>
                <p className="text-lg text-foreground/80">
                  [Discuss the personal significance of this research and how it aligns with your academic and career goals.]
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Future Aspirations</h2>
                <p className="text-lg text-foreground/80">
                  [Describe what you want to do with your degree after graduation. Are you planning to pursue graduate school, enter industry, teach, or something else? How does this research experience fit into those plans?]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
