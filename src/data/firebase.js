// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import productos from "./productos.json";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_FIRESTORE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIRESTORE_BUCKET,
  messagingSenderId: "368370732763",
  appId: import.meta.env.VITE_FIRESTORE_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);

  const dataDocs = productsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return dataDocs;
}

export async function getProductById(idParam) {
  const docRef = doc(db, "products", idParam);
  const documentSnapshot = await getDoc(docRef);
  return { id: documentSnapshot.id, ...documentSnapshot.data() };
}
export async function getProductsByCategory(categoryParam) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryParam));

  const productsSnapshot = await getDocs(q);

  const dataDocs = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return dataDocs;
}
export async function createOrder(orderData) {
  try {
    const ordersRef = collection(db, "orders");
    const newDoc = await addDoc(ordersRef, orderData);
    console.log("Orden creada con ID:", newDoc.id);
    return { id: newDoc.id, ...orderData };
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
}

export async function subirProducts() {
  for (let item of productos) {
    const newDoc = await addDoc(collection(db, "products"), item);
  }
}

export default app;
