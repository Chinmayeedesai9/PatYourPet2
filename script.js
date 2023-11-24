// script.js
const fetchData = async () => {
    const response = await fetch('http://localhost:3000/getNearbyStores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: 18.52611,  // Replace with actual latitude
        longitude: 73.85747,  // Replace with actual longitude
        type: 'pet_store',  // Replace with 'veterinary_care' if needed
      }),
    });
  
    const data = await response.json();
    console.log(data);
  };
  
  // Call the function to fetch data
  fetchData();
  