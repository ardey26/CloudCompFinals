

function Home() {

  return (
    <div className="grid md:grid-cols-2 gap-4">
    <section className="border border-black rounded-lg">
      <h1 className="font-bold text-4xl py-4 border-b border-black bg-red-300"> Welcome to our todo list!</h1>
      <h3 className="my-4"> The Ultimate Cloud-Based Task Manager for Students. Stay organized, boost productivity, and collaborate seamlessly on projects with our intuitive todo list application.</h3>
    </section>
    <section></section>
    <section></section>
    <section className=" border border-black rounded-lg">
      <h1 className="font-bold text-4xl py-4 bg-indigo-300 border-b border-black"> Key Features</h1>
      <ul className="my-4 text-left px-4">
        <li> > Cloud-Based Access: Manage your tasks from anywhere.</li>
        <li> > Collaboration: Easily work on projects with your team.</li>        
      </ul>
    </section>
    <section></section>
    <section></section>
    <section className=" border border-black rounded-lg">
      <h1 className="font-bold text-4xl py-4 bg-green-300 border-b border-black"> How It Works</h1>
      <ul className="my-4 text-left px-4">
        <li> > Click on the "Todo" option on top</li>
        <li> > Write on the text input </li>        
        <li> > Click on submit! </li>        
      </ul>
    </section>
    </div>
  )
}

export default Home;
