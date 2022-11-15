//! Required
import { useRouter } from "next/router";
import { useEffect } from "react";

//! Template
export default function HomePage() {
    const { replace } = useRouter();
    useEffect(() => {
        replace("/login-page");
    }, []);
}
