export enum Typography_Variant {
   Heading_XL = 'heading_extra_Large',
   Heading_L = 'heading_large',
   Heading_M = 'heading_medium',
   Heading_S = 'heading_small',
   Paragraph_Normal = 'paragraph_normal',
}

export interface TypographyProps {
   children: React.ReactNode
   variant?: Typography_Variant
   className?: string
}

