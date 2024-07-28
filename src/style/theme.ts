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
            fontSize: ''
        },
        medium: {
            fontSize: ''
        },
        small: {
            fontSize: ''
        },
    },
    mainColor: {
        first: {
            color: ''
        },
        second: {
            color: ''
        },
        third: {
            color: ''
        },
        fourth: {
            color: ''
        },
    },
};