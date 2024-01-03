import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function overrides(theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: 'red',
                    borderRadius: '10px',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#000',
                }
            },
            html: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                WebkitOverflowScrolling: 'touch',
            },
            body: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
                containedPrimary: {
                    backgroundColor: theme.palette.primary,
                    color: "white",
                    borderRadius: "8px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0px 8px 16px 0px rgba(0, 174, 96, 0.24)",
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
                outlinedPrimary: {
                    color: theme.palette.primary.main,
                    border: "1px solid theme.palette.primary.main",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.primary.main, 0.16),
                    },
                },
                softPrimary: {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    border: "1px dashed",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.primary.main, 0.16),
                    },
                },
                sizeLarge: {
                    minHeight: 48,
                },
                sizeMedium: {
                    minHeight: 40,
                },
                sizeSmall: {
                    minHeight: 32,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[900],
                    borderRadius: "8px",
                    borderColor: theme.palette.grey[500],
                },
            },
        },
    };
}