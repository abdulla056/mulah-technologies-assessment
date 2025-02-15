async function fetchCSV() {
    const response = await fetch('/Table_Input.csv'); // Fetch the CSV file
    const data = await response.text();

    const rows = data.split("\n").slice(1); // Remove headers
    const parsedData = rows.map(row => {
        const [index, value] = row.split(","); // Split the row into index and value
        return { Index: index.trim(), Value: Number(value.trim()) }; // Return the index and value as an object
    });

    return parsedData; 
}

export { fetchCSV }; // export the fetch function to be used in App.jsx
