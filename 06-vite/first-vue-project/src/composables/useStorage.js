import { ref, watch } from "vue";

export function useStorage(key, val) {
  let storedVal = read();

  if (storedVal) {
    val = ref(storedVal);
  } else {
    val = ref(val); //use default value
    write();
  }

  // watch function to trigger a callback whenever a piece of reactive state changes:
  watch(val, write, { deep: true }); // {deep: true} permet de go deep dans un object et voir si une propriete a change

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  function write() {
    if (val.value === null || val.value === "") localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(val.value)); 
  }

  return val;
}