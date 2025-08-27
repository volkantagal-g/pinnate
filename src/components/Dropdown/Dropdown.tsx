import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Display/Icon/Icon';
import s from './Dropdown.module.scss';

export type DropdownTriggerIcon = 'arrowUp' | 'arrowDown' | 'flash';

export interface DropdownSection {
  subheader: string;
  items: Array<{
    label: string;
    value: string;
    selected?: boolean;
  }>;
}

export interface DropdownProps {
  /** User profile information */
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  /** Sections to display in the dropdown */
  sections?: DropdownSection[];
  /** Icon to use for the trigger button */
  triggerIcon?: DropdownTriggerIcon;
  /** Whether the dropdown is open by default */
  defaultOpen?: boolean;
  /** Whether the dropdown is controlled */
  open?: boolean;
  /** Callback when dropdown open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Callback when a section item is selected */
  onItemSelect?: (sectionIndex: number, itemValue: string) => void;
  /** Custom class name */
  className?: string;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
}

export function Dropdown({
  user = { name: 'John Doe', email: 'john.doe@getir.com' },
  sections = [
    {
      subheader: 'Subheader',
      items: [
        { label: 'Label', value: '1' },
        { label: 'Label', value: '2' },
        { label: 'Label', value: '3' },
      ],
    },
    {
      subheader: 'Subheader',
      items: [
        { label: 'Label', value: '4' },
        { label: 'Label', value: '5' },
        { label: 'Label', value: '6' },
      ],
    },
    {
      subheader: 'Subheader',
      items: [
        { label: 'Label', value: '7' },
        { label: 'Label', value: '8' },
        { label: 'Label', value: '9' },
      ],
    },
  ],

  triggerIcon = 'arrowUp',
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  onItemSelect,
  className = '',
  disabled = false,
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (disabled) return;

    const newOpen = !isOpen;
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleItemClick = (sectionIndex: number, itemValue: string) => {
    onItemSelect?.(sectionIndex, itemValue);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        if (!isControlled) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isControlled, onOpenChange]);

  const triggerIconName =
    triggerIcon === 'arrowUp' ? 'ArrowUp' : triggerIcon === 'arrowDown' ? 'ArrowDown' : 'Flash';
  const triggerIconRotation = isOpen && triggerIcon === 'arrowDown' ? s.iconRotated : '';

  return (
    <div className={`${s.dropdownContainer} ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        className={`${s.trigger} ${isOpen ? s.triggerOpen : ''} ${disabled ? s.triggerDisabled : ''}`}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* TODO: Add Avatar Component */}
        <div className={s.triggerContent}>
          {user.avatar && <img src={user.avatar} alt={user.name} className={s.avatar} />}
          <span className={s.userName}>{user.name}</span>
        </div>
        <Icon
          name={triggerIconName}
          size={16}
          className={`${s.triggerIcon} ${triggerIconRotation}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={s.menu}>
          {/* User Profile Header */}
          <div className={s.profileHeader}>
            {user.avatar && <img src={user.avatar} alt={user.name} className={s.profileAvatar} />}
            <div className={s.profileInfo}>
              <div className={s.profileName}>{user.name}</div>
              <div className={s.profileEmail}>{user.email}</div>
            </div>
          </div>

          {/* Sections */}
          <div className={s.sections}>
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={s.section}>
                <div className={s.sectionSubheader}>{section.subheader}</div>
                <div className={s.sectionItems}>
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={`${s.sectionItem} ${item.selected ? s.sectionItemSelected : ''}`}
                      onClick={() => handleItemClick(sectionIndex, item.value)}
                    >
                      <div className={s.radioButton}>
                        {item.selected && <div className={s.radioButtonSelected} />}
                      </div>
                      <span className={s.itemLabel}>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
