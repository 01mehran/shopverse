export const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    rotate: 5,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeLeftVariant = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
    },
  },
};
