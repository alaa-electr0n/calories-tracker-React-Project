const BASE_URL = "http://localhost:4000";

async function getRecords() {
  const response = await fetch(`${BASE_URL}/records`);
  if (!response.ok)
    throw new Error("Error getting all records from the server");
  const data = await response.json();
  return data;
}

async function addOneRecord(record) {
  const response = await fetch(`${BASE_URL}/records`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });
  if (!response.ok) throw new Error("Error adding new record to the server");
  const data = await response.json();
  return data;
}

async function deleteRecord(id) {
  const response = await fetch(`${BASE_URL}/records/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error deleting record from the server");
}

async function getRecordById(id) {
  const response = await fetch(`${BASE_URL}/records/${id}`);
  if (!response.ok) throw new Error("Error getting the record from the server");
  const data = await response.json();
  return data;
}

export { getRecords, addOneRecord, deleteRecord, getRecordById };
