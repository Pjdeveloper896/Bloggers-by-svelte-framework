// src/routes/api/save.js

let dataStore = []; // In-memory store for blogs

export async function POST({ request }) {
  try {
    const { item } = await request.json();
    
    // Save the item to the in-memory store (dataStore)
    dataStore.push(item);
    
    return {
      status: 200,
      body: { success: true, data: dataStore },
    };
  } catch (error) {
    return {
      status: 500,
      body: { success: false, message: 'Failed to save item' },
    };
  }
}
