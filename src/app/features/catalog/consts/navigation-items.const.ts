import { TreeNode } from 'primeng/api';

export const CATALOG_NAVIGATION_ITEMS: TreeNode[] = [
  {
    key: 'coverPage',
    label: 'Cover Page',
  },
  {
    key: 'aboutUs',
    label: 'About Us',
  },
  {
    key: 'areasItems',
    label: 'Areas & Items',
    children: [
      {
        key: 'livingRoom',
        label: 'Living Room',
      },
      {
        key: 'patio',
        label: 'Patio',
      },
      {
        key: 'reallyLengthyAreaName',
        label: 'Really Lengthy Area Name',
      },
    ],
  },
  {
    key: 'financialSummary',
    label: 'Financial Summary',
  },
  {
    key: 'changeOrders',
    label: 'Change Orders',
  },
  {
    key: 'paymentSchedule',
    label: 'Payment Schedule',
  },
  {
    key: 'invoices',
    label: 'Invoices',
  },
];
