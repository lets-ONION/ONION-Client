import 'styled-components/native';
import { Theme } from '../style/theme';

declare module 'styled-components/native' {
    export interface DefaultTheme extends Theme {}
}
