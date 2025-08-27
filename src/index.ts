export * from './components/Button';
export * from './theme/PinnateProvider';
export * from './components/Badge';
export * from './icons';
export * from './components/Form/InputHint';
export * from './components/Icon';
export * from './components/Tooltip';
export * from './components/InfoTooltip';
export * from './components/Navigation/Breadcrumb';
export * from './components/Form';
export * from './components/Form/Checkbox';
export * from './components/Form/CheckboxGroup';
export * from './components/Alert';
export * from './components/Notification';
export * from './components/Dropdown';

// Component metadata for form builders
export { default as Components, componentMetadata, type ComponentMetadata } from './metadata';

// Namespace-style exports
import { Button } from './components/Button';
import { PinnateProvider } from './theme/PinnateProvider';
import { Badge } from './components/Badge';
import { Icon } from './components/Icon';
import { Tooltip } from './components/Tooltip';
import { InfoTooltip } from './components/InfoTooltip';
import { Breadcrumb } from './components/Navigation/Breadcrumb';
import { Alert } from './components/Alert';
import { Notification } from './components/Notification';
import { Dropdown } from './components/Dropdown';

// Form components
import { Input } from './components/Form/Input';
import { InputGroup } from './components/Form/InputGroup';
import { InputHint } from './components/Form/InputHint';
import { FormLabel } from './components/Form/FormLabel';
import { Switch } from './components/Form/Switch';
import { Select } from './components/Form/Select';
import { SelectGroup } from './components/Form/SelectGroup';
import { Textbox } from './components/Form/Textbox';
import { TextboxGroup } from './components/Form/TextboxGroup';
import { Checkbox } from './components/Form/Checkbox';
import { CheckboxGroup } from './components/Form/CheckboxGroup';

// Namespace export as 'p'
export const p = {
  // Core components
  Provider: PinnateProvider,
  Button,
  Badge,
  Icon,
  Tooltip,
  InfoTooltip,
  Breadcrumb,
  Alert,
  Notification,
  Dropdown,
  Input,
  InputGroup,
  InputHint,
  FormLabel,
  Switch,
  Select,
  SelectGroup,
  Textbox,
  TextboxGroup,
  Checkbox,
  CheckboxGroup,
} as const;
