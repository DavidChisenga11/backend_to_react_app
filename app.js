const express = require('express');
const xlsx = require('xlsx');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
    try {
        const workbook = xlsx.readFile('data.xlsx');
        const sheet_name_list = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        console.log('Data fetched successfully:', data);  // Log the data to the console
        res.json(data);
    } catch (error) {
        console.error('Error reading the Excel file:', error);
        res.status(500).send('Error reading the Excel file');
    }
});

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})