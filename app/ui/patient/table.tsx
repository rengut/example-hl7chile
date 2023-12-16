import { UpdateInvoice, DeleteInvoice } from '@/app/ui/patient/buttons';
import {fetchFilteredPatients} from "@/app/lib/data";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {

  const patients = await fetchFilteredPatients(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden"></div>
          <table className="hidden min-w-full text-gray-900 md:table table:auto">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Identifier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Full name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  is Deceased ?
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {patients?.entry !==  undefined && patients?.entry.map((patient, index) => {
              return (
                <tr>
                  <td className="whitespace-nowrap py-1 pr-1">{patient.resource.identifier.length > 0 ? patient.resource.identifier[0].value : ""}</td>
                  <td className="whitespace-nowrap py-1 pr-1">{patient.resource.name[0].given[0] +" "+patient.resource.name[0].family}</td>
                  <td className="whitespace-nowrap py-1 pr-1">{patient.resource.telecom?.length > 0 ? patient.resource.telecom[0].value : ""}</td>
                  <td className="whitespace-nowrap py-1 pr-1">{patient.resource.deceasedBoolean ? "Yes" : "No"}</td>
                  <td className="whitespace-nowrap py-1 pl-3 pr-1">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={patient.resource.id}/>
                      <DeleteInvoice id={patient.resource.id}/>
                    </div>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
