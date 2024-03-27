Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    placeMouse(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    removeFruit(removeFruit) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== removeFruit;
      });
    },
  },
}).mount("#app");
