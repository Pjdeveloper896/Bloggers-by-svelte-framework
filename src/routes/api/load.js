// src/routes/api/load.js

let dataStore = []; // In-memory store for blogs

export async function GET() {
  try {
    return {
      status: 200,
      body: { success: true, data: dataStore },
    };
  } catch (error) {
    return {
      status: 500,
      body: { success: false, message: 'Failed to load items' },
    };
  }
}
