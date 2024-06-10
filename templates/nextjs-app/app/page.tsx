import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar, ShellBar } from '@ui5/webcomponents-react';

export default function Page() {
  return (
    <>
      <ShellBar
        logo={
          <img
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt={'UI5 Web Components for React logo'}
          />
        }
        primaryTitle="UI5 Web Components for React Template"
        profile={<Avatar icon={employeeIcon} />}
      />
      {/* Add your code here */}
    </>
  );
}
