const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-left">
      <h1 className="text-4xl font-bold mb-6 text-primary">How ReWear Works</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-2">1. Discover Pre-loved Fashion</h2>
        <p className="text-muted-foreground">
          Browse through a wide selection of second-hand clothes uploaded by the community. Use filters to find your style, size, and occasion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-2">2. Earn Points by Donating</h2>
        <p className="text-muted-foreground">
          Upload your own unused clothes. Once approved, you'll earn ReWear points which can be used to shop for other items.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-2">3. Redeem & Rewear</h2>
        <p className="text-muted-foreground">
          Use your earned points to "buy" clothes from other users. No money involved — just a circular, sustainable exchange system.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-2">4. Track Your Impact</h2>
        <p className="text-muted-foreground">
          View your dashboard to track how many items you've reused, donated, and the environmental impact you've made.
        </p>
      </section>
    </div>
  );
};

export default HowItWorks;
