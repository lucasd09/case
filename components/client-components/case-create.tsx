"use client";
import { createCase, getCase, updateCase } from "@/app/services/axiosRequests";
import { Button } from "../ui/button";

export function CaseCreate() {
  async function fetchCase() {
    const caseUser = await getCase();

    if (!caseUser?.userId) {
      createCase();
    }

    console.log(caseUser);
    return caseUser;
  }

  return (
    <div>
      <Button
        onClick={() => {
          fetchCase();
        }}
      >
        pegar case
      </Button>
    </div>
  );
}
