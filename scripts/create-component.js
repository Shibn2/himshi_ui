import fs from "fs";
import path from "path";

const componentName = process.argv[2];

if (!componentName) {
  console.error("Provide a component name!!");
  process.exit(1);
}

const baseDir = `src/components/${componentName}`;

if (fs.existsSync(baseDir)) {
  console.error("Component already exists!!");
}

fs.mkdirSync(baseDir, { recursive: true });

// 1. component.tsx

fs.writeFileSync(
  path.join(baseDir, `${componentName}.tsx`),
  `import styles from './${componentName}.module.scss';

export const ${componentName} = () => {
  return <div className={styles.${componentName.toLowerCase()}}>Hello ${componentName}</div>;
};`
);

// 2. <component>.module.scss

fs.writeFileSync(
  path.join(baseDir, `${componentName}.module.scss`),
  `.${componentName.toLowerCase()} {
  // your styles here
}`
);

// 3. <component>.stories.tsx
fs.writeFileSync(
  path.join(baseDir, `${componentName}.stories.tsx`),
  `import type { Meta, StoryObj } from '@storybook/react';
  import { ${componentName} } from './${componentName}';
  
  const meta: Meta<typeof ${componentName}> = {
    component: ${componentName},
    title: 'Components/${componentName}',
  };
  
  export default meta;
  type Story = StoryObj<typeof ${componentName}>;
  
  export const Default: Story = {
    args: {},
  };
  `
);

// 4. index.ts
fs.writeFileSync(
  path.join(baseDir, `index.ts`),
  `export * from './${componentName}';`
);

console.log(
  `✅ ${componentName} component created in src/components/${componentName}`
);
