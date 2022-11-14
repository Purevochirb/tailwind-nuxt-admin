<template>
  <aside class="fixed h-full w-64 bg-primary z-20">
    <header class="h-16 px-4 flex items-center justify-center">
      <p class="text-white text-sm">Welcome {{ userName }}!</p>
      <Camera @click="add()" color="var(--color-warning)" size="1rem" />
    </header>
    <ul class="absolute text-white overflow-auto z-20 w-full">
      <nuxt-link :to="'/dashboard'">
        <li
          :key="index"
          class="cursor-pointer py-2 px-8 hover:bg-slate-100 hover:text-primary"
        >
        dashboard
        </li>
      </nuxt-link>
      <template v-for="(menu, index) in menus">
        <div :key="index">
          <nuxt-link :to="menu.path">
            <li
              :key="index"
              class="
                cursor-pointer
                py-2
                px-8
                hover:bg-slate-100 hover:text-primary
              "
            >
              <div class="flex justify-between">
                <div class="flex items-center">
                  <Camera
                    @click="add()"
                    color="white"
                    size="1rem"
                    class="mr-2"
                  />

                  <span> {{ menu.name }} </span>
                </div>
                <span class="text-white" v-if="menu.child">
                  <v-icon name="caret-down" class="text-white" />
                </span>
              </div>
            </li>
          </nuxt-link>
          <ul v-if="menu.child">
            <template v-for="(child, index) in menu.child">
              <nuxt-link :key="index" :to="child.path">
                <li
                  :key="index"
                  class="cursor-pointer py-2 px-8 hover:bg-slate-600"
                >
                  {{ child.name }}
                </li>
              </nuxt-link>
            </template>
          </ul>
        </div>
      </template>
    </ul>
    <img
      class="absolute bottom-0 z-10 opacity-25 h-[100vh] w-full"
      src="sidebar.jpg"
    />
  </aside>
</template>

<script>
import { Camera } from "lucide-vue";
import gsap from "gsap";

export default {
  components: { Camera },

  props: {
    menuss: {
      type: Array,
      default: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Calendar", path: "/calendar" },
        { name: "Chat", path: "/chat" },
        { name: "Email", path: "/email" },
        { name: "Ecommerce", path: "/ecommerce" },
        { name: "File manager", path: "/fileManager" },
        //pages
        { name: "Profile", path: "/profile" },
        { name: "Pricing", path: "/pricing" },
        { name: "Invoice", path: "/invoice" },
        { name: "FAQ", path: "/faq" },
        { name: "TimeLine", path: "/timeline" },
        { name: "CRUD", path: "/crud" },
        { name: "Wizards", path: "/wizard" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Error page", path: "/errorpage" },
        //components
        {
          name: "Uicomponents",
          path: "/components",
          child: [
            { name: "Buttons", path: "/components/buttons" },
            { name: "Checkboxes", path: "/components/checkboxes" },
            { name: "Inputs", path: "/components/inputs" },
          ],
        },
      ],
    },
    userName: {
      default: "B.Purev-Ochir",
    },
  },
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    this.handle();
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.01,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.01,
        onComplete: done,
      });
    },
    add() {
      this.menus.push(this.menuss[10]);
    },
    handle() {
      this.menuss.forEach((item, index) => {
        setTimeout(() => {
          this.menus.push(item);
        }, index * 10);
      });

      // setTimeout(()=>{
      //   this.menus.push(this.menuss[0])
      // }, 1000)
      //   setTimeout(()=>{
      //   this.menus.push(this.menuss[1])
      // }, 2000)

      //   setTimeout(()=>{
      //   this.menus.push(this.menuss[2])
      // }, 3000)

      // setTimeout(()=>{
      //   this.menus.splice(0, 1)
      // }, 5000)
      //   setTimeout(()=>{
      //   this.menus.splice(0, 1)
      // }, 6000)

      //   setTimeout(()=>{
      //   this.menus.splice(0, 1)
      // }, 7000)
    },
  },
};
</script>

<style>
/* 1. declare transition */
.fades-move,
.fades-enter-active,
.fades-leave-active {
  transition: all 0.5s ease;
}

/* 2. declare enter from and leave to state */
.fades-enter-from,
.fades-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fades-leave-active {
  position: absolute;
}

@keyframes content {
  0% {
    left: -100px;
  }
  100% {
    left: 0px;
  }
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
</style>