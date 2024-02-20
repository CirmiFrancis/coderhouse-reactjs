import { collection, getFirestore, getDocs } from "firebase/firestore";

export const getDocuments = (colName) => {

    const db = getFirestore();
    const colRef = collection(db, colName);
    return getDocs(colRef).then(snapshot => {
        const allData = snapshot.docs.map(document => ({ id: document.id }))
        return allData
    })
}

// Clase 14, esto está relacionado al ItemDetailContainer (falta código)
export const getOneDocument = (id, colName) => {
    const db = getFirestore();
    const productoRef = doc(db, colName, id);
}

// Además, agrega contenido en otros componentes como 'CartDetail' y 'FormComponent'
// sendOrder (enviar orden de compra), addDoc (añadir documento a la colección), updateOrder (actualizar orden de compra), batch (actualizar varios documentos a la vez) 