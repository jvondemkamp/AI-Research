import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section className="hero-section" style={{ height: '40vh', minHeight: '300px' }}>
        <div className="page-container h-full flex items-center">
          <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-multiply"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="page-container grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80">
              Hi, I’m <strong>Jackson Vondemkamp</strong>.
            </p>
            <p className="text-lg text-foreground/80">
              I’m a Computer Science student at the University of Colorado Boulder, specializing in full-stack development and entrepreneurial tech solutions. I’m building projects with the goal of launching startups—and I’m excited about where the future of AI and product development is heading.
            </p>
            <p className="text-lg text-foreground/80">
              Growing up, technology has always caught my interest! Learning about the inner workings of software is something that CU Boulder has allowed me to explore further.
            </p>
            <p className="text-lg text-foreground/80">
              More recently, I’ve become fascinated by how AI intersects with entrepreneurship—how tools like ChatGPT can change industries, or how data can drive better business decisions. It’s no longer just about building apps for me; it’s about creating products that solve real problems with teams I believe in.
            </p>
            <p className="text-lg text-foreground/80">
              As of recently, I've been working on startups! You can learn more about this on{' '}
              <a
                href="https://jacksonvondemkamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                jacksonvondemkamp.com
              </a>.
            </p>
          </div>
          <div>
            <img
              src="/IMG_7534.jpg"
              alt="Jackson Vondemkamp"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
