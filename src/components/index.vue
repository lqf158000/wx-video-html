<template>
  <div class="sky">
    <div
      v-for="(star, index) in stars"
      :key="'star-' + index"
      class="stars"
      :style="{ top: star.top + 'px', left: star.left + '%' }"
    ></div>
    <div
      v-for="(meteor, index) in meteors"
      :key="'meteor-' + index"
      class="meteor"
      :style="{ top: meteor.top + 'px', left: meteor.left + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "StarSky",
  data() {
    return {
      stars: [
        { top: 50, left: 20 },
        { top: 80, left: 40 },
        { top: 100, left: 60 },
        { top: 120, left: 80 },
        { top: 150, left: 30 }
      ],
      meteors: [
        { top: -150, left: 50 }
      ]
    };
  }
};
</script>

<style scoped>
.sky {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: black;
  position: relative;
}

.stars {
  width: 2px;
  height: 2px;
  background: white;
  position: absolute;
  animation: twinkling 2s infinite alternate;
}

.meteor {
  position: absolute;
  width: 3px;
  height: 150px;
  background: linear-gradient(white, rgba(255, 255, 255, 0));
  animation: shooting 2s infinite ease-in-out;
}

@keyframes twinkling {
  from { opacity: 0.3; }
  to { opacity: 1; }
}

@keyframes shooting {
  0% { top: -150px; left: 50%; }
  25% { top: 50%; left: 65%; }
  50% { top: 150%; left: 80%; }
  100% { top: -150px; left: 50%; }
}
</style>
