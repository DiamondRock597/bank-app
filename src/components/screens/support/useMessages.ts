import dayjs from "dayjs";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { IStory } from "../home/stories/useStories";

export interface IMessage {
    _id: string;
    text: string;
    userId: string;
    timestamp: Date | string;
}

export const useMessages = () => {
    const [messages, setMessages] = useState<Array<IMessage>>([]);

    useEffect(() => onSnapshot(query(collection(db, 'messages')), (snapshot) => {
        const messages = snapshot.docs.map((doc) => doc.data()?.timestamp ?
            ({
                ...doc.data(),
                _id: doc.id,
                timestamp: dayjs.unix(doc.data().timestamp.seconds).format('HH:mm'),
            })
            :
            ({
                _id: doc.id,
                ...doc.data()
            })
        ) as Array<IMessage>;

        setMessages(messages);
    }), []);

    return { messages };
}