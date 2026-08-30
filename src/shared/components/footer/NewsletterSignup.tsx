// Motion Component;
import { motion } from "motion/react";

// Icons;
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <section>
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute -top-20 right-3 left-3 mx-auto flex max-w-7xl flex-col items-center justify-between space-y-10 rounded-3xl bg-black p-8 text-white md:flex-row md:space-y-0 lg:p-12 2xl:max-w-350"
      >
        <div>
          <p className="font-IntegralCF max-w-150 pr-8 text-[32px] leading-9 font-bold md:text-[40px] md:leading-11">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
        </div>

        <form className="relative flex w-full max-w-77 flex-col items-center gap-2">
          <input
            type="text"
            placeholder="Enter your email address"
            className="rounded-0 w-full rounded-full bg-white px-12 py-2 text-black outline-0 placeholder:text-black/60"
          />

          <span className="absolute top-2.5 left-3 text-gray-500">
            <Mail size={20} />
          </span>

          <button className="w-full rounded-full bg-white py-2 font-medium text-black">
            Subscribe to Newsletter
          </button>
        </form>
      </motion.section>
    </section>
  );
}
