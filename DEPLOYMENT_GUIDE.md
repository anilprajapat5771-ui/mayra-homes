# 🚀 Mayra Homes — Complete Deployment Guide

**Written for someone with ZERO coding knowledge.** Follow this exactly. If you get stuck anywhere, WhatsApp me (or ask Claude again).

---

## ✅ What you have

A complete website for Mayra Homes with:

- **5 pages:** Home, Hanumat Vihar, Suncity Anantam, About, Contact
- **Cinematic design** with gold + gemstone theme matching your logo
- **Lead form** that sends every enquiry directly to your WhatsApp (+91 88599 90524)
- **Floating WhatsApp button** on every page
- **Mobile responsive** — looks perfect on phones, tablets, and laptops
- **No backend needed** — the site is 100% static, deploys anywhere for free

**Total cost to go live:** approximately **₹500–800 for your domain**. Hosting is **FREE forever** on Vercel.

---

## 📁 The files

Everything is in the `mayra-homes` folder:

```
mayra-homes/
├── index.html              ← Home page
├── hanumat-vihar.html      ← Hanumat Vihar project page
├── suncity-anantam.html    ← Suncity Anantam project page
├── about.html              ← About us page
├── contact.html            ← Contact page
├── css/
│   └── styles.css          ← All design/styling
├── js/
│   └── main.js             ← WhatsApp lead form + animations
└── images/
    ├── logo/               ← Your Mayra Homes logo
    ├── hanumat-vihar/      ← Hanumat Vihar images
    └── suncity-anantam/    ← Suncity layout plan
```

**Don't rename or move any of these files.** Everything is linked.

---

## 🌐 STEP 1 — Buy your domain (10 minutes, ~₹500–800/year)

A domain is your website's address, like `mayrahomes.in`.

**Recommended: Namecheap** (simple, cheap, reliable)

1. Go to **https://www.namecheap.com**
2. In the search box, type: **mayrahomes.in** (try `.in` first — it's ~₹500 and perfect for India)
3. If `.in` is taken, try: `mayrahomesindia.com`, `mayrahomesvrindavan.com`, or `mymayrahomes.com`
4. Click **"Add to Cart"** → **"Checkout"**
5. **IMPORTANT:** On checkout, turn OFF all the extras they try to add (WhoisGuard is free and OK, but skip everything else like email hosting, SSL, etc. — Vercel will give you SSL free).
6. Create a Namecheap account, pay, and you're done.

✅ **You now own `mayrahomes.in`.** Keep this tab open — we'll come back in Step 3.

---

## 🖥️ STEP 2 — Deploy the website to Vercel (FREE, 15 minutes)

Vercel is a free hosting service. It's what big tech companies use. Zero cost for your traffic levels.

### 2A. Create a Vercel account

1. Go to **https://vercel.com**
2. Click **"Sign Up"** (top right)
3. Choose **"Continue with Email"** (easiest) and use your Gmail
4. Check your inbox → click the verification link → you're logged in.

### 2B. Deploy the site

1. Once logged into Vercel, click **"Add New..."** → **"Project"** (top right)
2. You'll see a screen asking to import from GitHub. **Scroll down** — below that, there's a small option that says **"Deploy without Git"** OR **"Clone Template"** — *look for any "Upload" or "Browse" button*.
3. If you can't find "Deploy without Git", use this simpler method:
   - Go to **https://vercel.com/new** directly
   - Look for a **drag-and-drop area** that says *"Deploy from template"* or similar.
   - If you don't see a drag-drop option, use the **Vercel CLI method** below 👇

### 2C. The EASIEST way: Drag-and-Drop (recommended)

Actually, Vercel has made this incredibly simple. Use this URL:

1. Go to **https://vercel.com/new/upload**
2. **Drag the entire `mayra-homes` folder** from your computer into the upload area.
3. Vercel will ask for a project name — enter: **`mayra-homes`**
4. Click **"Deploy"**.
5. Wait 30 seconds... ✅ **Your site is LIVE!**

Vercel will give you a temporary URL like:
**`https://mayra-homes-xyz.vercel.app`**

🎉 **Open it in your browser. Your website is online.**

---

## 🔗 STEP 3 — Connect your domain to Vercel (15 minutes)

Right now your site is at `mayra-homes-xyz.vercel.app`. Let's change it to `mayrahomes.in`.

### 3A. In Vercel:

1. Go to your project dashboard on Vercel
2. Click **"Settings"** (top menu)
3. Click **"Domains"** (left side)
4. In the input box, type: **`mayrahomes.in`** (or whatever you bought)
5. Click **"Add"**.
6. Vercel will show you 2 DNS records to add. **Keep this tab open!**

You'll see something like:
```
Type: A
Name: @
Value: 76.76.21.21
```

### 3B. In Namecheap (other tab):

1. Go to Namecheap → **Dashboard** → click your domain → **"Manage"**
2. Click **"Advanced DNS"** tab
3. Delete any existing "CNAME Record" with host `www` and any "URL Redirect Record" if present (leave MX/mail records alone).
4. Click **"Add New Record"** and add the records Vercel gave you:
   - **Type:** A Record | **Host:** @ | **Value:** 76.76.21.21 | **TTL:** Automatic
   - **Type:** CNAME | **Host:** www | **Value:** cname.vercel-dns.com | **TTL:** Automatic
5. Click the green checkmark to save each record.

### 3C. Wait 10-30 minutes

DNS propagation takes a little time. Go drink some chai ☕.

After 30 minutes, visit **https://mayrahomes.in** — **your site is LIVE on your own domain with free SSL (https)!** 🎉

---

## 📱 STEP 4 — Test your lead form

This is critical. Do this test:

1. Open **https://mayrahomes.in** on your phone
2. Scroll to the contact form
3. Fill in: Name = "Test", Phone = your own WhatsApp number, select any project
4. Click **"Send via WhatsApp"**
5. WhatsApp should open with a pre-filled message to **+91 88599 90524**
6. Send the message to yourself to confirm it works.

✅ **If the message lands on your WhatsApp, everything works.** Every real lead from now on will arrive the same way.

---

## ✏️ STEP 5 — How to edit content later

You **don't need to know coding** — just basic copy-paste.

### If you want to change prices, add projects, or update text:

1. Open the HTML file you want to edit in a free editor like **Notepad** (Windows) or **TextEdit** (Mac).
   - Better option: Download **VS Code** free from https://code.visualstudio.com — much easier to use.
2. Use **Ctrl+F** (or Cmd+F on Mac) to find the text you want to change.
3. Change the text. Save the file (Ctrl+S).
4. Go to Vercel → your project → **"Deployments"** → **"Redeploy"** OR drag the updated folder again to vercel.com/new/upload.

### Most common edits you'll want to make:

| Change | File | What to search for |
|---|---|---|
| Phone number | All `.html` files + `js/main.js` | `918859990524` |
| Office address | All `.html` files (footer) | `Rukmani Vihar` |
| Hanumat Vihar details | `hanumat-vihar.html` | section you want to edit |
| Suncity details | `suncity-anantam.html` | section you want to edit |
| Add Instagram link | All `.html` files (footer) | `<a href="#" class="footer-social"` — replace `#` with your link |

### To add a new project later:

Just copy `hanumat-vihar.html`, rename it (e.g. `new-project.html`), and edit the text and images inside it.

---

## 🆘 Troubleshooting

**"My domain isn't working after I added DNS records"**
→ Wait up to 24 hours. DNS can be slow. Also check that in Namecheap → Advanced DNS, the records say "A Record" with @ and "CNAME" with www exactly.

**"The WhatsApp form doesn't open WhatsApp"**
→ WhatsApp must be installed on the device. On desktop, it opens WhatsApp Web. Test on your phone first.

**"I want to change the logo"**
→ Replace `images/logo/mayra-logo.jpg` with a new file (same filename) and redeploy.

**"I want to change the hero images"**
→ Files are in `images/hanumat-vihar/` and `images/suncity-anantam/`. Replace with new images using the same filenames.

**"I want to add email capture later"**
→ We can hook up free services like Formspree (3 min setup) later if you ever want email leads too.

---

## 💰 Ongoing costs

- **Domain renewal:** ~₹500-1000/year (Namecheap will email you)
- **Hosting:** **₹0** — Vercel free tier handles up to 100GB/month traffic. You'll never hit that.
- **SSL/https:** **Free** — automatic via Vercel.
- **Total yearly cost:** ~₹500-1000 only.

---

## 🎯 Alternative hosting (if Vercel feels complicated)

### Option B: Netlify
Same as Vercel, also free. Go to https://app.netlify.com/drop and just **drag the `mayra-homes` folder** directly onto the page. Done in 30 seconds. Then connect the domain the same way.

### Option C: Hostinger (if you prefer a traditional Indian host)
1. Buy their "Single Web Hosting" plan (~₹2,400/year, includes free domain).
2. In hPanel → **"File Manager"** → upload all contents of the `mayra-homes` folder to the `public_html` folder.
3. Your site will be live at your domain immediately.
4. *Note: Hostinger is slightly slower than Vercel for the cinematic animations, but it works.*

---

## 📞 Summary

You now have:

✅ A premium cinematic website for Mayra Homes  
✅ A way to deploy it free forever (Vercel)  
✅ A domain plan (~₹500/year)  
✅ Lead capture that sends to your WhatsApp instantly  
✅ Floating WhatsApp button on every page  
✅ Mobile-responsive, professional design  
✅ Simple way to edit content yourself later  

**Share your live URL proudly — this is a proper portfolio-worthy website for your first client.** 🎉

---

_Built for Atul Pathak · Mayra Homes · Ghar se badhkar ek rishta_
