
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const References = () => {
  return (
    <Layout>
      <section className="hero-section" style={{height: '40vh', minHeight: '300px'}}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">References & Annotated Bibliography</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About My Research Sources</h2>
              <p className="text-lg text-foreground/80">
                The following annotated bibliography includes the key sources that have informed my research on [your research topic]. Each entry provides bibliographic information and a concise summary of the source's content, relevance, and value to my research.
              </p>
            </div>
            
            <Tabs defaultValue="all" className="mb-10">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Sources</TabsTrigger>
                <TabsTrigger value="peerReviewed">Peer-Reviewed</TabsTrigger>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="other">Other Sources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-8">
                  {/* Example Reference 1 */}
                  <Card className="border border-muted shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-2">[Author Last Name, First Initial. (Year). Title of article. Journal Name, Volume(Issue), Pages.]</h3>
                      <p className="text-sm text-muted-foreground mb-4">[Journal/Book/Source] • [Year] • [Type of Source]</p>
                      <div className="space-y-4 text-foreground/80">
                        <p><strong>Summary:</strong> [Brief summary of the source's main points or arguments.]</p>
                        <p><strong>Evaluation:</strong> [Assessment of the source's credibility, reliability, and relevance to your research.]</p>
                        <p><strong>Reflection:</strong> [How this source contributes to your understanding of the topic and how you've used it in your research.]</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Example Reference 2 */}
                  <Card className="border border-muted shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold mb-2">[Author Last Name, First Initial. (Year). Title of article. Journal Name, Volume(Issue), Pages.]</h3>
                      <p className="text-sm text-muted-foreground mb-4">[Journal/Book/Source] • [Year] • [Type of Source]</p>
                      <div className="space-y-4 text-foreground/80">
                        <p><strong>Summary:</strong> [Brief summary of the source's main points or arguments.]</p>
                        <p><strong>Evaluation:</strong> [Assessment of the source's credibility, reliability, and relevance to your research.]</p>
                        <p><strong>Reflection:</strong> [How this source contributes to your understanding of the topic and how you've used it in your research.]</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Additional references would go here */}
                  <p className="text-center text-muted-foreground">
                    [Replace these examples with your actual annotated bibliography entries]
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="peerReviewed">
                <p className="text-center text-lg text-muted-foreground py-8">
                  [Your peer-reviewed sources will appear here]
                </p>
              </TabsContent>
              
              <TabsContent value="books">
                <p className="text-center text-lg text-muted-foreground py-8">
                  [Your book sources will appear here]
                </p>
              </TabsContent>
              
              <TabsContent value="other">
                <p className="text-center text-lg text-muted-foreground py-8">
                  [Your other sources will appear here]
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Research Methodology</h2>
              <p>
                [Optional section where you can explain your research methodology, including how you selected your sources, what databases you used, and your criteria for inclusion.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default References;
