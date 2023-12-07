"use client";
import { getCaseRequest } from "@/app/services/axiosRequests";
import { useEffect } from "react";

export function CaseCreate() {
  async function fetchCase(id: number) {
    const caseUser = await getCaseRequest(id);
    return caseUser;
  }

  useEffect(() => {});
  return <div></div>;
}
