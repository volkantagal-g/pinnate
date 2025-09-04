import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Form } from './Form';
import { InputGroup } from '@Components/Form/InputGroup/InputGroup';
import { TextboxGroup } from '@Components/Form/TextboxGroup/TextboxGroup';
import { SelectGroup } from '@Components/Form/SelectGroup/SelectGroup';
import { CheckboxGroup } from '@Components/Form/CheckboxGroup/CheckboxGroup';
import { Switch } from '@Components/Form/Switch/Switch';
import { Button } from '@Components/Button/Button';

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Form',
  component: Form,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: '20px', maxWidth: '600px' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Form component with API endpoint integration and automatic notifications.',
      },
    },
  },
  argTypes: {
    method: {
      control: { type: 'select' },
      options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
    encoding: {
      control: { type: 'select' },
      options: ['application/json', 'multipart/form-data', 'application/x-www-form-urlencoded'],
    },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    endpoint: '/api/contact',
    name: 'contact-form',
    method: 'POST',
    encoding: 'application/json',
    successMessage: 'Form submitted successfully!',
    errorMessage: 'An error occurred while submitting the form.',
  },
  render: (args) => (
    <Form {...args}>
      <InputGroup
        label="Name"
        required
        placeholder="Enter your name"
      />
      <InputGroup
        label="Email"
        type="email"
        required
        placeholder="Enter your email"
      />
      <TextboxGroup
        label="Message"
        required
        placeholder="Enter your message"
        hint="Please provide details about your inquiry"
      />
      <div className="form-actions">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  ),
};

export const WithCustomSubmit: Story = {
  args: {
    endpoint: '/api/contact',
    method: 'POST',
    encoding: 'application/json',
    successMessage: 'Contact form submitted successfully!',
    errorMessage: 'Failed to submit contact form.',
  },
  render: (args) => (
    <Form
      {...args}
      onSubmit={async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate success/error randomly
        if (Math.random() > 0.5) {
          return { success: true, id: Math.random().toString(36) };
        } else {
          throw new Error('Simulated API error');
        }
      }}
    >
      <InputGroup
        label="Name"
        required
        placeholder="Enter your name"
      />
      <InputGroup
        label="Email"
        type="email"
        required
        placeholder="Enter your email"
      />
      <TextboxGroup
        label="Message"
        required
        placeholder="Enter your message"
      />
      <div className="form-actions">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  ),
};

export const ComplexForm: Story = {
  args: {
    endpoint: '/api/user-profile',
    method: 'PUT',
    encoding: 'application/json',
    successMessage: 'Profile updated successfully!',
    errorMessage: 'Failed to update profile.',
  },
  render: (args) => (
    <Form {...args}>
      <div className="form-section">
        <h3>Personal Information</h3>
        <div className="form-row two-columns">
          <InputGroup
            label="First Name"
            required
            placeholder="Enter first name"
          />
          <InputGroup
            label="Last Name"
            required
            placeholder="Enter last name"
          />
        </div>
        <InputGroup
          label="Email"
          type="email"
          required
          placeholder="Enter email address"
        />
        <InputGroup
          label="Phone"
          type="tel"
          placeholder="Enter phone number"
        />
      </div>

      <div className="form-section">
        <h3>Preferences</h3>
        <SelectGroup
          label="Country"
          options={[
            { value: 'tr', label: 'Turkey' },
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'de', label: 'Germany' },
          ]}
          placeholder="Select country"
        />
        <CheckboxGroup
          label="Newsletter"
          hint="Receive updates about new features and products"
        />
        <Switch
          name="emailNotifications"
          label="Email notifications"
          hint="Get notified about important updates"
        />
      </div>

      <div className="form-section">
        <h3>Additional Information</h3>
        <TextboxGroup
          label="Bio"
          placeholder="Tell us about yourself"
          hint="Optional: A brief description about yourself"
        />
      </div>

      <div className="form-actions">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </div>
    </Form>
  ),
};

export const FileUpload: Story = {
  args: {
    endpoint: '/api/upload',
    method: 'POST',
    encoding: 'multipart/form-data',
    successMessage: 'File uploaded successfully!',
    errorMessage: 'Failed to upload file.',
  },
  render: (args) => (
    <Form {...args}>
      <InputGroup
        label="Document Title"
        required
        placeholder="Enter document title"
      />
      <div className="form-group">
        <label htmlFor="file">Upload Document</label>
        <input
          id="file"
          name="file"
          type="file"
          accept=".pdf,.doc,.docx"
          required
        />
        <small>Accepted formats: PDF, DOC, DOCX (Max 10MB)</small>
      </div>
      <TextboxGroup
        label="Description"
        placeholder="Describe the document"
      />
      <div className="form-actions">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </div>
    </Form>
  ),
};

export const Disabled: Story = {
  args: {
    endpoint: '/api/contact',
    method: 'POST',
    encoding: 'application/json',
    disabled: true,
  },
  render: (args) => (
    <Form {...args}>
      <InputGroup
        label="Name"
        required
        placeholder="Enter your name"
      />
      <InputGroup
        label="Email"
        type="email"
        required
        placeholder="Enter your email"
      />
      <div className="form-actions">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  ),
};
