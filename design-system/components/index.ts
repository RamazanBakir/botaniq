/**
 * Design System Components Index
 *
 * Central export for all design system components.
 * Import components from here for consistency.
 */

// Layout components
export { Container, Stack, Flex, Section } from './layout';
export type {
  ContainerProps,
  StackProps,
  FlexProps,
  SectionProps,
} from './layout';

// Typography components
export { Heading, Text } from './typography';
export type {
  HeadingProps,
  HeadingVariant,
  TextProps,
  TextVariant,
} from './typography';

// Control components
export { Button } from './controls';
export type { ButtonProps, ButtonVariant, ButtonSize } from './controls';

// Surface components
export { Card } from './surface';
export type { CardProps, CardPadding, CardShadow } from './surface';

// Feedback components
export { Spinner } from './feedback';
export type { SpinnerProps, SpinnerSize } from './feedback';

// Form components
export {
  FormField,
  TextInput,
  Select,
  Textarea,
  NumberInput,
} from './forms';
export type {
  FormFieldProps,
  TextInputProps,
  SelectProps,
  SelectOption,
  TextareaProps,
  NumberInputProps,
} from './forms';
