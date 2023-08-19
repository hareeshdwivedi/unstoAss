import React from 'react';
import DashboardIcon from '../assets/icons/dashboard.svg'
import AdminIcon from '../assets/icons/admin.svg'
import AsessIcon from '../assets/icons/notepad.svg'
import LibraryIcon from '../assets/icons/quiz.svg'

const navigations = [
    {
        name: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />
    },
    {
        name: 'assessment',
        title: 'Assessment',
        icon: <AsessIcon />
    },
    {
        name: 'myLibrary',
        title: 'My Library',
        icon: <LibraryIcon />
    },
    {
        name: 'roundStatus',
        title: 'Round Status',
        icon: <AdminIcon />,
        badge: 'Admin',
        hasBreak: true
    }
]

export default navigations;