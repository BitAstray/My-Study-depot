/*
 * @Author: Astray
 * @Date: 2023-09-23 20:36:33
 */
import { reactive, readonly, ref, computed } from "vue";

const state = reactive({
  firstName: "Xu Ming",
  lastName: "Deng",
});
const fullName = computed(() => {
  console.log("changed"); //2. changed  //8. changed
  return `${state.lastName}, ${state.firstName}`;
});
console.log("state ready"); // 1.state ready
console.log("fullname is", fullName.value); //3. Deng, Xu Ming
console.log("fullname is", fullName.value); //4. Deng, Xu Ming
const imState = readonly(state);
console.log(imState === state); //5. false

const stateRef = ref(state);
console.log(stateRef.value === state); //6. true

state.firstName = "Cheng";
state.lastName = "Ji";

console.log(imState.firstName, imState.lastName); //7. ChengJi
console.log("fullname is", fullName.value); // 9. JiCheng
console.log("fullname is", fullName.value); // 10. JiCheng

const imState2 = readonly(stateRef);
console.log(imState2.value === stateRef.value); // 11.false
