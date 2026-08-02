import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const contactData = [
  {
    id: "01",
    icon: MapPin,
    title: "Visit Our Office",
    value: "Ground Floor, Plot No. 892/5984,\nPalasuni, Bhubaneswar, Odisha",
    link: "https://maps.google.com",
    action: "Directions",
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500",
  },
  {
    id: "02",
    icon: Phone,
    title: "Call Us",
    value: "+91 7855004500",
    link: "tel:+917855004500",
    action: "Call Now",
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500",
  },
  {
    id: "03",
    icon: Mail,
    title: "Email Us",
    emails: [{ label: "info@lyfetech.in", href: "mailto:info@lyfetech.in" }],
    action: "Send Email",
    color: "from-blue-500 to-cyan-600",
    iconBg: "bg-sky-500",
  },
  {
    id: "04",
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat\n9:00 AM - 6:30 PM",
    action: "Business Hours",
    color: "from-purple-500 to-pink-600",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
];

const ContactCards = () => {
  return (
    <section className="relative bg-slate-50 py-12 lg:py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Compact Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reach Out To Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactData.map((item) => {
            const Icon = item.icon;
            const isWorkingHours = item.id === "04";

            return (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {/* Slimmer Top Color Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />

                {/* Smaller Ghost Numbering */}
                <span className="absolute right-6 top-6 text-4xl font-black text-slate-50 select-none group-hover:text-slate-100 transition-colors">
                  {item.id}
                </span>

                <div className="p-6 lg:p-7 flex flex-col h-full relative z-10">
                  {/* Smaller Icon Box */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl text-white shadow-md mb-5 transition-transform duration-500 group-hover:scale-105 ${item.iconBg}`}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Title & Divider */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="mt-2 h-1 w-10 bg-orange-500 rounded-full" />

                  {/* Compact Content Area */}
                  <div className="mt-4 text-slate-600 text-sm lg:text-base font-medium leading-snug">
                    {item.emails ? (
                      <div className="space-y-1">
                        {item.emails.map((e) => (
                          <a key={e.label} href={e.href} className="block hover:text-orange-500">
                            {e.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="whitespace-pre-line">{item.value}</p>
                    )}
                  </div>

                  {/* Tighter Footer Action */}
                  <div className="mt-6">
                    {isWorkingHours ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                        <Clock size={14} />
                        {item.action}
                      </div>
                    ) : (
                      <a
                        href={item.link || (item.emails && item.emails[0].href)}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md shadow-orange-100"
                      >
                        {item.action}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
