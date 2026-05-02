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
                    router.push("/login?next=/members");
                },
            },
        });
        setIsPending(false);
    };

    return (
        <Button 
            variant="outline" 
            className="border-rose-200 bg-transparent text-rose-600 hover:bg-rose-50 hover:text-rose-700 dark:border-rose-900/60 dark:text-rose-400 dark:hover:bg-rose-950/40"
            onClick={handleSignOut}
            disabled={isPending}
        >
            {isPending ? "Signing out..." : "Sign Out"}
        </Button>
    );
}
