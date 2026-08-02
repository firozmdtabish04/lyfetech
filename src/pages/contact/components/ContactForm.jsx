import { User, Phone, Mail, MapPin, Headset, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid: Stacks on mobile (1 column), side-by-side on lg (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1">
            <p className="text-amber-600 font-semibold uppercase tracking-wide text-sm">
              Need help?
            </p>

            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
              Fill out the form and we'll
              <br className="hidden sm:block" /> get back to you shortly.
            </h2>

            <form className="mt-8 space-y-4 md:space-y-6">
              <Input icon={<User size={18} />} placeholder="Enter Your Name" />
              <Input icon={<Phone size={18} />} placeholder="Phone Number" />
              <Input icon={<Mail size={18} />} placeholder="Email" type="email" />

              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm"
              />

              <button className="flex items-center justify-center gap-2 w-full rounded-lg bg-slate-900 py-4 text-lg font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98]">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <p className="text-amber-600 font-semibold uppercase tracking-wide text-sm">
                Contact Details
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold text-slate-900">
                How can we help you?
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Have questions or need assistance? We are just a message away.
              </p>
            </div>

            <div className="mt-10 space-y-6 md:space-y-8">
              <Info
                icon={<Headset className="w-6 h-6 md:w-8 md:h-8" />}
                title="Have any queries?"
                value="+91 7855004500"
              />
              <Info
                icon={<Phone className="w-6 h-6 md:w-8 md:h-8" />}
                title="Office Contact"
                value="+91 674 254 7850"
              />
              <Info
                icon={<Mail className="w-6 h-6 md:w-8 md:h-8" />}
                title="Write Email"
                value="info@lyfetech.in"
              />
              <Info
                icon={<MapPin className="w-6 h-6 md:w-8 md:h-8" />}
                title="Address"
                value={`Ground Floor, Plot No. 892/5984/5983,\nPalasuni, Rasulgarh,\nBhubaneswar, Odisha - 751025`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Responsive Input Component
 */
function Input({ icon, placeholder, type = "text" }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-600 transition-colors">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 py-3 md:py-4 pl-12 pr-5 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm"
      />
    </div>
  );
}

/**
 * Responsive Info Card Component
 */
function Info({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4 md:gap-6">
      {/* Icon Container: Smaller on mobile, larger on desktop */}
      <div className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-sm border border-amber-100">
        {icon}
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-1 whitespace-pre-line text-sm md:text-base text-gray-600 leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );
}
