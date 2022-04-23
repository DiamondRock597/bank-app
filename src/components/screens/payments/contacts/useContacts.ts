import { useState } from "react";

export interface IContact {
    _id: string;
    displayName: string;
    cardNumber: string;
}

export const useContacts = () => {
    const [contacts, setContacts] = useState<Array<IContact>>([]);
    const [isLoading, setIsLoading] = useState(false);

    return { contacts, isLoading }
}