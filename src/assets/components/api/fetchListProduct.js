
export const fetchListProduct = async () => {
   try {
     const response = await fetch('http://localhost:3000/product');
     if (!response.ok) {
       throw new Error('Failed to fetch  products');
     }
     const data = await response.json();
     return data;
   } catch (error) {
     console.error('Error fetching products:', error);
     throw error;
   }
 };
 