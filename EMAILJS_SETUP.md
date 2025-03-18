# Setting Up EmailJS for Your Contact Form

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which is sufficient for most portfolio websites

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Once connected, note down the **Service ID**

## Step 3: Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Design your email template using the variables:
   - `{{user_name}}` - The name from the contact form
   - `{{user_email}}` - The email from the contact form
   - `{{message}}` - The message from the contact form
4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API keys section

## Step 5: Update Your Code

1. Open `/src/components/homepage/Contact.jsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
   const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
   const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
   ```

## Testing

After completing the setup, test your contact form by:
1. Running your portfolio website locally
2. Filling out the contact form
3. Submitting the form
4. Checking your email to ensure you received the message

## Security Note

Your EmailJS Public Key is safe to use in client-side code. However, never expose any private keys or sensitive credentials in your front-end code.
