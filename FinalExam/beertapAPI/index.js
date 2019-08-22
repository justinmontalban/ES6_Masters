const express = require("express");

const app = express();
const states = ["Full", "Going Down", "Almost dry", "Needs refill"];

let kegs = [{ id: 1, state: states[0] }, { id: 2, state: states[0] }];

const changeKegState = state => {
  if (state === states[0]) {
    // Full
    return states[1]; // Going Down
  } else if (state === states[1]) {
    // Going Down
    return states[2]; // Almost Dry
  } else if (state === states[2]) {
    // Almost Dry
    return states[3]; // Need Refill
  } else {
    return states[3]; //Need Refill
  }
};

const checkIfNeedsRefill = state => {
  return state == states[3] ? true : false;
};

//default start to 3.
let id = 3;
app.get("/", (req, res) => {
  res.send(kegs);
});

app.get("/office/addKeg", (req, res) => {
  let keg = {
    id: id,
    state: states[0]
  };
  kegs.push(keg);
  id++;

  res.send(kegs);
});

app.get("/office/:id/dispense", (req, res) => {
  const id = req.params.id;
  let keg = kegs.map(item => {
    item.id == id ? (item.state = changeKegState(item.state)) : "";
    return item;
  });
  let result = keg.filter(x => x.id == id)[0];
  console.log(result, checkIfNeedsRefill(result.state));
  if (checkIfNeedsRefill(result.state)) {
    res.send(`Beer can no loger dispensed`);
  } else {
    res.send(result);
  }
});

app.get("/office/:id/replaceKeg", (req, res) => {
  const id = req.params.id;
  let keg = kegs.map(item => {
    item.id == id ? (item.state = states[0]) : "";
    return item;
  });
  let result = keg.filter(x => x.id == id)[0];
  res.send(result);
});
//port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`listnening on port ${port}`));
