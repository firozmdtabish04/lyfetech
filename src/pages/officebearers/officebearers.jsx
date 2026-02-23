export default function OfficeBearers() {
  const officeBearers = [
    {
      name: "Akhil Kumar",
      role: "President",
      image: "https://i.pravatar.cc/150?img=1",
      phone: "+91 9876543210",
      email: "president@lyfetech.in",
    },
    {
      name: "Rahul Sharma",
      role: "Vice President",
      image: "https://i.pravatar.cc/150?img=2",
      phone: "+91 9876543211",
      email: "vicepresident@lyfetech.in",
    },
    {
      name: "Priya Singh",
      role: "Secretary",
      image: "https://i.pravatar.cc/150?img=3",
      phone: "+91 9876543212",
      email: "secretary@lyfetech.in",
    },
    {
      name: "Amit Das",
      role: "Treasurer",
      image: "https://i.pravatar.cc/150?img=4",
      phone: "+91 9876543213",
      email: "treasurer@lyfetech.in",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">Office Bearers</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {officeBearers.map((person, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition duration-300 text-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-400"
            />

            <h2 className="text-xl font-semibold">{person.name}</h2>
            <p className="text-blue-400 mb-2">{person.role}</p>

            <p className="text-sm text-slate-400">{person.phone}</p>
            <p className="text-sm text-slate-400">{person.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
