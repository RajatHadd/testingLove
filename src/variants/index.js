const firstCont = {
  hidden: { x: -89, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "fadeIn",
      duration: 0.8
    }
  }
};
const secondCont = {
  hidden: { x: 89, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "fadeIn",
      duration: 0.8
    }
  }
};
const heartGify = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "fadeIn",
      duration: 1.3
    },
    scale: [1.3, 1]
  }
};
const textField = {
  firstState: { x: 0, scale: 1, rotate: 0 },
  activeState: {
    scale: 1.1
  },
  bounceState: {
    rotate: [5, -5, 0],
    transition: {
      type: "spring",
      bounce: 20
    }
  }
};
const logo = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      type: "fadeIn",
      delay: 0.05,
      staggerChildren: 0.09
    }
  }
};
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      type: "fadeIn",
      delay: 0.005,
      staggerChildren: 0.009
    }
  }
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export { firstCont, secondCont, heartGify, textField, letter, sentence, logo };
