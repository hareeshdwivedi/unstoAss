const controls = [
    {
        label: 'Name of Assessment',
        name: 'name',
        type: 'text',
        placeholder: 'Type name here...'
    },
    {
        label: 'Purpose of this test is',
        name: 'purpose',
        type: 'select',
        options: [
            {
                label: 'Hackathon',
                value: 'hackathon'
            },
            {
                label: 'Hire',
                value: 'hire'
            }
        ]
    },
    {
        label: 'Description',
        name: 'name',
        type: 'text',
        placeholder: 'Type description here...'
    },
    {
        label: 'Skills',
        name: 'skills',
        type: 'select',
        isMulti: true,
        options: [
            {
                label: 'UI/UX',
                value: 'ui_ux'
            },
            {
                label: 'HTML',
                value: 'html'
            },
            {
                label: 'No of Questions',
                value: 'question'
            },
            {
                label: 'Web Development',
                value: 'web_dev'
            },
            {
                label: 'Software Development',
                value: 'soft_dev'
            }
        ]
    },
    {
        label: 'Duration',
        name: 'duration',
        type: 'time',
    }
]

export default controls;
