import useCatch from "ar-catch";
import "./todo";

const btn = document.querySelector("#btn");
const checkThis = async () => {
  const response = await useCatch.$catch(
    "https://jsonplaceholder.typicode.com/todos/21"
  );
  console.log(response);
};

const cache = useCatch.useCache("RELOAD");

cache.set("https://jsonplaceholder.typicode.com/todos/2", {
  userId: new Date().getTime(),
});

console.log(cache.get("https://jsonplaceholder.typicode.com/todos/2"));

btn.addEventListener("click", checkThis);
