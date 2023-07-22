import getArCatch from "ar-catch";
import "./todo"
const { $catch, useCache } = getArCatch;
const useCatch = $catch({
  alias: "$useCatch",
});

const btn = document.querySelector("#btn");
const checkThis = () => {
  const response = useCatch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
};

btn.addEventListener("click", checkThis);
