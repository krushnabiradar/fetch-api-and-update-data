// The Fetch() API

const url = "https://623d55e87efb5abea68ce31d.mockapi.io/suman/friends/4";

// fetch the data from server

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)));

// INSERT data

const data = {
  name: "suman",
  country: "india",
  pics: "example.com",
};

fetch(url, {
  method: "post",
  headers: {
    "content-type": "application /json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Data Inseterd");
  })
  .catch((error) => {
    console.log("error : ", error);
  });

// // updating the data from

const data1 = {
  name: "nitin shukla",
  country: "bangladesh",
  pics: "example.com",
};

fetch(url, {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },

  body: JSON.stringify(data1),
})
  .then((response) => response.json())
  .then((data1) => {
    console.log("Data Updated");
  })
  .catch((error) => {
    console.log("error : ", error);
  });

// // Deleting data from

fetch(url, {
  method: "DELETE",
}).then(console.log("data deleted"));


