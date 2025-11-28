# Color Contrast Fixes Required

## Issues Found:
1. **About Page**: `text-muted-foreground` is not visible - needs to be `text-gray-700`
2. **About Page**: Credentials cards have `text-black` which should be `text-gray-900`
3. **Contact Page**: Form labels use `text-black` - change to `text-gray-900`
4. **Contact Page**: Response time card uses `bg-black` - change to `bg-gray-900`
5. **Online Program**: Title uses `text-black` - change to `text-gray-900`
6. **Plan Details**: Price text uses `text-black` - change to `text-gray-900`

## Changes to Make:

### /src/app/about/page.tsx
Line 18: Change `text-black` to `text-gray-900`
Lines 19, 24: Change `text-muted-foreground` to `text-gray-700 leading-relaxed`
Line 29: Add className to buttonVariants: `className: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"`
Line 89: Change `text-black` to `text-gray-900`
Lines 102, 107, 112, 117: Change credentials cards:
  - `bg-gray-50` to `bg-white`
  - `shadow-sm` to `shadow-md`  
  - `border-gray-200` to `border-gray-300`
  - `hover:border-black` to `hover:border-gray-900`
  - `text-black` to `text-gray-900`

### /src/app/contact/page.tsx
Line 45: Change `text-black` to `text-gray-900`
Line 58: Change `text-black` to `text-gray-900` and add `text-2xl`
Line 75: Change `text-black` to `text-gray-900`
Lines 88, 101, 114, 127: Change form labels from `text-black` to `text-gray-900`
Line 139: Change button from `bg-black` to `bg-gray-900`
Line 156: Change `text-black` to `text-gray-900 text-2xl`
Lines 161, 163, 169, 171, 177, 179: Change icons and labels from `text-black` to `text-gray-900`
Lines 163, 171, 179: Change hover from `hover:text-black` to `hover:text-gray-900`
Line 189: Change card from `bg-black border-2 border-black` to `bg-gray-900 border-2 border-gray-900`
Line 191: Add `text-xl` to CardTitle
Line 194: Change `text-gray-200` to `text-gray-100`

### /src/app/online-program/page.tsx
Line 22: Change `text-black` to `text-gray-900`
Line 23: Change `text-muted-foreground` to `text-gray-700 leading-relaxed`
Line 28: Add className: `className: "bg-gray-900 text-white hover:bg-gray-800"`

### /src/app/plan/[id]/page.tsx
Line 129: Change `text-black` to `text-gray-900`
Line 134: Change `text-black` to `text-gray-900`
Line 123: Change `hover:text-black` to `hover:text-gray-900`

## Professional Color Palette:
- **Primary Text**: `text-gray-900` (almost black, but softer)
- **Secondary Text**: `text-gray-700` (readable on white)
- **Light Text**: `text-gray-600` (for less important info)
- **Buttons**: `bg-gray-900` with `hover:bg-gray-800`
- **Cards**: `bg-white` with `border-gray-300`
- **Hover**: `hover:border-gray-900`
- **Shadows**: `shadow-md` or `shadow-lg`
