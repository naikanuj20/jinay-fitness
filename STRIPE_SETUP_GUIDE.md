# Stripe Setup Guide for Jinay Fitness

## 🎯 What You Get

Your payment system now supports:
- ✅ **Credit/Debit Cards** (Visa, Mastercard, American Express)
- ✅ **Venmo** (through Stripe)
- ✅ **Bank Transfer**
- ✅ Direct transfers to your bank account
- ✅ Professional checkout experience

---

## 🔑 Getting Your Stripe API Keys

### Step 1: Create Stripe Account (if you haven't already)
1. Go to [https://stripe.com/](https://stripe.com/)
2. Click **"Sign Up"** or **"Start now"**
3. Enter your email and create a password
4. Complete your business information

### Step 2: Access Your API Keys
1. Log in to [https://dashboard.stripe.com/](https://dashboard.stripe.com/)
2. On the left sidebar, click **"Developers"**
3. Click **"API keys"**

### Step 3: Find Your Keys
You'll see two keys:

```
┌─────────────────────────────────────────────────────────────┐
│ Publishable key:  pk_test_51Nx....... (for frontend)        │
│ Secret key:       sk_test_56Jt....... (for backend ONLY)    │
└─────────────────────────────────────────────────────────────┘
```

**⚠️ IMPORTANT:**
- **Publishable key** (pk_*): Safe to expose in frontend code ✅
- **Secret key** (sk_*): KEEP PRIVATE - never commit to GitHub ⚠️

---

## 📝 Update Your `.env.local` File

Open `/Users/anuj/Desktop/jinay-fitness/.env.local` and update:

```dotenv
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
```

**Example (don't use these):**
```dotenv
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51Nx123abc456def789
STRIPE_SECRET_KEY=sk_test_56Jt987zyx654wvu321
```

---

## 🔓 Standard vs Restricted Keys

### Standard Key (Recommended for You) ✅
- **Pros:**
  - Simple to set up
  - Secure enough for accepting payments
  - All necessary permissions included
  - No configuration needed
  
- **Cons:**
  - Full account access
  - Less granular control

### Restricted Key ❌
- **Pros:**
  - Can limit permissions (e.g., only charge payments)
  - More security-conscious approach
  
- **Cons:**
  - Complex setup required
  - Need to configure exact permissions
  - Takes more time to get right

**Recommendation: Use Standard Keys** - Stripe's infrastructure is secure, and you're only exposing the secret key server-side.

---

## 🧪 Testing Your Integration

### 1. Use Test Mode
Your keys automatically start in **Test Mode** (pk_test_, sk_test_)
- No real charges
- Free to test
- Use test card numbers

### 2. Test Cards Available
Use these cards for testing (in test mode only):

| Card Number | Type | Expiry | CVC |
|---|---|---|---|
| 4242 4242 4242 4242 | Visa | Any future | Any |
| 5555 5555 5555 4444 | Mastercard | Any future | Any |
| 3782 822463 10005 | American Express | Any future | Any |

### 3. Test Venmo
When you see the Stripe checkout, you'll see a **Venmo** option.
- In test mode, you can simulate Venmo payments
- Users can select Venmo as payment method

### 4. Run Your App
```bash
npm run dev
```

Visit: http://localhost:3000/online-program
1. Click on any plan
2. Go to payment page
3. Click "Proceed to Payment"
4. You'll see Stripe checkout with all payment options

---

## 🚀 Going Live

### When You're Ready for Real Money:

1. **Complete Stripe Verification**
   - Go to Dashboard → Settings → Account
   - Verify your business information
   - Add bank account for payouts

2. **Get Live Keys**
   - In API Keys page, toggle from **Test mode** to **Live mode**
   - Get your live keys (pk_live_, sk_live_)

3. **Update Your Code**
   - Replace test keys with live keys in `.env.local`
   - Stripe will start processing real payments

4. **Deploy to Production**
   - Update environment variables on your hosting
   - Test one real transaction
   - Monitor your Stripe dashboard

---

## 📊 How to Monitor Payments

1. Go to [https://dashboard.stripe.com/](https://dashboard.stripe.com/)
2. Click **"Payments"** in the sidebar
3. You'll see all transactions:
   - Customer name
   - Amount
   - Payment method (Card, Venmo, Bank)
   - Status (Successful, Failed, etc.)

---

## 💰 Payment Fees

Stripe charges when you receive money:
- **Card payments**: 2.9% + $0.30
- **Venmo payments**: 2.9% + $0.30
- **Bank transfers**: 2.9% + $0.30

Example:
- Customer pays $100
- You receive: $100 - 2.9% - $0.30 = $96.80

---

## 🔐 Security Checklist

- ✅ Secret key in `.env.local` only (never in frontend)
- ✅ Don't commit `.env.local` to GitHub
- ✅ Enable webhook signing (optional but recommended)
- ✅ Use HTTPS in production
- ✅ Never hardcode keys in code

---

## 🆘 Troubleshooting

### "Stripe is not defined"
- Make sure `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Restart your development server

### Payment page shows blank
- Check browser console for errors
- Verify API key is correct
- Ensure `.env.local` is loaded

### Venmo option not showing
- Make sure test keys are used (pk_test_, sk_test_)
- Refresh the page
- Check that `us_bank_account` is in payment_method_types

### Webhook errors
- You don't need webhooks for basic integration
- Only required if you want order confirmations via email

---

## 📞 Getting Help

- **Stripe Documentation**: https://stripe.com/docs
- **Stripe Support**: https://support.stripe.com/
- **API Reference**: https://stripe.com/docs/api

---

## ✅ Setup Checklist

- [ ] Create Stripe account at stripe.com
- [ ] Access API keys at dashboard.stripe.com/apikeys
- [ ] Copy Publishable key
- [ ] Copy Secret key
- [ ] Update NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in .env.local
- [ ] Update STRIPE_SECRET_KEY in .env.local
- [ ] Restart development server (`npm run dev`)
- [ ] Test with test card: 4242 4242 4242 4242
- [ ] Verify payment appears in Stripe dashboard
- [ ] (Later) Switch to live keys for real payments

---

## 🎉 You're All Set!

Your payment integration is complete and ready to accept payments via:
- 💳 Credit/Debit Cards
- 📱 Venmo
- 🏦 Bank Transfer

All payments transfer directly to your bank account with Stripe handling the security.
