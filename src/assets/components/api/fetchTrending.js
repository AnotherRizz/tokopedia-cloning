
export const fetchTrending = async () => {
   try {
     const response = await fetch('http://localhost:3000/trending');
     if (!response.ok) {
       throw new Error('Failed to fetch trending products');
     }
     const data = await response.json();
     return data;
   } catch (error) {
     console.error('Error fetching trending products:', error);
     throw error;
   }
 };
 