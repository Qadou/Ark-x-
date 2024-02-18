function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "\nSample data ✨"; // Simulated data
        // Resolve the Promise with the fetched data
        resolve(data);
        // Reject the Promise with an error if needed
        // reject(new Error("Failed to fetch data"));
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // A function to process data (returns a Promise)
  function processData(data) {
    return Promise.resolve(data.toUpperCase()); // Simulated data processing
  }
  
  // Fetch data and chain the processing operation
  fetchData()
    .then(data => {
      return processData(data);
    })
    .then((data) => {
      console.log("Data fetched successfully:", data);
      return data;
    })
    .catch((error) => {
      console.log("Error:", error.message);
    });