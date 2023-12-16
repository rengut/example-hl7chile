import Form from '@/app/ui/patient/create-form';
import Breadcrumbs from '@/app/ui/patient/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Patients', href: '/dashboard/patients' },
          {
            label: 'Create Patient',
            href: '/dashboard/patient/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}