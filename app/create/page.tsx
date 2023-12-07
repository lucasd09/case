import TabsCreate from "@/components/client-components/tabs-create";
import { CaseCreate } from "@/components/client-components/case-create";

export default function Create() {
  return (
    <div className="flex h-screen">
      <div className="bg-primary flex-1">
        <CaseCreate />
      </div>
      <div className=" flex flex-col flex-1 ">
        <TabsCreate />
      </div>
    </div>
  );
}
