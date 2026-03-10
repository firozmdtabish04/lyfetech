import brandLogo from "../../assets/image.png";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="flex flex-col items-center gap-6 p-10 bg-white shadow-xl rounded-2xl">
        {/* Logo */}
        <img src={brandLogo} alt="Lyient CRM Logo" className="w-48 object-contain animate-pulse" />

        {/* Spinner */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-blue-200"></div>
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-gray-600 text-sm tracking-wide">
          Developed by <span className="font-semibold text-blue-700">Tabish Firoz</span>
        </p>
      </div>
    </div>
  );
}
