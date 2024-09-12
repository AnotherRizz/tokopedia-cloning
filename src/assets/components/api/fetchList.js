import axios from 'axios';

// Fungsi async untuk mengambil data dari API
export const fetchList = async () => {
  try {
    const response = await axios.get('http://localhost:3000/list');
    return response.data; // Mengembalikan data yang diambil
  } catch (error) {
    console.error('Error fetching data:', error); // Menangani kesalahan
    throw error; // Membuang kesalahan agar bisa ditangani oleh pemanggil fungsi
  }
};

export default fetchList;
