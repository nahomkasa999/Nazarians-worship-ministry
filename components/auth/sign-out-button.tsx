"use client";

import { signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOutButton() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    const handleSignOut = async () => {
        setIsPending(true);
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
        setIsPending(false);
    };

    return (
        <Button 
            variant="outline" 
            onClick={handleSignOut}
            disabled={isPending}
        >
            {isPending ? "Signing out..." : "Sign Out"}
        </Button>
    );
}
