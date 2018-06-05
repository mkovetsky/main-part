export let data = {
    'courses' : {
        'expandable' : true,
        'input_title' : true,
        'sections' : [
            {
                'title' : 'Associated with',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['option1', 'option2', 'option3']
                    }
                ]
            },
            {
                'title' : 'Course Name',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'text',
                        'width' : 100
                    }
                ]
            },
            {
                'title' : 'Career Application',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'placeholder' : 'Type to add',
                        'width' : 50
                    },
                    {
                        'type' : 'array',
                        'data' : 'applications',
                        'width' : 50,
                        'widget' : {
                                'type' : 'icon-button',
                                'data' : 'delete_forever'
                            }
                    }
                ]
            },
            {
                'title' : 'Describe Knowledge You Aquired',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'placeholder' : 'This is a description',
                        'width' : 100
                    }
                ]
            }
        ]
    },

    'descriptions' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Description',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'placeholder' : 'This is a description',
                        'width' : 100
                    }
                ]
            }
        ]
    },

    'description_header' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Academic GPA',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : '3.41'
                    }
                ]
            },
            {
                'title' : 'Display GPA on my profile',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'toggle',
                        'width' : 30
                    }
                ]
            }
        ]
    },

    'education' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'School Name',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'Memorial University of New foundland'
                    }
                ]
            },
            {
                'title' : 'Country',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Canada', 'England', 'Georgia', 'United States']
                    }
                ]
            },
            {
                'title' : 'Province/State',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Newfoundland', 'one', 'two', 'three']
                    }
                ]
            },
            {
                'title' : 'City',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 50,
                        'placeholder' : 'SaintJohn\'s'
                    }
                ]
            },
            {
                'title' : 'Program Field of Study',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'Geographic Information System'
                    }
                ]
            },
            {
                'title' : 'Type of degree/ Level of Study',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : ['Undergraduate', 'one', 'Georgia', 'United States']
                    }
                ]
            },
            {
                'title' : 'From year',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : [2014, 2013, 2012, 2011]
                    }
                ]
            },
            {
                'title' : 'To year/Expected',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : [2018, 2019, 2020, 2021]
                    }
                ]
            }
        ]
    },

    'proficiency' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Level of Proficiency - Scal 1 to 10',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'slide',
                        'width' : 100
                    }
                ]
            }
        ]
    },

    'job' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Company Name',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'Autodesk'
                    }
                ]
            },
            {
                'title' : 'Job title',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'Junior Business Analyst'
                    }
                ]
            },
            {
                'title' : 'Type of Employment',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Temporary position', 'Random position']
                    }
                ]
            },
            {
                'title' : 'Currently Working here',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'toggle',
                        'width' : 30
                    }
                ]
            },
            {
                'title' : 'From',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : ['January', 'Feburary', 'March', 'April']
                    },
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : [2000, 2001, 2002, 2003]
                    }
                ]
            },
            {
                'title' : 'To',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : ['January', 'Feburary', 'March', 'April']
                    },
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : [2010, 2011, 2012, 2013]
                    }
                ]
            },
            {
                'title' : 'Country',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Cananda', 'Georgia', 'Russia', 'Australia']
                    }
                ]
            },
            {
                'title' : 'Province/State',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Quebec', '1', '2', '3']
                    }
                ]
            },
            {
                'title' : 'City',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'city'
                    }
                ]
            }
        ]
    },

    'personal_skills' : {
        'expandable' : true,
        'input_title' : true,
        'sections' : [
            {
                'title' : 'Qulities',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'placeholder' : 'Type to add',
                        'width' : 50
                    },
                    {
                        'type' : 'array',
                        'data' : 'applications',
                        'width' : 50,
                        'widget' : {
                                'type' : 'icon-button',
                                'data' : 'delete_forever'
                            }
                    }
                ]
            },
            {
                'title' : 'Description',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'placeholder' : 'This is a description',
                        'width' : 100
                    }
                ]
            }
        ]
    },

    'super_power' : {
        'expandable' : true,
        'input_title' : true,
        'sections' : [
            {
                'title' : 'Description',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'placeholder' : 'This is a description',
                        'width' : 100
                    }
                ]
            }
        ]
    },

    'location' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Country',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Cananda', 'Georgia', 'Russia', 'Australia']
                    }
                ]
            },
            {
                'title' : 'Province/State',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['Quebec', '1', '2', '3']
                    }
                ]
            },
            {
                'title' : 'City',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'City'
                    }
                ]
            },
            {
                'title' : 'Postal/Zip code',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : '123456'
                    }
                ]
            },
            {
                'title' : 'Willing To Travel?',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['No', 'Yes']
                    }
                ]
            },
            {
                'title' : 'Reason',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'width' : 100,
                        'placeholder' : 'This is a description'
                    }
                ]
            },
            {
                'title' : 'Willing to Relocate?',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : ['No', 'Yes']
                    }
                ]
            },
            {
                'title' : 'Reason',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'width' : 100,
                        'placeholder' : 'This is a description'
                    }
                ]
            }
        ]
    },

    'destination' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'destination',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 100,
                        'placeholder' : 'Enter a city, province/state, or country....'
                    }
                ]
            },
            {
                'title' : 'From',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : ['January', 'Feburary', 'March', 'April']
                    },
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : [2000, 2001, 2002, 2003]
                    }
                ]
            },
            {
                'title' : 'To',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : ['January', 'Feburary', 'March', 'April']
                    },
                    {
                        'type' : 'select',
                        'width' : 50,
                        'value' : [2010, 2011, 2012, 2013]
                    }
                ]
            },
            {
                'title' : 'What inspired you to go?',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'width' : 100,
                        'placeholder' : 'This is a description'
                    }
                ]
            }
        ]
    },

    'activity_header' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Acitivity Name',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'input',
                        'width' : 50,
                        'placeholder' : 'Soccer'
                    }
                ]
            },
            {
                'title' : 'Ongoing',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'toggle',
                        'width' : 30
                    }
                ]
            },
            {
                'title' : 'From',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : [2010, 2011, 2012, 2013]
                    }
                ]
            },
            {
                'title' : 'To',
                'width' : 50,
                'widgets' : [
                    {
                        'type' : 'select',
                        'width' : 100,
                        'value' : [2015, 2016, 2017, 2018]
                    }
                ]
            },
            {
                'title' : 'Personal Significance to You',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'width' : 100,
                        'placeholder' : 'This is a description'
                    }
                ]
            }
        ]
    },

    'activity' : {
        'expandable' : false,
        'input_title' : false,
        'sections' : [
            {
                'title' : 'Description',
                'width' : 100,
                'widgets' : [
                    {
                        'type' : 'textarea',
                        'width' : 100,
                        'placeholder' : 'This is a description'
                    }
                ]
            }
        ]
    }
};
