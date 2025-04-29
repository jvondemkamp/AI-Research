import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <Layout>
      <section className="hero-section" style={{ height: '40vh', minHeight: '300px' }}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Popular Science Article</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/research-article"
              className="p-6 border rounded-lg bg-primary/10 hover:bg-primary/20 transition"
            >
              <h2 className="text-xl font-bold">Research Article</h2>
              <p className="text-muted-foreground">Click to view the Popular Science Article PDF.</p>
            </Link>
            <Link
              to="/letter-to-editor"
              className="p-6 border rounded-lg bg-primary/10 hover:bg-primary/20 transition"
            >
              <h2 className="text-xl font-bold">Letter to the Editor</h2>
              <p className="text-muted-foreground">Click to view the Letter to the Editor PDF.</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Article;
