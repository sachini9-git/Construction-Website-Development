
function fetchData() {

    const data = [
        { name: "John Doe", date: "2023-11-01", nic: "123456789", service: "Construction", note: "Sample Note", contact: "john@example.com" },
        
    ];

    const table = document.querySelector('.admin-table');
    data.forEach(entry => {
        let row = table.insertRow();
        row.insertCell().appendChild(document.createTextNode(entry.name));
        row.insertCell().appendChild(document.createTextNode(entry.date));
        row.insertCell().appendChild(document.createTextNode(entry.nic));
        row.insertCell().appendChild(document.createTextNode(entry.service));
        row.insertCell().appendChild(document.createTextNode(entry.note));
        row.insertCell().appendChild(document.createTextNode(entry.contact));
    });
}


fetchData();