// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8 text-center">
        {/* Name and Title */}
        <h1 className="text-4xl font-bold mb-2 text-blue-600">Sneha</h1>
        <h2 className="text-xl font-semibold mb-4">Projects & Web Development</h2>

        {/* About Section */}
        <p className="text-gray-700 mb-6">
          Passionate about building responsive, user-friendly websites and bringing ideas to life through clean, modern code.
          I love learning new web technologies and crafting digital experiences that matter.
        </p>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Skills</h3>
          <ul className="list-disc list-inside text-left inline-block">
            <li>HTML, CSS, JavaScript</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js & Express</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Contact</h3>
          <p>Email: <a href="mailto:sneha@example.com" className="text-blue-600 hover:underline">sneha@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/sneha" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/sneha</a></p>
          <p>GitHub: <a href="https://github.com/sneha" target="_blank" className="text-blue-600 hover:underline">github.com/sneha</a></p>
        </div>
      </div>
    </main>
  );
}
