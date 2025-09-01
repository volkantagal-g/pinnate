// Auto-generated exports based on @export flags
export * from './components/Alert';
export * from './components/Dropdown';
export * from './components/Button';
export * from './components/Modal';
export * from './components/InfoTooltip';
export * from './components/Notification';
export * from './components/Tooltip';
export * from './components/Display/Badge';
export * from './components/Display/Icon';
export * from './components/Display/Paragraph';
export * from './components/Display/Text';
export * from './components/Navigation/Breadcrumb';
export * from './components/Display/Image';
export * from './components/Form/Checkbox';
export * from './components/Form/CheckboxGroup';
export * from './components/Form/FormLabel';
export * from './components/Form/InputGroup';
export * from './components/Form/Input';
export * from './components/Form/InputHint';
export * from './components/Form/Select';
export * from './components/Form/SelectGroup';
export * from './components/Form/Switch';
export * from './components/Form/Textbox';
export * from './components/Form/TextboxGroup';

// Theme provider
export { PinnateProvider } from './theme/PinnateProvider';

// Design Tokens and utilities
export * from './tokens';

// Component metadata for form builders
export { default as Components, componentMetadata, type ComponentMetadata } from './metadata';

// Namespace-style exports
import { Alert } from './components/Alert';
import { Dropdown } from './components/Dropdown';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { InfoTooltip } from './components/InfoTooltip';
import { Notification } from './components/Notification';
import { Tooltip } from './components/Tooltip';
import { Badge } from './components/Display/Badge';
import { Icon } from './components/Display/Icon';
import { Paragraph } from './components/Display/Paragraph';
import { Text } from './components/Display/Text';
import { Breadcrumb } from './components/Navigation/Breadcrumb';
import { Image } from './components/Display/Image';
import { Checkbox } from './components/Form/Checkbox';
import { CheckboxGroup } from './components/Form/CheckboxGroup';
import { FormLabel } from './components/Form/FormLabel';
import { InputGroup } from './components/Form/InputGroup';
import { Input } from './components/Form/Input';
import { InputHint } from './components/Form/InputHint';
import { Select } from './components/Form/Select';
import { SelectGroup } from './components/Form/SelectGroup';
import { Switch } from './components/Form/Switch';
import { Textbox } from './components/Form/Textbox';
import { TextboxGroup } from './components/Form/TextboxGroup';
import { PinnateProvider } from './theme/PinnateProvider';
import { defaultTokens } from './tokens/default';

// Namespace export as 'p'
export const p = {
  Alert,
  Dropdown,
  Button,
  Modal,
  InfoTooltip,
  Notification,
  Tooltip,
  Badge,
  Icon,
  Paragraph,
  Text,
  Breadcrumb,
  Image,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  InputGroup,
  Input,
  InputHint,
  Select,
  SelectGroup,
  Switch,
  Textbox,
  TextboxGroup,
  Provider: PinnateProvider,
  DefaultTokens: defaultTokens,
} as const;
