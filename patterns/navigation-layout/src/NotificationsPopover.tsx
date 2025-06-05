import AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import type NotificationListItemImportance from '@ui5/webcomponents-fiori/dist/types/NotificationListItemImportance.js';
import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import crmSalesIcon from '@ui5/webcomponents-icons/dist/crm-sales.js';
import expenseReportIcon from '@ui5/webcomponents-icons/dist/expense-report.js';
import sortIcon from '@ui5/webcomponents-icons/dist/sort.js';
import type {
  MessageBoxPropTypes,
  NotificationListGroupItemPropTypes,
  NotificationListPropTypes,
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes,
} from '@ui5/webcomponents-react';
import {
  Avatar,
  Bar,
  Button,
  IllustratedMessage,
  Menu,
  MenuItem,
  MessageStrip,
  NotificationList,
  NotificationListGroupItem,
  NotificationListItem,
  ResponsivePopover,
  Title,
} from '@ui5/webcomponents-react';
import { forwardRef, useState } from 'react';
import '@ui5/webcomponents-fiori/dist/illustrations/NoNotifications.js';
import { ClearAllMessageBox } from './ClearAllMessageBox.tsx';

interface Notification {
  id: string;
  titleText: string;
  importance?: keyof typeof NotificationListItemImportance | NotificationListItemImportance;
  footnotes: string[];
  avatarIcon: string;
  avatarColorScheme: keyof typeof AvatarColorScheme | AvatarColorScheme;
  avatarShape: 'Circle' | 'Square';
  avatarSize: 'XS' | 'S' | 'M' | 'L';
  menuItems: { text: string }[];
  content: string;
}

interface NotificationsPopoverProps extends ResponsivePopoverPropTypes {
  closeNotificationsPopover: () => void;
}

export const NotificationsPopover = forwardRef<ResponsivePopoverDomRef, NotificationsPopoverProps>((props, ref) => {
  const { open, closeNotificationsPopover } = props;
  const [notificationsToday, setTodayNotifications] = useState<Notification[]>(initialNotificationsToday);
  const [notificationsYesterday, setYesterdayNotifications] = useState<Notification[]>(initialNotificationsYesterday);
  const [groupLoading, setGroupLoading] = useState(false);
  const [showMessageStrip, setShowMessageStrip] = useState(false);
  const [clearAllOpen, setClearAllOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const handleItemClose: NotificationListPropTypes['onItemClose'] = (e) => {
    const { id, group } = e.detail.item.dataset;
    if (!id || !group) {
      return;
    }

    if (group === 'today') {
      setTodayNotifications((prev) => prev.filter((item) => item.id !== id));
    } else if (group === 'yesterday') {
      setYesterdayNotifications((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleLoadMore: NotificationListGroupItemPropTypes['onLoadMore'] = (e) => {
    if (e.target == e.currentTarget) {
      const itemsToLoad = 10;
      const nextItems = Array.from({ length: itemsToLoad }).map((_, index) => {
        const newIndex = notificationsToday.length + index + 1;
        return {
          id: `today-${newIndex}`,
          titleText: `Loaded Notification ${newIndex}`,
          footnotes: ['Auto', new Date().toLocaleTimeString()],
          avatarIcon: crmSalesIcon,
          avatarColorScheme: AvatarColorScheme.Accent10,
          avatarShape: 'Square' as const,
          avatarSize: 'XS' as const,
          menuItems: [{ text: 'Unsubscribe' }],
          content: `This is dynamically loaded notification #${newIndex}.`,
        };
      });
      //@ts-expect-error: `items` are available but private
      const focusIndex = e.target.items.length;
      setGroupLoading(true);
      setTimeout(() => {
        setTodayNotifications((prev) => [...prev, ...nextItems]);
        setGroupLoading(false);
        setTimeout(() => {
          //@ts-expect-error: `items` are available but private
          e.target.items[focusIndex].focus();
        }, 500);
      }, 2000);
    }
  };

  const handleClearAllClose: MessageBoxPropTypes['onClose'] = (e) => {
    if (e === 'OK') {
      setTodayNotifications([]);
      setYesterdayNotifications([]);
    }
    setClearAllOpen(false);
  };

  return (
    <>
      <ResponsivePopover
        ref={ref}
        open={open}
        id="popover-with-notifications"
        placement="Bottom"
        className="notificationsPopover"
        horizontalAlign="End"
        onClose={(e) => {
          if (e.target === e.currentTarget) {
            closeNotificationsPopover();
          }
        }}
        header={
          <div className="notificationsPopoverHeader">
            <Bar
              className="notificationsPopoverBar"
              design="Header"
              startContent={<Title level="H5">Notifications</Title>}
              endContent={
                <>
                  <Button
                    onClick={() => {
                      setShowMessageStrip(true);
                    }}
                    design="Emphasized"
                  >
                    Show M. Strip
                  </Button>
                  <Button
                    design="Transparent"
                    accessibilityAttributes={{ hasPopup: 'dialog' }}
                    onClick={() => {
                      setClearAllOpen(true);
                    }}
                  >
                    Clear All
                  </Button>
                  <Button
                    id="btn-sort"
                    design="Transparent"
                    icon={sortIcon}
                    tooltip="Sort"
                    onClick={() => {
                      setSortMenuOpen(true);
                    }}
                  />
                  <Button design="Transparent" icon={actionSettingsIcon} tooltip="Go to settings" />
                </>
              }
            />
            {showMessageStrip && (
              <MessageStrip
                className="notificationsMessageStrip"
                design="Negative"
                onClose={() => {
                  setShowMessageStrip(false);
                }}
              >
                Something went wrong.
              </MessageStrip>
            )}
          </div>
        }
      >
        {notificationsToday.length > 0 || notificationsYesterday.length > 0 ? (
          <NotificationList className="notificationsPopoverList" onItemClose={handleItemClose}>
            {notificationsToday.length > 0 && (
              <NotificationListGroupItem
                loading={groupLoading}
                titleText="Today"
                loadingDelay={0}
                growing="Button"
                onLoadMore={handleLoadMore}
              >
                {notificationsToday.map((item) => (
                  <NotificationListItem
                    key={item.id}
                    data-id={item.id}
                    data-group="today"
                    titleText={item.titleText}
                    importance={item.importance}
                    showClose
                    avatar={
                      <Avatar
                        icon={item.avatarIcon}
                        colorScheme={item.avatarColorScheme}
                        shape={item.avatarShape}
                        size={item.avatarSize}
                      />
                    }
                    footnotes={item.footnotes.map((note) => (
                      <span key={note}>{note}</span>
                    ))}
                    menu={
                      <Menu>
                        {item.menuItems.map((mi) => (
                          <MenuItem key={mi.text} text={mi.text} />
                        ))}
                      </Menu>
                    }
                  >
                    {item.content}
                  </NotificationListItem>
                ))}
              </NotificationListGroupItem>
            )}

            {notificationsYesterday.length > 0 && (
              <NotificationListGroupItem titleText="Yesterday" collapsed>
                {notificationsYesterday.map((item) => (
                  <NotificationListItem
                    key={item.id}
                    data-id={item.id}
                    data-group="yesterday"
                    titleText={item.titleText}
                    importance={item.importance}
                    showClose
                    avatar={
                      <Avatar
                        icon={item.avatarIcon}
                        colorScheme={item.avatarColorScheme}
                        shape={item.avatarShape}
                        size={item.avatarSize}
                      />
                    }
                    footnotes={item.footnotes.map((note) => (
                      <span key={note}>{note}</span>
                    ))}
                    menu={
                      <Menu>
                        {item.menuItems.map((mi) => (
                          <MenuItem key={mi.text} text={mi.text} />
                        ))}
                      </Menu>
                    }
                  >
                    {item.content}
                  </NotificationListItem>
                ))}
              </NotificationListGroupItem>
            )}
          </NotificationList>
        ) : (
          <IllustratedMessage name="NoNotifications" />
        )}
      </ResponsivePopover>
      <ClearAllMessageBox open={clearAllOpen} onClose={handleClearAllClose} />
      <Menu
        header-text="Sort By"
        open={sortMenuOpen}
        opener="btn-sort"
        onClose={() => {
          setSortMenuOpen(false);
        }}
      >
        <MenuItem text="Date" />
        <MenuItem text="Importance" />
      </Menu>
    </>
  );
});

NotificationsPopover.displayName = 'NotificationsPopover';

const initialNotificationsToday: Notification[] = [
  {
    id: 'today-1',
    titleText: 'Start Your Day with Your Sales Target!',
    footnotes: ['Sales', '11:13'],
    avatarIcon: crmSalesIcon,
    avatarColorScheme: 'Accent10',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content:
      'Good morning! Don’t forget your daily sales target is $2,000, which needs to be fulfilled by the end of the business day. Let’s make it a great sales day!',
  },
  {
    id: 'today-2',
    titleText: 'Upcoming Client Meeting Reminder',
    importance: 'Important',
    footnotes: ['Sales', '11:05'],
    avatarIcon: crmSalesIcon,
    avatarColorScheme: 'Accent10',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Open in calendar' }, { text: 'Unsubscribe' }],
    content: 'You have a client meeting scheduled at 3 PM today with Acme Corp. Location: Zoom - link in calendar.',
  },
  {
    id: 'today-3',
    titleText: 'Follow-Up Needed for Prospect',
    footnotes: ['Sales', '11:00'],
    avatarIcon: crmSalesIcon,
    avatarColorScheme: 'Accent10',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Follow-up meeting' }, { text: 'Unsubscribe' }],
    content: 'Reminder to follow up with John Doe from XYZ Ltd. Discuss the proposal sent last week.',
  },
  {
    id: 'today-4',
    titleText: 'Budget Report Submission Deadline Approaching',
    importance: 'Important',
    footnotes: ['Accountant', '10:15'],
    avatarIcon: expenseReportIcon,
    avatarColorScheme: 'Accent1',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'Reminder: The deadline to submit this quarter’s budget report is this Friday.',
  },
  {
    id: 'today-5',
    titleText: 'Urgent: Expense Claims Pending Your Approval',
    importance: 'Important',
    footnotes: ['Notification', '09:30'],
    avatarIcon: expenseReportIcon,
    avatarColorScheme: 'Accent1',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'You have 5 pending expense claims awaiting your approval. Please review them by EOD.',
  },
  {
    id: 'today-6',
    titleText: 'Monthly Reconciliation Process Begins Next Week',
    footnotes: ['Accountant', '09:30'],
    avatarIcon: expenseReportIcon,
    avatarColorScheme: 'Accent1',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'Just a heads-up that we will begin the financial reconciliation process for this month next Monday.',
  },
];

const initialNotificationsYesterday: Notification[] = [
  {
    id: 'yesterday-1',
    titleText: 'New Sales Lead Assigned',
    footnotes: ['Sales', '1 Day'],
    avatarIcon: crmSalesIcon,
    avatarColorScheme: 'Accent10',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'A new lead, Jane Smith from Innovative Tech, has been assigned to you. Contact details in CRM.',
  },
  {
    id: 'yesterday-2',
    titleText: 'Reminder: Submit Your EOD Sales Report',
    footnotes: ['Sales', '1 Day'],
    avatarIcon: crmSalesIcon,
    avatarColorScheme: 'Accent10',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'Please submit your end-of-day sales report through the portal before logging off today.',
  },
  {
    id: 'yesterday-3',
    titleText: 'Tax Filing Deadline Reminder',
    footnotes: ['Accountant', '1 Day'],
    avatarIcon: expenseReportIcon,
    avatarColorScheme: 'Accent1',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'Reminder: The tax filing deadline for this quarter is approaching in two weeks.',
  },
  {
    id: 'yesterday-4',
    titleText: 'Invoice Processing Completed',
    footnotes: ['Notification', '1 Day'],
    avatarIcon: expenseReportIcon,
    avatarColorScheme: 'Accent1',
    avatarShape: 'Square',
    avatarSize: 'XS',
    menuItems: [{ text: 'Unsubscribe' }],
    content: 'All invoices for this month have been successfully processed and payments scheduled.',
  },
];
