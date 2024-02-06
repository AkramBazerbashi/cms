export const initValue = [
    {
        id: 1,
        parent_id: 0,
        name: {
            en: 'Development',
            ar: 'تطويري',
        },
        child: [
            {
                id: 4,
                parent_id: 1,
                name: {
                    en: 'test 2',
                    ar: 'تجربة 2',
                },
                child: [
                    {
                        id: 4,
                        parent_id: 1,
                        name: {
                            en: 'nested test',
                            ar: 'تجربة 2',
                        },
                        child: [
                            {
                                id: 4,
                                parent_id: 1,
                                name: {
                                    en: 'nested test',
                                    ar: 'تجربة 2',
                                },
                                child: [],
                            },
                            {
                                id: 4,
                                parent_id: 1,
                                name: {
                                    en: 'test 2',
                                    ar: 'تجربة 2',
                                },
                                child: [],
                            },
                        ],
                    },
                    {
                        id: 4,
                        parent_id: 1,
                        name: {
                            en: 'test 2',
                            ar: 'تجربة 2',
                        },
                        child: [],
                    },
                ],
            },
            {
                id: 5,
                parent_id: 1,
                name: {
                    en: 'test 2',
                    ar: 'تجربة 2',
                },
                child: [],
            },
        ],
    },
];