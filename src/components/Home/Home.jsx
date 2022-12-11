function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row -md:mx-4 md:justify-between md:h-screen items-center">
      <div className="basis-1/2">
        <div className="flex flex-col text-center items-center justify-center my-2 -md:mt-8">
          <p className="text-xl md:text-2xl font-playfair">
            Hello, <span className="text-accent font-bold">I'm</span>
          </p>
          <h1 className="text-2xl md:text-5xl  text-accent font-playfair font-bold mb-2">
            Deveesh Shetty
          </h1>
          <p className=" mb-2 md:mb-4 text-xl">Frontend Developer and Artist</p>
          <p className="md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum
            quos animi omnis, veritatis aut ducimus veniam eveniet vel illo
            recusandae officiis quo commodi neque.
          </p>
        </div>
      </div>
      <div className="flex justify-center basis-1/2 my-2 md:my-16">
        <img
          src="https://source.unsplash.com/random?nature"
          alt="Deveesh Shetty"
          className="md:w-3/4 -md:h-72 aspect-square"
        />
      </div>
    </div>
  )
}

export default Home
