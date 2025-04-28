
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Poster = () => {
  return (
    <Layout>
      <section className="hero-section" style={{height: '40vh', minHeight: '300px'}}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Science Poster</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-lg text-foreground/80 mb-6">
              This research poster presents a visual summary of my work on [your research topic]. It includes my methodology, key findings, and conclusions in a format designed for academic conferences and presentations.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg overflow-hidden mb-10">
            <div className="aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-muted-foreground mb-4">Your Research Poster</p>
                <p className="text-muted-foreground mb-6">(Upload your poster image here)</p>
                <Button variant="outline">View Full Size</Button>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About This Poster</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                [Provide a 50-100 word explanation of your poster. Describe what the poster is about, the key research question it addresses, and its significance in your field of study.]
              </p>
              <p>
                [You might also briefly explain the process of creating the poster and how it represents your research findings visually.]
              </p>
              <h3 className="text-xl font-semibold mt-8">Poster Contents</h3>
              <ul>
                <li><strong>Research Question:</strong> [Brief description]</li>
                <li><strong>Methodology:</strong> [Brief description]</li>
                <li><strong>Results:</strong> [Brief description]</li>
                <li><strong>Conclusions:</strong> [Brief description]</li>
                <li><strong>Implications:</strong> [Brief description]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Poster;
