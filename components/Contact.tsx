export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[4px] text-gray-400 mb-4">
          Get Started
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Ready To Transform?
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Apply today and begin your fitness journey with
          personalized coaching and accountability.
        </p>

        <a
          href="https://wa.me/919720229969"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-white
            text-black
            px-10
            py-4
            rounded-full
            font-bold
            hover:bg-gray-200
            transition
          "
        >
          Apply Via WhatsApp
        </a>

      </div>
    </section>
  );
}