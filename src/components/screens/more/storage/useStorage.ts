import { useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "../../../../firebase";

export const useStorage = () => {
    const [image, setImage] = useState('');

    const getImage = async () => {
        try {
            const uri = await getDownloadURL(ref(storage, '/images/test_image.jpg'));
            setImage(uri);

        } catch (error) {
            console.log({ error });
        }
    }
    return {
        image,
        getImage
    }
}