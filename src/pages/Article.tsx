
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Article = () => {
  return (
    <Layout>
      <section className="hero-section" style={{height: '40vh', minHeight: '300px'}}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Popular Science Article</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <Card className="border border-primary/20 shadow-lg overflow-hidden mb-10 card-gradient">
              <div className="h-64 bg-muted/30 flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Feature Image for Your Article</p>
              </div>
              
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold font-heading text-center mb-2 text-gradient">Making AI More Accessible</h2>
                <p className="text-muted-foreground text-center mb-8">How efficient training methods are democratizing artificial intelligence</p>
                
                <div className="prose prose-lg max-w-none text-foreground/90">
                  <p className="font-medium text-xl leading-relaxed">
                    The AI world is experiencing a radical shift. While tech giants pour billions into training ever-larger language models, a parallel revolution is unfolding: creating powerful AI with a fraction of the computational resources.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8">Introduction to Resource-Efficient AI</h3>
                  <p>
                    [First section of your article that provides background information and context for your topic. Make it accessible to a general audience while still being scientifically accurate.]
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8">The Science Behind Efficient Training</h3>
                  <p>
                    [Explain the scientific principles or findings in clear, accessible language. Use analogies or relatable examples where appropriate.]
                  </p>
                  <p>
                    [Continue with more detailed but still accessible explanation of the science.]
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8">Why This Matters</h3>
                  <p>
                    [Explain the significance and implications of this research. How might it affect people's lives, technology, or our understanding of the world?]
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8">Looking to the Future</h3>
                  <p>
                    [Discuss future directions, unanswered questions, or potential applications of this research.]
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-8">Conclusion</h3>
                  <p>
                    [Summarize key points and end with a thought-provoking statement or call to action.]
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="border-t border-primary/20 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">About This Article</h3>
              <p className="text-foreground/80">
                This popular science article was written as part of my research project on AI efficiency. It aims to translate complex technical concepts about machine learning and computational efficiency into accessible language for a general audience while maintaining scientific accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Article;
