Vue.createApp({
  data() {
    return {
      buttonText: "Turn the lights off",
    };
  },
  methods: {
    toggleSwitch() {
      if (this.buttonText === "Turn the lights off") {
        this.buttonText = "Turn the lights on";
      } else {
        this.buttonText = "Turn the lights off";
      }
    },
  },
}).mount("#app");
