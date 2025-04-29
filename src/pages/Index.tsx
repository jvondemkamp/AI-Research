import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <section className="hero-section" style={{ height: '50vh', minHeight: '300px' }}>
        <div className="page-container h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">AI Research Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            Jackson Vondemkamp
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container space-y-8">
          <h2 className="text-2xl font-bold">Welcome!</h2>
          <p className="text-lg text-foreground/80">
          This site covers research on Artificial Intelligence; covering recent developements along with use cases that are important!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/research-article"
              className="p-6 border rounded-lg bg-primary/10 hover:bg-primary/20 transition"
            >
              <h3 className="text-xl font-bold">Research Article</h3>
              <p className="text-muted-foreground">See my research article on AI's usage in the medical field.</p>
            </Link>
            <Link
              to="/letter-to-editor"
              className="p-6 border rounded-lg bg-primary/10 hover:bg-primary/20 transition"
            >
              <h3 className="text-xl font-bold">Letter to the Editor</h3>
              <p className="text-muted-foreground">View my pitch to Scientific American!</p>
            </Link>
            <Link
              to="/poster"
              className="p-6 border rounded-lg bg-primary/10 hover:bg-primary/20 transition"
            >
              <h3 className="text-xl font-bold">Science Poster</h3>
              <p className="text-muted-foreground">View my poster covering improvements on AI efficiency..</p>
            </Link>
            <Link
              to="/references"
              className="p-6 border rounded-lg bg-primary/10 hover:bg-primary/20 transition"
            >
              <h3 className="text-xl font-bold">References</h3>
              <p className="text-muted-foreground">Access the annotated bibliography for my research.</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
