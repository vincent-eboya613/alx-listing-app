/**
    * interfaces/index.ts:
    * This file is intended to serve as a centralized location to define and export all TypeScript interfaces in your 
    * project. It helps maintain structure and makes it easier to find and update interface definitions.
 */
//* Represents the properties (props) that will be passed to a Card component.
export interface CardProps {
    title: string;
    description: string;
    image: string;
}

//* Represents the properties (props) that will be passed to a Button component.

export interface ButtonProps {
    label: string;
    onClick: () => void;
}
