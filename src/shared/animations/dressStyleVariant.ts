export const dressStyleContainerVariant = {
  hidden: {
    opacity: 1,
  },

  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const dressStyleItemVariant = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};
