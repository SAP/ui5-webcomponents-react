import {
  Bar,
  Button,
  Dialog,
  SideNavigation,
  SideNavigationItem,
  SideNavigationPropTypes,
  SideNavigationSubItem,
  Text,
} from '@ui5/webcomponents-react';
import globeIcon from '@ui5/webcomponents-icons/dist/globe.js';
import collaborateIcon from '@ui5/webcomponents-icons/dist/collaborate.js';
import officialServiceIcon from '@ui5/webcomponents-icons/dist/official-service.js';
import privateIcon from '@ui5/webcomponents-icons/dist/private.js';
import acceleratedIcon from '@ui5/webcomponents-icons/dist/accelerated.js';
import daIcon from '@ui5/webcomponents-icons/dist/da.js';
import da2Icon from '@ui5/webcomponents-icons/dist/da-2.js';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import sysHelpIcon from '@ui5/webcomponents-icons/dist/sys-help.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import favoriteListIcon from '@ui5/webcomponents-icons/dist/favorite-list.js';
import accountIcon from '@ui5/webcomponents-icons/dist/account.js';
import businessByDesignIcon from '@ui5/webcomponents-icons/dist/business-by-design.js';
import crmSalesIcon from '@ui5/webcomponents-icons/dist/crm-sales.js';
import s4hanaIcon from '@ui5/webcomponents-icons/dist/s4hana.js';
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import managerInsightIcon from '@ui5/webcomponents-icons/dist/manager-insight.js';
import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import sortIcon from '@ui5/webcomponents-icons/dist/sort.js';
import messageInformationIcon from '@ui5/webcomponents-icons/dist/message-information.js';
import expenseReportIcon from '@ui5/webcomponents-icons/dist/expense-report.js';
import userSettingsIcon from '@ui5/webcomponents-icons/dist/user-settings.js';
import personPlaceholderIcon from '@ui5/webcomponents-icons/dist/person-placeholder.js';
import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import iphoneIcon from '@ui5/webcomponents-icons/dist/iphone.js';
import qrCodeIcon from '@ui5/webcomponents-icons/dist/qr-code.js';
import bellIcon from '@ui5/webcomponents-icons/dist/bell.js';
import resetIcon from '@ui5/webcomponents-icons/dist/reset.js';
import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import { Dispatch, SetStateAction, useState } from 'react';

interface NLSideNavigationProps extends SideNavigationPropTypes {
  setContentTitle: Dispatch<SetStateAction<string>>;
}

export function NLSideNavigation(props: NLSideNavigationProps) {
  const { setContentTitle, ...rest } = props;
  const [quickCreateDialogOpen, setQuickCreateDialogOpen] = useState(false);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setContentTitle(e.detail.item.text!);
  };

  const closeQuickCreateDialog = () => {
    setQuickCreateDialogOpen(false);
  };

  return (
    <>
      <SideNavigation
        {...rest}
        className="sideNavigation"
        accessibleName="Main"
        onSelectionChange={handleSelectionChange}
        fixedItems={
          <>
            <SideNavigationItem
              accessibilityAttributes={{ hasPopup: 'dialog' }}
              waitForDefine
              text="Quick Create"
              icon={addIcon}
              design="Action"
              unselectable
              onClick={() => setQuickCreateDialogOpen(true)}
            />
            <SideNavigationItem text="Product Settings" icon={settingsIcon} />
          </>
        }
      >
        <SideNavigationItem text="Home" icon={homeIcon} selected />
        <SideNavigationItem text="Favorites" icon={favoriteListIcon} expanded unselectable>
          <SideNavigationSubItem text="My Accounts" />
          <SideNavigationSubItem text="My Orders" />
        </SideNavigationItem>
        <SideNavigationItem text="Customer Management" icon={accountIcon} expanded unselectable>
          <SideNavigationSubItem text="Contacts" />
          <SideNavigationSubItem text="Companies" />
          <SideNavigationSubItem text="Partners" />
        </SideNavigationItem>
        <SideNavigationItem text="Sales" icon={crmSalesIcon} expanded unselectable>
          <SideNavigationSubItem text="Leads" />
          <SideNavigationSubItem text="Opportunuties" />
          <SideNavigationSubItem text="Quotes" />
          <SideNavigationSubItem text="Orders" />
          <SideNavigationSubItem text="Invoices" />
        </SideNavigationItem>
        <SideNavigationItem text="Products" icon={s4hanaIcon} expanded unselectable>
          <SideNavigationSubItem text="Product Catalog" />
          <SideNavigationSubItem text="Pricing" />
          <SideNavigationSubItem text="Inventory Management" />
        </SideNavigationItem>
        <SideNavigationItem text="Marketing" icon={businessByDesignIcon} expanded unselectable>
          <SideNavigationSubItem text="Campaigns" />
          <SideNavigationSubItem text="E-Mail Marketing" />
          <SideNavigationSubItem text="Marketing Automation" />
        </SideNavigationItem>
        <SideNavigationItem text="Reports" icon={managerInsightIcon} expanded unselectable>
          <SideNavigationSubItem text="Sales Reports" />
          <SideNavigationSubItem text="Customer Reports" />
        </SideNavigationItem>
      </SideNavigation>
      <Dialog
        open={quickCreateDialogOpen}
        className="quickCreateDialog"
        headerText="Create New Item"
        draggable
        resizable
        footer={
          <Bar
            design="Footer"
            endContent={
              <>
                <Button slot="endContent" design="Emphasized">
                  Create
                </Button>
                <Button slot="endContent" onClick={closeQuickCreateDialog}>
                  Close
                </Button>
              </>
            }
          ></Bar>
        }
        onClose={closeQuickCreateDialog}
      >
        <Text>Create new item...</Text>
      </Dialog>
    </>
  );
}

NLSideNavigation.displayName = 'NLSideNavigation';
