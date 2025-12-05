// app/components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-28 px-16 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16">

        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Rimora</h2>

          <p className="text-lg leading-relaxed mb-6">
            Rimora Properties is a fast-rising real estate company based in Abuja, Nigeria, 
            committed to helping both first-time and seasoned investors acquire safe, strategic, 
            and FCDA-approved properties. Our mission is to simplify real estate investment by 
            focusing on transparency, trust, and long-term value.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Mission</h3>
          <p className="text-lg leading-relaxed">
            To provide Nigerians and diaspora investors with safe, verified, and FCDA-approved 
            land in Abuja — eliminating the fear of scams and ensuring long-term investment security.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Vision</h3>
          <p className="text-lg leading-relaxed">
            To become Africa’s most trusted land brokerage firm by championing transparency, consistency, 
            and digital innovation in the real estate market.
          </p>
        </div>

        {/* RIGHT SIDE — CORE VALUES */}
        <div className="space-y-8">

          <div className="p-6 rounded-xl shadow-lg bg-[#f9fafc]">
            <h4 className="text-xl font-semibold mb-2">Integrity</h4>
            <p className="text-gray-700">
              We do not cut corners. Every property must pass full verification before we recommend it to clients.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-[#f9fafc]">
            <h4 className="text-xl font-semibold mb-2">Transparency</h4>
            <p className="text-gray-700">
              No hidden charges, no half-truths, no vague descriptions. We show documents and complete clarity upfront.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-[#f9fafc]">
            <h4 className="text-xl font-semibold mb-2">Professionalism</h4>
            <p className="text-gray-700">
              We maintain excellence in communication, documentation handling, and after-sales support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
