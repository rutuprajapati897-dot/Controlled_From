
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStudent({ name, roll, email, course });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-800 to-pink-600 p-6">
      <div className="mx-auto grid max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

        <div className="flex flex-col justify-center bg-indigo-950 p-8 text-white">
          <div className="mb-5 text-5xl">🎓</div>
          <h1 className="text-4xl font-extrabold">
            Student Portal
          </h1>
          <p className="mt-4 leading-7 text-indigo-200">
            Begin your learning journey today.
            Register your details and join our
            student community.
          </p>
          <div className="mt-8 rounded-xl bg-white/10 p-4">
            <p className="text-lg font-semibold">
              Learn. Grow. Achieve.
            </p>
            <p className="mt-1 text-sm text-indigo-200">
              Your future starts here!
            </p>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="mb-6 mt-2 text-sm text-gray-500">
            Fill in your student information.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-purple-500"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-purple-500"
              placeholder="Roll Number"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              required
            />

            <input
              type="email"
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-purple-500"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <select
              className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-purple-500"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">Choose Course</option>
              <option>BCA</option>
              <option>B.Tech IT</option>
              <option>B.Sc</option>
              <option>MCA</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Register Now →
            </button>
          </form>

          {student && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="mb-3 font-bold text-green-700">
                ✓ Registration Successful
              </h3>
              <p><b>Name:</b> {student.name}</p>
              <p><b>Roll No:</b> {student.roll}</p>
              <p className="break-words"><b>Email:</b> {student.email}</p>
              <p><b>Course:</b> {student.course}</p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-white/80">
        © 2026 Student Portal | React + Tailwind CSS
      </p>
    </div>
  );
}

export default App;
