import Form from '@/app/ui/patient/edit-form';
import Breadcrumbs from '@/app/ui/patient/breadcrumbs';
import {fetchFilteredPatientEdit} from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {

  const id = params.id;
  const patientEdit  = await fetchFilteredPatientEdit(id)

  console.log("-> ", patientEdit)

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Patients', href: '/dashboard/patients' },
          {
            label: 'Edit Patient',
            href: `/dashboard/patient/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form patient={patientEdit} />
    </main>
  );
}