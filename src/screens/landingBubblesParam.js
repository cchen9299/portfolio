const param = {
  particles: {
    color: {
      animation: {
        enable: true,
        speed: 50,
        sync: true,
      },
      value: '#f00',
    },
    collisions: {
      overlap: false,
      mode: 'bounce',
    },
    number: {
      value: 10,
      density: {
        enable: false,
      },
    },
    size: {
      value: 100,
      random: {
        enable: true,
        minimumValue: 10,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: 'top',
      out_mode: 'out',
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: ['attract', 'grab'],
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      repulse: {
        distance: 500,
        duration: 10,
        easing: 'ease-out-circ',
      },
      grab: {
        distance: 500,
      },
      attract: {
        distance: 500,
        duration: 1,
        maxSpeed: 100,
        easing: 'ease-out-sin',
      },
    },
  },
};

export default param;
