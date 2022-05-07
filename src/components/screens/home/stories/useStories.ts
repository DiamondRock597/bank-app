import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

export interface IStory {
    _id: string;
    heading: string;
    images: Array<string>;
}

export const useStories = () => {
    const [stories, setStories] = useState<Array<IStory>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => onSnapshot(query(collection(db, 'stories')), (snapshot) => {
        const stories = snapshot.docs.map((doc) => ({
            _id: doc.id,
            ...doc.data()
        })) as Array<IStory>;

        setStories(stories);
        setIsLoading(false);
    }), []);

    return { stories, isLoading };
}