export const mockPages: any = {
    home: {
        slug: "home",
        template: "standard",
        sections: [
            {
                type: "hero",
                content: {
                    title: "Welcome to VPeters Initiative",
                    subtitle: "Empowering communities",
                },
            },
            {
                type: "text",
                content: {
                    text: "We support immigrants and families.",
                },
            },
        ],
    },

    "why-us": {
        slug: "why-us",
        template: "standard",
        sections: [
            {
                type: "hero",
                content: {
                    title: "About VPeters Initiative",
                    subtitle: "Empowering families and individuals through education, access, and opportunity.",
                    backgroundImage: '/images/slug-bg.png',
                    mobileImage: '/images/slug-mobil-bg.png'
                },
            },
            { "type": "mission_vision" },
            { "type": "impact_stats" },
            { "type": "help_section" }
        ],
    },
    "allServices": {
        slug: "view-all-services",
        template: "standard",
        sections: [
            {
                type: "hero",
                content: {
                    title: "Our Services",
                    subtitle: "Your trusted source for identity, document, and credential services.",
                    backgroundImage: '/images/slug-bg.png',
                    mobileImage: '/images/slug-mobil-bg.png'
                },
            },
            { "type": "services" },

        ],
    },
    "book-appointment": {
        slug: "book-appointment",
        template: "standard",
        sections: [
            {
                type: "hero",
                content: {
                    title: "Book an Appointments",
                    subtitle: "Schedule services quickly and securely at V'Peters Initiative.",
                    backgroundImage: '/images/slug-bg.png',
                    mobileImage: '/images/slug-mobil-bg.png'
                },
            },
            { "type": "booking_steps" },

        ],
    },

};
