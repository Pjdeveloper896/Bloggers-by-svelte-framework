// src/routes/api/delete.js

let dataStore = []; // In-memory store for blogs

export async function POST({ request }) {
  try {
    const { index } = await request.json();
    
    // Check if the index is valid
    if (index < 0 || index >= dataStore.length) {
      return {
        status: 400,
        body: { success: false, message: 'Invalid index' },
      };
    }

    // Delete the item from dataStore by index
    dataStore.splice(index, 1);

    return {
      status: 200,
      body: { success: true, data: dataStore },
    };
  } catch (error) {
    return {
      status: 500,
      body: { success: false, message: 'Failed to delete item' },
    };
  }
}
