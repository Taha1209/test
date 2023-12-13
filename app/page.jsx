import Feed from "@components/Feed";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powred Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is a open-source AI promting tool for modern world to
        discover, create and share creative prompts
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default HomePage;
