// Motion;
import { motion, useMotionValue, useTransform, animate } from "motion/react";

// React Hooks;
import { useEffect } from "react";

export default function Counter({ to }: { to: number }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (value) =>
    Math.round(value).toLocaleString(),
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
    });

    return () => controls.stop();
  }, [count, to]);

  return <motion.p className="stats-numbers">{rounded}</motion.p>;
}
