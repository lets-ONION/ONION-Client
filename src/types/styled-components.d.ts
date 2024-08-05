declare module 'styled-components/native' {
    import { StyledComponent } from 'styled-components';
    import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

    export interface ViewProps extends ViewStyle { }
    export interface TextProps extends TextStyle { }
    export interface ImageProps extends ImageStyle { }

    export const View: StyledComponent<ViewProps, any>;
    export const Text: StyledComponent<TextProps, any>;
    export const Image: StyledComponent<ImageProps, any>;
}
