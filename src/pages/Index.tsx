
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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

      {/* Research Carousel Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="page-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Explore My Research</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="border-primary/20 shadow-lg card-gradient h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-[300px] justify-center">
                    <h3 className="text-xl font-bold mb-4">About Me</h3>
                    <p className="mb-6 text-foreground/80">Learn about my academic journey and why I'm passionate about this research.</p>
                    <Button asChild variant="outline">
                      <Link to="/about" className="inline-flex items-center">
                        Visit <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-primary/20 shadow-lg card-gradient h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-[300px] justify-center">
                    <h3 className="text-xl font-bold mb-4">References</h3>
                    <p className="mb-6 text-foreground/80">Browse through the academic sources that form the foundation of my research.</p>
                    <Button asChild variant="outline">
                      <Link to="/references" className="inline-flex items-center">
                        View References <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-primary/20 shadow-lg card-gradient h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-[300px] justify-center">
                    <h3 className="text-xl font-bold mb-4">Popular Science Article</h3>
                    <p className="mb-6 text-foreground/80">Read my article explaining the research in accessible terms.</p>
                    <Button asChild variant="outline">
                      <Link to="/article" className="inline-flex items-center">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-primary/20 shadow-lg card-gradient h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-[300px] justify-center">
                    <h3 className="text-xl font-bold mb-4">Science Poster</h3>
                    <p className="mb-6 text-foreground/80">View my research summarized in a visual presentation format.</p>
                    <Button asChild variant="outline">
                      <Link to="/poster" className="inline-flex items-center">
                        View Poster <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Featured Research Image */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient text-center">Featured Research</h2>
            <div className="glass overflow-hidden mb-6 p-4">
              <img 
                src="public/lovable-uploads/84c5ea2a-fee0-4c8c-a0ac-35397a5b5926.png" 
                alt="Research visualization" 
                className="w-full h-auto rounded shadow-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-foreground/80">A visualization from my research on [topic]</p>
              </div>
            </div>
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
