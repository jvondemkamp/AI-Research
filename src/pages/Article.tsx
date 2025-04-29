
import { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploader from '../components/FileUploader';
import DocumentViewer from '../components/DocumentViewer';

const Article = () => {
  const [articleFile, setArticleFile] = useState<File | null>(null);
  const [letterFile, setLetterFile] = useState<File | null>(null);
  
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
          <Tabs defaultValue="article" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="article">Research Article</TabsTrigger>
              <TabsTrigger value="letter">Letter to the Editor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="article" className="mt-6">
              {!articleFile ? (
                <Card className="border-primary/20 card-gradient">
                  <CardContent className="p-6">
                    <FileUploader
                      onFileUpload={setArticleFile}
                      label="Upload Research Article"
                    />
                  </CardContent>
                </Card>
              ) : (
                <DocumentViewer file={articleFile} title="Research Article" />
              )}
            </TabsContent>
            
            <TabsContent value="letter" className="mt-6">
              {!letterFile ? (
                <Card className="border-primary/20 card-gradient">
                  <CardContent className="p-6">
                    <FileUploader
                      onFileUpload={setLetterFile}
                      label="Upload Letter to the Editor"
                    />
                  </CardContent>
                </Card>
              ) : (
                <DocumentViewer file={letterFile} title="Letter to the Editor" />
              )}
            </TabsContent>
          </Tabs>
          
          {!articleFile && !letterFile && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">About My Popular Science Article</h2>
              <p className="text-lg text-foreground/80 mb-4">
                This article translates my technical research into accessible language for a broader audience. It covers the key findings and implications of my work without requiring specialized knowledge.
              </p>
              <p className="text-lg text-foreground/80">
                Upload your article using the form above to display it here. The document viewer supports PDF, Word, and text formats.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Article;
