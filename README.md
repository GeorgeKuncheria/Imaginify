
# 🖼️ AI Image SaaS Platform

Welcome to the AI Image SaaS platform! This application provides state-of-the-art image processing capabilities, integrates secure payment options, and includes a host of AI-powered features. Whether you're looking to enhance images, remove unwanted objects, or perform advanced searches, this platform has everything you need. Inspired by JavaScript Mastery's in-depth tutorial, this project is an excellent addition to your portfolio and a learning resource.

## 🚀 Features

- **Authentication & Authorization:** Seamless sign-up, login, and protected routes using Clerk.
- **Community Image Showcase:** Discover and explore user-generated image transformations with pagination.
- **Advanced Image Search:** Efficiently find images based on content or objects inside the image.
- **AI Image Transformations:**
  - **Image Restoration:** Bring old or damaged images back to life.
  - **Image Recoloring:** Customize object colors within images.
  - **Generative Fill:** Seamlessly fill in missing areas of an image.
  - **Object Removal:** Remove unwanted elements with precision.
  - **Background Removal:** Extract subjects from their backgrounds effortlessly.
- **Download & Share:** Easily save and share transformed images.
- **Transformation Management:** Manage, delete, and update image transformations.
- **Credits System:** Earn or purchase credits to access image transformations.
- **Profile Page:** View personal image transformations and manage credits.
- **Stripe Integration:** Securely purchase credits with Stripe for uninterrupted service.
- **Responsive UI/UX:** A seamless experience across devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **Image Processing:** [Cloudinary](https://cloudinary.com/)
- **Payments:** [Stripe](https://stripe.com/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Component Library:** [Shadcn](https://shadcn.dev/)

## ⚙️ Quick Start

### Prerequisites
Ensure the following are installed on your machine:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adrianhajdin/imaginify.git
   cd imaginify
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following:

   ```bash
   #NEXT
   NEXT_PUBLIC_SERVER_URL=

   #MONGODB
   MONGODB_URL=

   #CLERK
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   WEBHOOK_SECRET=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   #CLOUDINARY
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   #STRIPE
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   ```

   Replace placeholders with your actual credentials.

4. **Run the project**:
   ```bash
   npm run dev
   ```

5. **View the project**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Folder Structure

- **tailwind.config.ts**: Tailwind configuration file.
- **globals.css**: Global styling.
- **constants/index.ts**: Centralized constants.
- **user.model.ts & transaction.model.ts**: Mongoose models for users and transactions.
- **InsufficientCreditsModal.tsx**: Modal component for insufficient credits.
- **Shared Components**: Reusable UI components like `CustomField`, `Collection`, `Search`, and more.
- **Transformation Pages**: Handle viewing and updating transformations.
- **Webhooks**: Routes for handling webhooks (Clerk, Stripe).
- **Profile & Checkout Pages**: Manage user profile and payment details.

## 📚 Additional Information

This project offers advanced features and follows best practices in web development and software architecture. If you're new to the technologies used, feel free to check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Clerk Authentication](https://clerk.dev/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Stripe Integration](https://stripe.com/docs)

## 🤝 Join the Community

If you're facing any issues or need guidance, join the [JavaScript Mastery Discord](https://discord.com/) where 27k+ members actively collaborate and help each other out.

# 🖼️ AI Image SaaS Platform

Welcome to the AI Image SaaS platform! This application provides state-of-the-art image processing capabilities, integrates secure payment options, and includes a host of AI-powered features. Whether you're looking to enhance images, remove unwanted objects, or perform advanced searches, this platform has everything you need. Inspired by JavaScript Mastery's in-depth tutorial, this project is an excellent addition to your portfolio and a learning resource.

## 🚀 Features

- **Authentication & Authorization:** Seamless sign-up, login, and protected routes using Clerk.
- **Community Image Showcase:** Discover and explore user-generated image transformations with pagination.
- **Advanced Image Search:** Efficiently find images based on content or objects inside the image.
- **AI Image Transformations:**
  - **Image Restoration:** Bring old or damaged images back to life.
  - **Image Recoloring:** Customize object colors within images.
  - **Generative Fill:** Seamlessly fill in missing areas of an image.
  - **Object Removal:** Remove unwanted elements with precision.
  - **Background Removal:** Extract subjects from their backgrounds effortlessly.
- **Download & Share:** Easily save and share transformed images.
- **Transformation Management:** Manage, delete, and update image transformations.
- **Credits System:** Earn or purchase credits to access image transformations.
- **Profile Page:** View personal image transformations and manage credits.
- **Stripe Integration:** Securely purchase credits with Stripe for uninterrupted service.
- **Responsive UI/UX:** A seamless experience across devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **Image Processing:** [Cloudinary](https://cloudinary.com/)
- **Payments:** [Stripe](https://stripe.com/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Component Library:** [Shadcn](https://shadcn.dev/)

## ⚙️ Quick Start

### Prerequisites
Ensure the following are installed on your machine:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adrianhajdin/imaginify.git
   cd imaginify
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following:

   ```bash
   #NEXT
   NEXT_PUBLIC_SERVER_URL=

   #MONGODB
   MONGODB_URL=

   #CLERK
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   WEBHOOK_SECRET=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   #CLOUDINARY
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   #STRIPE
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   ```

   Replace placeholders with your actual credentials.

4. **Run the project**:
   ```bash
   npm run dev
   ```

5. **View the project**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Folder Structure

- **tailwind.config.ts**: Tailwind configuration file.
- **globals.css**: Global styling.
- **constants/index.ts**: Centralized constants.
- **user.model.ts & transaction.model.ts**: Mongoose models for users and transactions.
- **InsufficientCreditsModal.tsx**: Modal component for insufficient credits.
- **Shared Components**: Reusable UI components like `CustomField`, `Collection`, `Search`, and more.
- **Transformation Pages**: Handle viewing and updating transformations.
- **Webhooks**: Routes for handling webhooks (Clerk, Stripe).
- **Profile & Checkout Pages**: Manage user profile and payment details.

## 📚 Additional Information

This project offers advanced features and follows best practices in web development and software architecture. If you're new to the technologies used, feel free to check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Clerk Authentication](https://clerk.dev/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Stripe Integration](https://stripe.com/docs)

## 🤝 Join the Community

If you're facing any issues or need guidance, join the [JavaScript Mastery Discord](https://discord.com/) where 27k+ members actively collaborate and help each other out.
