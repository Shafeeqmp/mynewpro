export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-black dark:bg-gray-900">
      <div className="bg-white p-6 rounded shadow w-80">
      <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
      <label htmlFor="userName" className="block mb-1">User_Name</label>
      <input type="text" id="userName" className="border w-full p-2 mb-3 rounded" />
      <label htmlFor="Password" className="block mb-1">Password</label>
      <input type="password" id="password" className="border w-full p-2 mb-4 rounded" />
      <button className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600">
        Login
      </button>
      </div>
    </div>
  );
}
