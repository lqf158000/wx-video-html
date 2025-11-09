<template>
  <div class="sky">
    <div
      v-for="(star, index) in stars"
      :key="'star-' + index"
      class="stars"
      :style="{
        top: star.top + 'px', 
        left: star.left + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        'animation-delay': star.delay + 's'
      }"
    ></div>
    <div
      v-for="(meteor, index) in meteors"
      :key="'meteor-' + index"
      class="meteor"
      :style="{
        top: meteor.startY + 'px',
        left: meteor.startX + '%',
        'animation-delay': meteor.delay + 's',
        'animation-duration': meteor.duration + 's',
        'transform': `rotate(${meteor.angle}deg)`,
        'width': meteor.length + 'px',
        '--angle': `${meteor.angle}deg`
      }"
    ></div>
    <div class="phases-container">
      <div class="phases-content">
        <div class="phases">
          &nbsp;&nbsp;&nbsp;&nbsp;hello，不知道你过的怎么样？<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;回想当初，那个时候我还很幼稚，你像个大姐姐，而我忘记照顾你。我向你真诚地，饱含歉意地道歉。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;这三年多仍然一直很挂念你，但又想念，又害怕，又内疚。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;柳絮纷飞时，总想起“全部都踩到”；<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;开口讲话时，总想起“三思而后说”；<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;打嗝不停时，总想起“含住水慢慢咽”；<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;准备礼物时，总想起“不能送单数”；<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;有些突兀，分享几首歌吧：<br/><br/>
          <strong>2022年12月22日《断了的弦》</strong>
          <video
            controls
            width="100%"
            style="border-radius: 8px;  background: #000;"
            src="../assets/breakLine.mp4"
          >
            您的浏览器不支持视频播放。
          </video>
          &nbsp;&nbsp;&nbsp;&nbsp;这首歌是分手后在bilibili听见一个up主的演奏版本，很好听，既是演唱会的变调版本，又能把副歌部分最抓人的重复旋律编进双声道。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;分开后我一个一个音符对照着弹的第n遍，也终于跌跌撞撞能够听一听了。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;同时这一年，我梦中出现的你都是：不转身，不理我，拒绝和我说话，拒绝和我交流。每次醒来我都很难过。 <br/><br/>
          <strong>2023年9月28日《我不配》</strong>
          <video
            controls
            width="100%"
            style="border-radius: 8px; background: #000;"
            src="../assets/notDeserveYou.mp4"
          >
            您的浏览器不支持视频播放。
          </video>
          &nbsp;&nbsp;&nbsp;&nbsp;这首歌是当初刚开始谈恋爱的时候，你说我们好像《我不配》里的样子偷偷谈恋爱。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;这首歌我练习了很久，还加了一段弦乐音轨进去。这段感情前调是《我不配》，终场是“我不配”。不论在路口等几个红绿灯，如果我不配，也会像MV的标题一样互相渐行渐远吧。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;这一年也经常梦见你，在这首歌全部学会并且整首整首练习熟练度时，隔一两天就会梦见一次，每次都很难过。后来在国庆放假前的9.28凌晨2点剪辑完了这首歌。<br/><br/>
          <strong>2023年12月22日《最长的电影》</strong>
          <video
            controls
            width="100%"
            style="border-radius: 8px;  background: #000;"
            src="../assets/longestMovie.mp4"
          >
            您的浏览器不支持视频播放。
          </video>
          &nbsp;&nbsp;&nbsp;&nbsp;2023年12月22日，不多不少，放映了三年，我票都还留着。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;23年冬天雪很大，总让我想起我们从mx&ss家回学校的公交车站：我们喝了百利甜；路边汽车的引擎盖上画了爱心；你穿着一件浅色毛毛外套；雪很大；我们一起在斜飘着雪的公交车站坐着等车；不冷。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;梦见故地重游，猛然回首，你就在身后不远处看着我，但怎么也不说话，不理我。<br/><br/>
          <strong>2024年5月2日《回到过去》</strong>
          <video
            controls
            width="100%"
            style="border-radius: 8px; background: #000;"
            src="../assets/callbackMe.mp4"
          >
            您的浏览器不支持视频播放。
          </video>
          &nbsp;&nbsp;&nbsp;&nbsp;“你想回到过去吗？”到现在我的回答还是“想”，但是不再让你伤心难过了。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;那段时间每次梦见你醒来都很难过。也不知道是因为难过醒来，还是醒来后很难过，再次睡去，你还会在梦里出现。如果梦是平行时空，那边的我也搞砸了吗。<br/><br/>
          <strong>2024年12月22日《我落泪情绪零碎》</strong>
          <video
            controls
            width="100%"
            style="border-radius: 8px;  background: #000;"
            src="../assets/breakingEmotion.mp4"
          >
            您的浏览器不支持视频播放。
          </video>
          &nbsp;&nbsp;&nbsp;&nbsp;他们都说这首歌是七里香的结尾。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;“原来诗跟离别可以没有结尾”，这首歌如是，结尾的最后一个音悬而未决，就这么没有结尾地结束了。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;最后一眼见到开心的你，是那年过年放假回家，你在火车站检票口向我挥手告别——招招手转身向前走，还能看见肩膀，能看见头发，最后只能看见人潮了。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;后来梦里的你渐渐和我讲话，每次梦里见到你，我都冲过去，但你都是冷冷的。唯一一次反常的梦是和你订婚，坐飞船到了你家小区，然后就醒来了，应该是梦境缺少实际素材了吧。<br/><br/><br/>


          &nbsp;&nbsp;&nbsp;&nbsp;分手后第一次找你，是喝了酒给你打电话，电话嘟嘟嘟的时候我也不知道如果接通了该说什么，最后电话也没接通。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;第二次，是我用wx加你，等待了一天，发现被拉黑了。害怕说的多错的多，我的加好友备注只写了：我是lqf。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;事不过三，这应该是最后一次鼓足勇气了吧。如果你觉得没必要，也由衷地祝你春、夏、秋、冬平安快乐。<br/>
          <div class="image-wrapper">
            <img src="../assets/img.jpeg"/>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;前几天，在梦里有一个小人偶，它告诉我"找到szw"，我抱住它我说你就是。它说不是，默默指向一边，另一个大人偶。我冲过去抱住它，只发现也不是你，迷迷糊糊又醒了...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarSky",
  data() {
    return {
      stars: Array(30).fill().map(() => ({
        top: Math.random() * window.innerHeight,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 5
      })),
      meteors: Array(3).fill().map(() => ({
        startX: 0,
        startY: Math.random() * (window.innerHeight * 0.5),
        angle: 230,
        delay: Math.random() * 20,
        duration: 5 + Math.random() * 10,
        length: 80 + Math.random() * 100
      }))
    };
  },
  created() {
    if (!localStorage.getItem('wx-video-login')) {
      this.$router.replace('login')
    }
  }
};
</script>

<style scoped>
.sky {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #000428, #003869);
  position: relative;
}

.stars {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkling 2s infinite alternate;
  box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.8);
}

.meteor {
  position: absolute;
  height: 2px;
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 1), 
    rgba(255, 255, 255, 0)
  );
  transform-origin: left center;
  animation: shooting linear infinite;
  filter: drop-shadow(0 0 5px white);
}
.phases-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden; /* 隐藏外部滚动条 */
}
.phases-content {
  width: min(90%, 700px); /* 更智能的宽度控制 */
  max-height: 80vh; /* 限制最大高度 */
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden; /* 为内部滚动做准备 */
}

.phases {
  padding: 2rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(15px, 2.5vw, 17px);
  line-height: 1.8;
  overflow-y: auto; /* 内部滚动 */
  max-height: 100%; /* 继承父级高度 */
  scrollbar-width: thin; /* 更细的滚动条 */
  
  /* 自定义滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  
  /* 段落样式 */
  p {
    margin-bottom: 1.2em;
    text-align: left; /* 左对齐更易读 */
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.image-wrapper {
  width: 100%;
  margin: 0 auto;   /* 居中显示 */
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

@keyframes twinkling {
  from { 
    opacity: 0.3;
    transform: scale(0.8);
  }
  to { 
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes shooting {
  0% { 
    transform: translateX(0) translateY(0) rotate(var(--angle));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% { 
    transform: translateX(1000px) translateY(1000px) rotate(var(--angle));
    opacity: 0;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .phases-content {
    width: 95%;
    max-height: 85vh;
  }
  
  .phases {
    padding: 1.5rem;
    font-size: clamp(14px, 3vw, 16px);
  }
}

@media (max-width: 480px) {
  .phases {
    padding: 1.2rem;
    line-height: 1.7;
  }
}
</style>
