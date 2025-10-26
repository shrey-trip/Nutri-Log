# Food Logger App - Design Guidelines

## Design Approach

**Reference-Based Approach**: Following the provided UI reference image with inspiration from modern nutrition tracking apps (MyFitnessPal, Cronometer, Lose It!) that balance data density with clean, scannable layouts.

**Design Principles**:
- Data clarity over decoration - every element serves a functional purpose
- Quick data entry - minimize friction for logging meals
- Scannable meal sections - easy to review daily intake at a glance
- Information hierarchy - macros and totals prominently displayed

## Typography System

**Font Family**: 
- Primary: Inter or SF Pro Display (Google Fonts CDN)
- Monospace: JetBrains Mono for numerical data (calories, macros)

**Type Scale**:
- Page Title: text-2xl, font-semibold (Daily Log, Settings)
- Section Headers: text-lg, font-semibold (Breakfast, Lunch, Dinner)
- Food Names: text-base, font-medium
- Meta Info (time, ingredients): text-sm, font-normal
- Macro Labels: text-xs, font-medium, uppercase tracking-wide
- Macro Values: text-base, font-mono, font-semibold
- Total/Summary: text-xl, font-bold, font-mono

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, and 8 for consistent rhythm (p-2, gap-4, mb-6, mt-8)

**Grid Structure**:
- App Shell: Side navigation (fixed width 240px on desktop, collapsible drawer on mobile) + main content area
- Main Content: Single column, max-w-4xl, centered with px-4 md:px-6 lg:px-8
- Meal Sections: Stacked vertically with mb-6 spacing
- Food Entry Cards: Full width within section, mb-2 between entries
- Macro Grid: 4-column grid on desktop (Calories, Protein, Carbs, Fat), 2-column on mobile

**Responsive Breakpoints**:
- Mobile: Single column, hamburger menu
- Tablet (md): Side nav visible, single column content
- Desktop (lg): Full layout with persistent side nav

## Component Library

### Navigation

**Side Menu (Desktop)**:
- Fixed position, full height, w-60
- Logo/app name at top (text-xl, font-bold, p-6)
- Navigation items: text-sm, font-medium, py-3, px-4, rounded-lg on hover
- Bottom section: Import/Export button, Calorie Goal Setting button
- Active state: slightly emphasized background

**Mobile Menu**:
- Hamburger icon (top-left)
- Slide-in drawer overlay
- Close button (top-right of drawer)

### Dashboard/Summary Cards

**Daily Summary Card**:
- Prominent placement at top of main content
- Horizontal layout on desktop, vertical on mobile
- Large total calorie count (text-3xl, font-mono, font-bold)
- Progress bar showing calories consumed vs. goal
- Macro breakdown in 4-column grid below
- Each macro: Label (text-xs, uppercase) + Value (text-lg, font-mono) + Unit (text-sm, muted)

### Meal Section Components

**Meal Section Container**:
- Rounded border, subtle border treatment
- Section header: flex justify-between with meal name + "Add Food" button
- Collapsible/expandable functionality
- Empty state: centered message with icon, "No food logged yet"

**Food Entry Card**:
- Compact card within meal section
- Grid layout: 
  - Row 1: Food name (left, text-base, font-medium) + Time (right, text-sm, muted) + Edit/Delete icons
  - Row 2: Ingredients list (text-sm, muted, italic)
  - Row 3: Macro pills (inline-flex gap-2): Cal • Protein • Carbs • Fat (text-xs, monospace)
- Hover: subtle elevation change
- Border-left accent to distinguish entries

### Forms & Inputs

**Add/Edit Food Modal**:
- Centered overlay modal, max-w-lg
- Header: "Add Food to [Meal Name]" + close button
- Form fields stacked vertically with gap-4:
  - Food Name: text input, autofocus
  - Time: time picker input
  - Ingredients: textarea, 3-4 rows
  - Macros: 4-column grid (Calories, Protein, Carbs, Fat) with number inputs, units labeled
- Actions: Cancel (ghost button) + Save (primary button) aligned right

**Input Styling**:
- Border: subtle, rounded-lg
- Focus state: border emphasis, ring treatment
- Labels: text-sm, font-medium, mb-1
- Helper text: text-xs, muted

**Settings Modal (Calorie Goal)**:
- Similar modal structure
- Number input for daily calorie target
- Display current goal prominently
- Save button

### Buttons

**Primary Action**: 
- Solid treatment, rounded-lg, px-4, py-2, font-medium
- Use for: Save, Add Food, Import/Export

**Secondary/Ghost**:
- Transparent with border, rounded-lg
- Use for: Cancel, Edit

**Icon Buttons**:
- Small, square or circular, p-2
- Use for: Edit, Delete, Menu toggle, Close modal

**Add Food Button**:
- Positioned in meal section header
- Icon + text on desktop, icon-only on mobile
- Slightly emphasized to encourage action

### Data Display

**Progress Indicators**:
- Horizontal progress bars for calorie tracking
- Segment bars for macro splits
- Percentage labels inline

**Macro Pills/Badges**:
- Small, pill-shaped containers
- Monospace numbers for alignment
- Inline display with separator (•) between items

**Empty States**:
- Centered icon (from Heroicons)
- Text message (text-base, muted)
- Suggested action button below

### Date Navigation

**Date Selector**:
- Horizontal layout: Previous day arrow + Current date display + Next day arrow
- Date display: text-lg, font-semibold, centered
- "Today" shortcut button
- Position: Below summary, above meal sections

## Icons

**Icon Library**: Heroicons (CDN) - outline style for navigation, solid for actions

**Icon Usage**:
- Menu: Bars3Icon
- Add: PlusIcon
- Edit: PencilIcon  
- Delete: TrashIcon
- Import: ArrowDownTrayIcon
- Export: ArrowUpTrayIcon
- Settings: Cog6ToothIcon
- Calendar: CalendarIcon
- Clock: ClockIcon
- Close: XMarkIcon
- Empty plate: <!-- CUSTOM ICON: empty plate illustration -->

## Accessibility

- Form inputs: proper labels, aria-labels for icon buttons
- Modal: trap focus, close on Escape, aria-modal
- Keyboard navigation: tab order, enter to submit
- Color contrast: minimum WCAG AA compliance
- Screen reader announcements for dynamic updates (food added/deleted)

## Images

**No Hero Image Required** - This is a utility app focused on data entry and tracking. Visual elements are minimal and functional rather than decorative.

## Animation Guidelines

**Minimal, Functional Motion**:
- Modal enter/exit: subtle fade + scale (200ms)
- Section collapse/expand: smooth height transition (300ms)
- Delete animation: fade out (200ms)
- Loading states: simple spinner
- **Avoid**: Excessive parallax, scroll-triggered effects, decorative animations

## Layout Specifics

**Viewport Strategy**:
- App uses natural scrolling - no forced viewport heights
- Side nav: fixed full height
- Main content: scroll within container
- Modals: centered overlay

**Vertical Rhythm**:
- Page padding: py-6 md:py-8
- Section spacing: mb-6
- Card spacing: mb-2 within sections, mb-4 between different components
- Form field spacing: gap-4

**Data Density**:
- Prioritize information display over whitespace
- Compact card design for food entries
- Scannable macro display
- Efficient use of screen real estate for data-heavy views