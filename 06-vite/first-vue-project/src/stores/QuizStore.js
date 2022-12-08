import { reactive } from "vue";

// We can create a reactive object or array with the reactive() function:

export let quiz2 = reactive({
  name: "My Second Quiz",
  questions: [],
});

// Reactive objects are JavaScript Proxies and behave just like normal objects. The difference is that Vue is able to track the property access and mutations of a reactive object.
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state