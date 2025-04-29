import Layout from '../components/Layout';
import DocumentViewer from '../components/DocumentViewer';

const LETTER_PDF = '/Letter to the Editor.pdf';

const LetterToEditor = () => {
  return (
    <Layout>
      <section className="hero-section" style={{ height: '40vh', minHeight: '300px' }}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Letter to the Editor</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container">
          <DocumentViewer pdfUrl={LETTER_PDF} />
        </div>
      </section>
    </Layout>
  );
};

export default LetterToEditor;
