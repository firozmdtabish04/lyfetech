import {
  ShieldCheck,
  Zap,
  Building2,
  HardHat,
  Home,
  Cable,
  ClipboardCheck,
  TowerControl,
  ArrowRight,
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";
import aboutImg2 from "../../assets/7.jpeg";
import aboutImg1 from "../../assets/elepole.png";
import { Link } from "react-router-dom";

export default function About() {
  const missionPoints = [
    "Deliver high-quality engineering services with safety as the highest priority.",
    "Provide innovative and cost-effective engineering solutions.",
    "Build long-term relationships through trust, quality, and timely project delivery.",
    "Continuously improve through technology and skilled professionals.",
  ];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mt-20">
        {/* MAIN ABOUT SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutImg1}
                alt="Engineering Infrastructure"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-12 -right-8 z-20 hidden md:block">
              <img
                src={aboutImg2}
                alt="Technical Installation"
                className="w-72 h-48 object-cover rounded-xl shadow-2xl border-8 border-white"
              />
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 bg-yellow-100 border border-yellow-200 rounded-full">
              <p className="text-yellow-700 text-xs font-bold uppercase tracking-widest">
                About LYFETECH ODISHA PROJECTS
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Multidisciplinary Electrical Engineering <span className="text-yellow-500">&</span>{" "}
              Infrastructure Solutions
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              LYFETECH ODISHA PROJECTS PVT. LTD. is a premier engineering firm specializing in
              <span className="font-semibold text-slate-800"> Electrical, Civil, and Cable </span>
              services. We deliver high-quality engineering solutions for industrial, commercial,
              institutional, and infrastructure projects across Odisha.
            </p>

            {/* Expertise Mini-Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Zap className="text-yellow-500 shrink-0" size={22} />
                <span className="text-slate-700 font-semibold">
                  Electrical Engineering Services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TowerControl className="text-yellow-500 shrink-0" size={22} />
                <span className="text-slate-700 font-semibold">
                  Medium Voltage (MV) Installation Works
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="text-yellow-500 shrink-0" size={22} />
                <span className="text-slate-700 font-semibold">Civil Engineering Services</span>
              </div>

              <div className="flex items-center gap-3">
                <Cable className="text-yellow-500 shrink-0" size={22} />
                <span className="text-slate-700 font-semibold">Cable Laying Works</span>
              </div>

              <div className="flex items-center gap-3">
                <ClipboardCheck className="text-yellow-500 shrink-0" size={22} />
                <span className="text-slate-700 font-semibold">
                  Electrical Consultancy Services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Home className="text-yellow-500 shrink-0" size={22} />
                <span className="text-slate-700 font-semibold">
                  Residential Building Construction
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* VISION & MISSION SECTION */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-200">
              <Eye className="text-white" size={30} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become a leading engineering solutions provider by delivering innovative,
              sustainable, and reliable infrastructure projects that exceed customer expectations.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-900 p-10 rounded-2xl shadow-xl text-white">
            <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20">
              <Target className="text-black" size={30} />
            </div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={18} />
                  <p className="text-slate-300 text-sm md:text-base leading-snug">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
