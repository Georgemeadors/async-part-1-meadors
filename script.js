// const name = "George";
// const greeting = `Hello, my name is ${name}!`;
// console.log(greeting);


// function makeGreeting(name) {
//     return `Hello, my name is ${name}!`;
// }
// const name = "George";
// const greeting = makeGreeting(name);
// console.log(greeting);

// alternative code declaring two different variable

// const name1 = "George";
// const greeting1 = `Hello, my name is ${name1}!`;
// console.log(greeting1);

// const name2 = "Jeffrey";
// const greeting2 = `Hello, my name is ${name2}! `;
// console.log(greeting2);


/*algorithm that reverses a string */

function reverseString(input) {
    return input.split("").reverse().join("");
  }
  const form = document.querySelector("#stringForm");
  const inputString = document.querySelector("#inputString");
  const output = document.querySelector("#output");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  } );
  
  document.querySelector("#reverse").addEventListener("click", () => {
    const reversedString = reverseString(inputString.value);
    output.textContent = `Reversed String: ${reversedString}`;
  });