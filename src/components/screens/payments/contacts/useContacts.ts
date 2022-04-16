import { useState } from "react";

export const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return { contacts, isLoading }
}