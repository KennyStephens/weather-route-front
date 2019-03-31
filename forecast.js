function test()  {
  fetch('http://localhost:5500/')
  .then(res => res.json())
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
};

test();