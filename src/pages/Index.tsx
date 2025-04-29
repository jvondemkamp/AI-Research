
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Mountain Image */}
      <section className="hero-section relative" style={{height: '70vh'}}>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('public/lovable-uploads/711a24a7-2031-4eb6-b046-06d3808adf5b.png')",
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="page-container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Your Scientific Research Topic</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Exploring the frontiers of [your specific research area] and its implications for [broader impact].
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/about">About Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/article">Read My Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Welcome to My Research Portfolio</h2>
            <p className="text-lg text-foreground/80 mb-6">
              This website presents my scientific research on [your research topic], exploring the challenges and opportunities in this fascinating field. Through rigorous analysis and investigation, I've developed insights that may contribute to our understanding of [specific aspect of your research].
            </p>
            <p className="text-lg text-foreground/80">
              Browse through my work to learn more about my research journey, methodologies, findings, and their potential impact on [relevant field or society].
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="page-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Explore My Research Journey</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Discover the complete story behind this research, from initial questions to methodology, findings, and conclusions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/poster">View Science Poster</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/article">Read Popular Science Article</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
