export const breadCrumbContainerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const breadCrumbRouteVarinat = {
  hidden: {
    opacity: 0,
    x: -10,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
