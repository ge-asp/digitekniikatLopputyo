import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from "react";


function Query() {
    const firebaseConfig = {
        apiKey: "AIzaSyCkIMDzQa2NYnv8rnpHL63KB8RNDsY7oPo",
        authDomain: "query-2f8d6.firebaseapp.com",
        projectId: "query-2f8d6",
        storageBucket: "query-2f8d6.appspot.com",
        messagingSenderId: "210329221581",
        appId: "1:210329221581:web:155fe88d3a3e313ead2c84"
    };
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const [colors, setColors] = useState([])
    
    useEffect(() => {
    async function getColors() {
        const colorCol = collection(db, 'color');
        const colorSnapshot = await getDocs(colorCol);
        const colorList = colorSnapshot.docs.map(doc => doc.data());
        setColors(colorList)
    }

        getColors()
    }, [])

    const addCount = async () => {
        const colorCol = collection(db, 'color');
        const colorSnapshot = await getDocs(colorCol);

        const colorRef = colorSnapshot.docs[0].ref

        await colorRef.set({black: 3})
    }

    console.log(colors)
    
    return (
        <div>
            <button onClick={addCount}>Add Black</button>
        </div>
    )
 }

export default Query;