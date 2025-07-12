import axios from 'axios';
export const  mockItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80&w=400",
    condition: "Like New",
    size: "M",
    category: "Outerwear",
    location: "Brooklyn, NY",
    uploader: "Sarah M.",
    points: 25,
    swappable: true
  },
  {
    id: "2",
    title: "Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400",
    condition: "Good",
    size: "S",
    category: "Dresses",
    location: "Austin, TX",
    uploader: "Emma K.",
    points: 20,
    swappable: true
  },
  {
    id: "3",
    title: "Designer Wool Sweater",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=400",
    condition: "Excellent",
    size: "L",
    category: "Tops",
    location: "Portland, OR",
    uploader: "Alex R.",
    points: 35,
    swappable: true
  },
  {
    id: "4",
    title: "Leather Ankle Boots",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&q=80&w=400",
    condition: "Good",
    size: "8",
    category: "Shoes",
    location: "Seattle, WA",
    uploader: "Mike L.",
    points: 30,
    swappable: true
  },
  {
    id: "5",
    title: "Silk Blouse",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400",
    condition: "Like New",
    size: "M",
    category: "Tops",
    location: "Chicago, IL",
    uploader: "Lisa T.",
    points: 28,
    swappable: true
  },
  {
    id: "6",
    title: "High-waisted Jeans",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=400",
    condition: "Excellent",
    size: "29",
    category: "Bottoms",
    location: "San Francisco, CA",
    uploader: "Anna K.",
    points: 22,
    swappable: true
  }
];

// POST   /api/items
//   - Headers: Authorization: Bearer <token>
//   - Content-Type: multipart/form-data
//   - Fields:
//       - title: string
//       - description: string
//       - category: string
//       - type: string
//       - size: string
//       - condition: string
//       - tags: comma-separated string (e.g., "blue,casual")
//       - latitude: number (optional)
//       - longitude: number (optional)
//       - images: file(s)

export async function createItem(item) {
  const url = import.meta.env.VITE_BACKEND_URL + "api/items";

  const {
    title,
    description,
    category,
    type,
    size,
    condition,
    tags,
    latitude,
    longitude,
    images,
  } = item;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       uploaderId:'',
        age: 1,
        title,
        description,
        category,
        type,
        size,
        condition,
        tags,
        latitude,
        longitude,
        images,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

