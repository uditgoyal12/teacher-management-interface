export default function Sidebar() {
  return (
    <aside className="hidden md:block fixed top-0 left-0 h-full w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li className="text-blue-600 font-semibold">Teachers</li>
        <li className="text-gray-600">Classes</li>
        <li className="text-gray-600">Settings</li>
      </ul>
    </aside>
  );
}
