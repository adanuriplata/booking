import { SideBar } from '@/components/SideBar';

const dashboard = (): JSX.Element => {
  return (
    <div>
      <h1>dashboard page</h1>
      <SideBar
        menu={[
          { id: '1', link: 'https://ehr', label: 'cosas' },
          { id: '2', link: 'https://ehr', label: 'cosas2' },
          { id: '3', link: 'https://ehr', label: 'cosas3' },
        ]}
      />
      ,
      <main>
        <h2> Main content </h2>
      </main>
    </div>
  );
};

export default dashboard;
