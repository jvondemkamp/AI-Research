
import { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploader from '../components/FileUploader';
import DocumentViewer from '../components/DocumentViewer';

// PDF file paths (assuming they're in the public directory)
const ARTICLE_PDF = '/article.pdf';
const LETTER_PDF = '/letter.pdf';

// Pre-loaded article and letter content in HTML format as fallback
const ARTICLE_CONTENT = `
<h1>Climate Change and Its Effects on Alpine Ecosystems</h1>
<p class="text-muted-foreground">Published: April 15, 2025</p>
<p class="text-muted-foreground mb-8">Author: Jackson Vondemkamp, Department of Environmental Science</p>

<h2>Abstract</h2>
<p>This article explores the impact of climate change on alpine ecosystems, with a particular focus on plant diversity and adaptation mechanisms. Through a comprehensive analysis of data collected over a five-year period in the Rocky Mountains, we demonstrate that rising temperatures are causing significant shifts in vegetation zones and altering species composition. Our findings suggest that while some plant species show remarkable adaptive capacity, many specialized alpine species face extinction risks due to habitat loss and competition from advancing lower-elevation species.</p>

<h2>Introduction</h2>
<p>Alpine ecosystems represent some of the most vulnerable habitats to climate change globally. These high-elevation environments are characterized by extreme conditions including low temperatures, strong winds, high ultraviolet radiation, and short growing seasons. The specialized flora that inhabit these regions have evolved specific adaptations to survive these harsh conditions, but rising global temperatures are rapidly altering the environmental parameters that define these ecosystems.</p>

<p>Recent studies indicate that warming in alpine regions is occurring at rates two to three times faster than the global average. This accelerated warming is causing upward shifts in vegetation zones, changes in snowmelt timing, and altered precipitation patterns, all of which have profound implications for alpine biodiversity.</p>

<h2>Methodology</h2>
<p>Our research team established 24 monitoring plots across an elevation gradient (2,500-3,800m) in the central Rocky Mountains. Each plot was surveyed annually during peak growing season (July-August) from 2020 to 2025. We documented species composition, abundance, flowering phenology, soil temperature, and moisture content.</p>

<p>Additionally, we conducted experimental warming studies using open-top chambers (OTCs) to simulate future climate scenarios and assess plant responses to elevated temperatures. Physiological measurements, including photosynthetic rates and water-use efficiency, were taken for selected keystone species.</p>

<h2>Key Findings</h2>
<ul>
  <li>Upward migration: We observed an average upward shift of 29 meters per decade for alpine plant communities, with lower-elevation species expanding their ranges into previously unsuitable habitat.</li>
  <li>Phenological changes: Flowering times have advanced by an average of 7.2 days over the study period, with earlier snowmelt being the primary driver.</li>
  <li>Species composition: Previously rare thermophilic species have increased in abundance, while some cold-adapted specialists have declined significantly.</li>
  <li>Physiological adaptations: Several alpine species demonstrated remarkable plasticity in their photosynthetic pathways when subjected to experimental warming.</li>
</ul>

<h2>Implications</h2>
<p>Our findings highlight the rapid transformation occurring in alpine environments and the varied responses of plant species to warming conditions. While some species show promising adaptive capacity, many specialized alpine plants face significant threats from habitat compression as suitable climate zones shift upward beyond mountain summits.</p>

<p>Conservation strategies must account for these dynamic changes and prioritize connectivity between protected areas to facilitate species migration. Additionally, ex-situ conservation may be necessary for species with limited dispersal capabilities or those already restricted to summit habitats.</p>

<h2>Conclusion</h2>
<p>Alpine ecosystems are undergoing unprecedented change due to global warming. Our research provides crucial data documenting these transformations and offers insights into potential adaptation mechanisms. Continued long-term monitoring is essential to track ecological responses and inform conservation strategies in these sensitive environments.</p>
`;

const LETTER_CONTENT = `
<h1>Letter to the Editor</h1>
<p class="text-muted-foreground">Submitted to: Journal of Alpine Ecology</p>
<p class="text-muted-foreground mb-8">Date: March 30, 2025</p>

<p>Dear Editor,</p>

<p>I am writing in response to the recently published article by Dr. Elizabeth Chen titled "Climate Velocity in Mountain Ecosystems: A Global Analysis" (Vol. 42, Issue 3). While Dr. Chen's research provides valuable insights into the rate of climate-driven species movement globally, I believe there are important regional variations that warrant further discussion.</p>

<p>Our research team has been conducting intensive field studies in the Rocky Mountain alpine zones for the past five years. Our data indicate that species migration rates in this region are substantially higher than the global averages reported by Chen et al. Specifically, we have documented upward shifts averaging 29 meters per decade for vascular plants, nearly 40% higher than the rates reported in the global analysis.</p>

<p>Several factors may explain this discrepancy:</p>

<ol>
  <li>The Rocky Mountains have experienced temperature increases approximately 1.2°C higher than the global average since 2000, potentially accelerating ecological responses.</li>
  <li>The topographical complexity of the region creates numerous microclimate refugia that may temporarily mask extinction threats while facilitating rapid range shifts along elevation gradients.</li>
  <li>The relatively lower human disturbance at higher elevations in our study region may allow for more unimpeded species movement compared to more developed mountain regions included in the global dataset.</li>
</ol>

<p>Our findings suggest that climate change impacts on mountain ecosystems may be more immediate and severe than previously estimated in certain regions. This highlights the importance of incorporating fine-scale regional studies alongside global analyses when developing conservation strategies and climate adaptation policies.</p>

<p>We have recently submitted a manuscript detailing these findings and would welcome the opportunity to contribute to this important scientific discussion in your journal.</p>

<p>Sincerely,</p>
<p>Jackson Vondemkamp<br>Department of Environmental Science<br>University of Colorado</p>
`;

const Article = () => {
  const [view, setView] = useState<'overview' | 'article' | 'letter'>('overview');
  
  const showArticle = () => setView('article');
  const showLetter = () => setView('letter');
  const showOverview = () => setView('overview');
  
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
          {view === 'overview' && (
            <Tabs defaultValue="article" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="article">Research Article</TabsTrigger>
                <TabsTrigger value="letter">Letter to the Editor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="article" className="mt-6">
                <Card className="border-primary/20 card-gradient">
                  <CardContent className="p-6">
                    <FileUploader
                      onViewContent={showArticle}
                      label="View Research Article"
                      description="Click to read my published research on alpine ecosystem responses to climate change"
                      icon={<FilePdf className="mx-auto h-12 w-12 text-muted-foreground mb-4" />}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="letter" className="mt-6">
                <Card className="border-primary/20 card-gradient">
                  <CardContent className="p-6">
                    <FileUploader
                      onViewContent={showLetter}
                      label="View Letter to the Editor"
                      description="Click to read my response to a recent publication on climate velocity in mountain ecosystems"
                      icon={<FilePdf className="mx-auto h-12 w-12 text-muted-foreground mb-4" />}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
          
          {view === 'article' && (
            <DocumentViewer 
              title="Climate Change and Its Effects on Alpine Ecosystems" 
              pdfUrl={ARTICLE_PDF}
              content={ARTICLE_CONTENT} // Fallback content
              onBack={showOverview}
            />
          )}
          
          {view === 'letter' && (
            <DocumentViewer 
              title="Letter to the Editor - Journal of Alpine Ecology" 
              pdfUrl={LETTER_PDF}
              content={LETTER_CONTENT} // Fallback content
              onBack={showOverview}
            />
          )}
          
          {view === 'overview' && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">About My Popular Science Article</h2>
              <p className="text-lg text-foreground/80 mb-4">
                This article translates my technical research into accessible language for a broader audience. It covers the key findings and implications of my work without requiring specialized knowledge.
              </p>
              <p className="text-lg text-foreground/80">
                Select either document above to read the full content.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Article;
