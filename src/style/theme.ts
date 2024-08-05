export type FontSize = 'large' | 'medium' | 'small';
export type Color = 'first' | 'second' | 'third' | 'fourth';

interface Theme {
    fontSize: {
        [key in FontSize]: {
            fontSize: string;
        };
    };
    mainColor: {
        [key in Color]: {
            color: string;
        };
    };
};

export const theme: Theme = {
    fontSize: {
        large: {
            fontSize: '24px'
        },
        medium: {
            fontSize: '18px'
        },
        small: {
            fontSize: '14px'
        },
    },
    mainColor: {
        first: {
            color: '#cad3ff'
        },
        second: {
            color: '#f0f0f0'
        },
        third: {
            color: '#d3d3d3'
        },
        fourth: {
            color: '#a9a9a9'
        },
    },
};
