export enum Button_Variant {
   Primary = 'primary',
   Secondary = 'secondary',
   Destructive = 'destructive'
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   onClick?: () => void
   variant?: Button_Variant
   children: React.ReactNode
}
