async function fetchCSV() {
    const response = await fetch('/Table_Input.csv'); 
    const data = await response.text();

    const rows = data.split("\n").slice(1); // Remove headers
    const parsedData = rows.map(row => {
        const [index, value] = row.split(",");
        return { Index: index.trim(), Value: Number(value.trim()) };
    });

    return parsedData; 
}

export { fetchCSV };
// fetchCSV();
