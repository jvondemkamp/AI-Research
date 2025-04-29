
import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Poster = () => {
  const [showFullPoster, setShowFullPoster] = useState(false);
  
  return (
    <Layout>
      <section className="hero-section" style={{height: '40vh', minHeight: '300px'}}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Science Poster</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-lg text-foreground/80 mb-6">
              This research poster presents my work on making AI more efficient through alternative training pipelines that reduce computational demands while maintaining performance standards.
            </p>
          </div>
          
          <div className="glass overflow-hidden mb-10 border border-primary/20">
            <div className="aspect-[4/3] flex items-center justify-center p-4">
              <img 
                src="/lovable-uploads/84c5ea2a-fee0-4c8c-a0ac-35397a5b5926.png" 
                alt="Research Poster on AI Efficiency" 
                className="max-h-[80vh] object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setShowFullPoster(true)}
              />
            </div>
            <div className="p-4 flex justify-center">
              <Button variant="outline" onClick={() => setShowFullPoster(true)}>
                View Full Size
              </Button>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">About This Poster</h2>
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p>
                This poster summarizes my research into AI efficiency, specifically investigating the DeepSeek-R1-Zero training pipeline that significantly reduces computational resources required for large language models while maintaining competitive performance with industry standards.
              </p>
              <p>
                The research demonstrates that state-of-the-art language capabilities don't necessarily require massive computational budgets, opening opportunities for wider AI adoption and development with reduced environmental impact.
              </p>
              <h3 className="text-xl font-semibold mt-8 text-primary">Poster Contents</h3>
              <ul className="space-y-2">
                <li><strong className="text-primary/90">Research Question:</strong> How can we develop Large Language Models that require less computational resources while maintaining high performance?</li>
                <li><strong className="text-primary/90">Methodology:</strong> Supervised Fine-Tuning was removed and replaced with a Cold Start strategy using Chain-of-Thought traces from larger models.</li>
                <li><strong className="text-primary/90">Results:</strong> DeepSeek-R1-Zero matched results against GPT-3.5 while requiring significantly fewer resources.</li>
                <li><strong className="text-primary/90">Conclusions:</strong> High accuracy AI models can be developed without the heavyweight infrastructure previously thought necessary.</li>
                <li><strong className="text-primary/90">Implications:</strong> This approach enables more researchers and organizations to participate in AI development, enhances privacy through potential on-device deployment, and reduces energy consumption.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showFullPoster} onOpenChange={setShowFullPoster}>
        <DialogContent className="max-w-screen-lg max-h-[90vh] p-2 bg-black border-primary/20">
          <div className="h-full w-full flex justify-center">
            <img 
              src="/lovable-uploads/84c5ea2a-fee0-4c8c-a0ac-35397a5b5926.png" 
              alt="Research Poster on AI Efficiency" 
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Poster;
