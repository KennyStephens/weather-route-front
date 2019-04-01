function test()  {
  fetch('http://localhost:5500/')
  .then(res => console.log(res))
  .catch(err => console.log(err));
}
test();