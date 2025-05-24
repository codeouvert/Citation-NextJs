"use client";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { deleteCitationAction } from "./citations/citations.action";
import { useRouter } from "next/navigation";

export function DeleteCitationButton(props: { id: number }) {
  const [isConfirm, setIsConfirm] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    // alert("Delete !");
    const result = await deleteCitationAction(props.id);
    if (result.message) {
      router.refresh();
    }
  };

  return (
    <Button
      size="sm"
      onClick={() => {
        if (isConfirm) {
          onDelete();
        } else {
          setIsConfirm(true);
        }
      }}
      variant={isConfirm ? "destructive" : "outline"}
    >
      Delete
    </Button>
  );
}
