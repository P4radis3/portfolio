import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const path = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function BasePath(prefix: string) {
  return prefix?.startsWith('/') ? `${path}${prefix}` : prefix
}
