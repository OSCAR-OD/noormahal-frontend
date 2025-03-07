"use client";
import { Dialog, DialogContent,  DialogTitle  } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
export default function Modal({
    children,
    className
}: {
    children: React.ReactNode
    className?:string
}) {
    const router = useRouter();

    function handleOpenChange() {
        router.back();
    }

    return (
        <Dialog
            defaultOpen={true}
            open={true}
            onOpenChange={handleOpenChange}
        >
            <DialogContent
                className={className || ""}
            >  
            <VisuallyHidden>
            <DialogTitle>Modal</DialogTitle>
        </VisuallyHidden>
                {children}
            </DialogContent>
        </Dialog>
    )


}